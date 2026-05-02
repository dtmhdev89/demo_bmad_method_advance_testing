import { describe, it, expect, vi, beforeEach } from "vitest";
import { registerAction, RegisterState } from "@/app/(auth)/register/actions";
import { SUPPORTED_LANGUAGES } from "@/app/(auth)/register/constants";
import { prisma } from "database";
import * as auth from "@/auth";

// Helper: create a FormData with given fields
function makeFormData(
  email: string,
  password: string,
  languages: string[]
): FormData {
  const fd = new FormData();
  fd.set("email", email);
  fd.set("password", password);
  languages.forEach((lang) => fd.append("languages", lang));
  return fd;
}

describe("registerAction – validation", () => {
  it("returns fieldError for invalid email", async () => {
    const fd = makeFormData("not-an-email", "password123", ["ja"]);
    const result = await registerAction({}, fd);
    expect(result.fieldErrors?.email).toBeDefined();
  });

  it("returns fieldError for short password", async () => {
    const fd = makeFormData("test@example.com", "short", ["ja"]);
    const result = await registerAction({}, fd);
    expect(result.fieldErrors?.password).toBeDefined();
  });

  it("returns fieldError when no language selected", async () => {
    const fd = makeFormData("test@example.com", "password123", []);
    const result = await registerAction({}, fd);
    expect(result.fieldErrors?.languages).toBeDefined();
  });

  it("returns fieldError for unsupported language code", async () => {
    const fd = makeFormData("test@example.com", "password123", ["xx"]);
    const result = await registerAction({}, fd);
    expect(result.fieldErrors?.languages).toBeDefined();
  });
});

describe("registerAction – business logic", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns email error when email already exists", async () => {
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce({
      id: "existing-id",
      email: "existing@example.com",
      password: "hashed",
      name: null,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const fd = makeFormData("existing@example.com", "password123", ["ja"]);
    const result = await registerAction({}, fd);
    expect(result.fieldErrors?.email).toContain("đã được sử dụng");
  });

  it("creates user and returns success for valid input", async () => {
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(null);
    vi.mocked(prisma.$transaction).mockImplementationOnce(async (cb) => {
      return cb(prisma);
    });
    vi.mocked(prisma.user.create).mockResolvedValueOnce({
      id: "new-user-id",
      email: "new@example.com",
      password: "hashed",
      name: null,
      image: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    vi.spyOn(auth, "signIn").mockResolvedValueOnce(undefined as never);

    const fd = makeFormData("new@example.com", "password123", ["ja", "ko"]);
    const result = await registerAction({}, fd);
    expect(result.success).toBe(true);
  });

  it("hashes password before storing (does not store plaintext)", async () => {
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(null);

    let capturedPassword: string | undefined;
    vi.mocked(prisma.$transaction).mockImplementationOnce(async (cb) => {
      return cb(prisma);
    });
    vi.mocked(prisma.user.create).mockImplementationOnce(async ({ data }) => {
      capturedPassword = data.password as string;
      return {
        id: "new-id",
        email: data.email,
        password: capturedPassword!,
        name: null,
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    vi.spyOn(auth, "signIn").mockResolvedValueOnce(undefined as never);

    const plainPassword = "password123";
    const fd = makeFormData("new2@example.com", plainPassword, ["en"]);
    await registerAction({}, fd);

    // Password must not equal plaintext
    expect(capturedPassword).toBeDefined();
    expect(capturedPassword).not.toBe(plainPassword);
    // bcrypt hashes start with $2b$
    expect(capturedPassword).toMatch(/^\$2[ab]\$/);
  });

  it("normalizes email to lowercase", async () => {
    vi.mocked(prisma.user.findUnique).mockResolvedValueOnce(null);
    let capturedEmail: string | undefined;
    vi.mocked(prisma.$transaction).mockImplementationOnce(async (cb) => {
      return cb(prisma);
    });
    vi.mocked(prisma.user.create).mockImplementationOnce(async ({ data }) => {
      capturedEmail = data.email;
      return {
        id: "id",
        email: data.email,
        password: "hashed",
        name: null,
        image: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });
    vi.spyOn(auth, "signIn").mockResolvedValueOnce(undefined as never);

    const fd = makeFormData("Test@EXAMPLE.COM", "password123", ["fr"]);
    await registerAction({}, fd);
    expect(capturedEmail).toBe("test@example.com");
  });
});

describe("SUPPORTED_LANGUAGES", () => {
  it("contains at least 5 languages", () => {
    expect(SUPPORTED_LANGUAGES.length).toBeGreaterThanOrEqual(5);
  });

  it("all language codes are valid ISO 639-1 (2 lowercase letters)", () => {
    SUPPORTED_LANGUAGES.forEach((lang) => {
      expect(lang.code).toMatch(/^[a-z]{2}$/);
    });
  });

  it("includes Japanese", () => {
    const ja = SUPPORTED_LANGUAGES.find((l) => l.code === "ja");
    expect(ja).toBeDefined();
  });
});

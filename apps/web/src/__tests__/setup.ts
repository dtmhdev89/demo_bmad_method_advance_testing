import { vi } from "vitest";

// Mock next-auth signIn to avoid actual auth calls in unit tests
vi.mock("@/auth", () => ({
  signIn: vi.fn().mockResolvedValue(undefined),
  auth: vi.fn().mockResolvedValue(null),
  signOut: vi.fn(),
}));

// Mock the database package
vi.mock("database", () => ({
  prisma: {
    user: {
      findUnique: vi.fn(),
      create: vi.fn(),
    },
    $transaction: vi.fn(),
    userLanguage: {
      createMany: vi.fn(),
    },
  },
}));

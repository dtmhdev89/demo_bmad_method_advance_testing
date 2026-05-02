"use server";

import { prisma } from "database";
import bcrypt from "bcryptjs";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

/** Danh sách ngôn ngữ hỗ trợ (ISO 639-1) */
export const SUPPORTED_LANGUAGES = [
  { code: "ja", label: "Tiếng Nhật 🇯🇵" },
  { code: "ko", label: "Tiếng Hàn 🇰🇷" },
  { code: "zh", label: "Tiếng Trung 🇨🇳" },
  { code: "en", label: "Tiếng Anh 🇺🇸" },
  { code: "fr", label: "Tiếng Pháp 🇫🇷" },
  { code: "de", label: "Tiếng Đức 🇩🇪" },
  { code: "es", label: "Tiếng Tây Ban Nha 🇪🇸" },
  { code: "it", label: "Tiếng Ý 🇮🇹" },
  { code: "pt", label: "Tiếng Bồ Đào Nha 🇵🇹" },
  { code: "ru", label: "Tiếng Nga 🇷🇺" },
  { code: "ar", label: "Tiếng Ả Rập 🇸🇦" },
  { code: "vi", label: "Tiếng Việt 🇻🇳" },
];

export type RegisterState = {
  error?: string;
  fieldErrors?: {
    email?: string;
    password?: string;
    languages?: string;
  };
  success?: boolean;
};

/**
 * Validates register form input.
 * Returns fieldErrors if invalid, null if valid.
 */
function validateRegisterInput(
  email: string,
  password: string,
  languages: string[]
): RegisterState["fieldErrors"] | null {
  const errors: RegisterState["fieldErrors"] = {};

  // Email validation
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Email không hợp lệ.";
  }

  // Password validation (min 8 chars)
  if (!password || password.length < 8) {
    errors.password = "Mật khẩu phải có ít nhất 8 ký tự.";
  }

  // Language selection
  if (!languages || languages.length === 0) {
    errors.languages = "Vui lòng chọn ít nhất một ngôn ngữ mục tiêu.";
  }

  // Validate language codes are in supported list
  const supportedCodes = SUPPORTED_LANGUAGES.map((l) => l.code);
  const invalidCodes = languages.filter(
    (code) => !supportedCodes.includes(code)
  );
  if (invalidCodes.length > 0) {
    errors.languages = `Ngôn ngữ không hợp lệ: ${invalidCodes.join(", ")}`;
  }

  return Object.keys(errors).length > 0 ? errors : null;
}

/**
 * Server Action: Register a new user account.
 * 1. Validates inputs
 * 2. Checks for duplicate email
 * 3. Hashes password with bcrypt
 * 4. Creates User + UserLanguage records in a transaction
 * 5. Signs in the user automatically (sets JWT session cookie)
 */
export async function registerAction(
  _prevState: RegisterState,
  formData: FormData
): Promise<RegisterState> {
  const email = (formData.get("email") as string)?.trim().toLowerCase();
  const password = formData.get("password") as string;
  const languageCodes = formData.getAll("languages") as string[];

  // --- Validation ---
  const fieldErrors = validateRegisterInput(email, password, languageCodes);
  if (fieldErrors) {
    return { fieldErrors };
  }

  // --- Duplicate email check ---
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return {
      fieldErrors: {
        email: "Email này đã được sử dụng. Vui lòng chọn email khác.",
      },
    };
  }

  // --- Hash password (bcrypt, cost factor 12) ---
  const hashedPassword = await bcrypt.hash(password, 12);

  // --- Create user + languages in a single transaction ---
  await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email,
        password: hashedPassword,
        targetLanguages: {
          create: languageCodes.map((code) => ({ languageCode: code })),
        },
      },
    });
    return user;
  });

  // --- Auto sign-in after successful registration ---
  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      // Account was created successfully but auto-login failed – not fatal
      return { success: true };
    }
    throw error;
  }

  return { success: true };
}

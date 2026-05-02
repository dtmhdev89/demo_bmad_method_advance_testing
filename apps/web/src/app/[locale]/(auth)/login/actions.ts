"use server";

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export type LoginState = {
  error?: string;
  fieldErrors?: {
    email?: string;
    password?: string;
  };
  success?: boolean;
};

export async function loginAction(
  prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    return {
      error: "Vui lòng nhập đầy đủ email và mật khẩu",
    };
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    
    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Email hoặc mật khẩu không chính xác" };
        default:
          return { error: "Đã có lỗi xảy ra trong quá trình đăng nhập" };
      }
    }
    throw error; // Rethrow redirect errors
  }
}

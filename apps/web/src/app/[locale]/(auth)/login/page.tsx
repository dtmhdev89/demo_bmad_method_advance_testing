"use client";

import { useActionState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { loginAction, LoginState } from "./actions";

const initialState: LoginState = {};

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState
  );
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  // Redirect to dashboard on success
  useEffect(() => {
    if (state.success) {
      router.push(`/${locale}/dashboard`);
    }
  }, [state.success, router, locale]);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(120,0,255,0.12),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(0,180,255,0.08),transparent_60%)]" />

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 shadow-[0_0_20px_rgba(147,51,234,0.4)] transition-shadow group-hover:shadow-[0_0_30px_rgba(147,51,234,0.6)]" />
            <span className="text-xl font-bold tracking-tight text-white">
              Polyglot Cards
            </span>
          </Link>
        </div>

        {/* Card */}
        <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl">
          {/* Card glow */}
          <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />

          <div className="relative">
            <h1 className="text-2xl font-bold text-white mb-1">
              Đăng nhập
            </h1>
            <p className="text-sm text-zinc-400 mb-8">
              Tiếp tục hành trình chinh phục ngôn ngữ
            </p>

            {/* Global error */}
            {state.error && (
              <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {state.error}
              </div>
            )}

            <form action={formAction} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="ban@example.com"
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:ring-2 focus:ring-purple-500/50 ${
                    state.fieldErrors?.email
                      ? "border-red-500/50 focus:ring-red-500/30"
                      : "border-white/10 hover:border-white/20"
                  }`}
                />
                {state.fieldErrors?.email && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {state.fieldErrors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-zinc-300"
                  >
                    Mật khẩu
                  </label>
                  <Link
                    href={`/${locale}/forgot-password`}
                    className="text-xs text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Quên mật khẩu?
                  </Link>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-all focus:ring-2 focus:ring-purple-500/50 ${
                    state.fieldErrors?.password
                      ? "border-red-500/50 focus:ring-red-500/30"
                      : "border-white/10 hover:border-white/20"
                  }`}
                />
                {state.fieldErrors?.password && (
                  <p className="mt-1.5 text-xs text-red-400">
                    {state.fieldErrors.password}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                id="login-submit"
                type="submit"
                disabled={isPending}
                className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Đang đăng nhập...
                  </span>
                ) : (
                  "Đăng nhập ngay"
                )}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="text-xs text-zinc-600">hoặc</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <p className="text-center text-sm text-zinc-500">
              Chưa có tài khoản?{" "}
              <Link
                href={`/${locale}/register`}
                className="font-medium text-purple-400 transition-colors hover:text-purple-300"
              >
                Đăng ký miễn phí
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

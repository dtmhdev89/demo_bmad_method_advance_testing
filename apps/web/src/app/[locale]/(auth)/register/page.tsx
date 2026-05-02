"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { registerAction, RegisterState } from "./actions";
import { SUPPORTED_LANGUAGES } from "./constants";

const initialState: RegisterState = {};

export default function RegisterPage() {
  const [state, formAction, isPending] = useActionState(
    registerAction,
    initialState
  );
  const router = useRouter();
  const params = useParams();
  const locale = params?.locale as string || "vi";
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  // Redirect to dashboard on success
  useEffect(() => {
    if (state.success) {
      router.push(`/${locale}/dashboard`);
    }
  }, [state.success, router, locale]);

  const toggleLanguage = (code: string) => {
    setSelectedLanguages((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center px-4 py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(120,0,255,0.12),transparent_60%),radial-gradient(circle_at_80%_80%,rgba(0,180,255,0.08),transparent_60%)]" />

      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/" className="flex items-center gap-2 group">
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
              Tạo tài khoản
            </h1>
            <p className="text-sm text-zinc-400 mb-8">
              Bắt đầu hành trình học ngôn ngữ với AI
            </p>

            {/* Global error */}
            {state.error && (
              <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {state.error}
              </div>
            )}

            <form ref={formRef} action={formAction} className="space-y-5">
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
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-zinc-300 mb-2"
                >
                  Mật khẩu
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  placeholder="Tối thiểu 8 ký tự"
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

              {/* Language selection */}
              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                  Ngôn ngữ mục tiêu{" "}
                  <span className="text-zinc-500">(chọn ít nhất 1)</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {SUPPORTED_LANGUAGES.map((lang) => {
                    const isSelected = selectedLanguages.includes(lang.code);
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        id={`lang-${lang.code}`}
                        onClick={() => toggleLanguage(lang.code)}
                        className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-medium transition-all text-left ${
                          isSelected
                            ? "border-purple-500/60 bg-purple-500/15 text-purple-300 shadow-[0_0_12px_rgba(147,51,234,0.15)]"
                            : "border-white/10 bg-white/5 text-zinc-400 hover:border-white/20 hover:bg-white/8 hover:text-zinc-200"
                        }`}
                      >
                        <span
                          className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border text-[10px] transition-all ${
                            isSelected
                              ? "border-purple-500 bg-purple-500 text-white"
                              : "border-zinc-600"
                          }`}
                        >
                          {isSelected && "✓"}
                        </span>
                        {lang.label}
                      </button>
                    );
                  })}
                </div>

                {/* Hidden inputs to submit selected languages */}
                {selectedLanguages.map((code) => (
                  <input
                    key={code}
                    type="hidden"
                    name="languages"
                    value={code}
                  />
                ))}

                {state.fieldErrors?.languages && (
                  <p className="mt-2 text-xs text-red-400">
                    {state.fieldErrors.languages}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                id="register-submit"
                type="submit"
                disabled={isPending}
                className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 py-3 text-sm font-semibold text-white shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] hover:brightness-110 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Đang tạo tài khoản...
                  </span>
                ) : (
                  "Tạo tài khoản miễn phí"
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
              Đã có tài khoản?{" "}
              <Link
                href="/login"
                className="font-medium text-purple-400 transition-colors hover:text-purple-300"
              >
                Đăng nhập
              </Link>
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs text-zinc-600">
          Bằng cách tạo tài khoản, bạn đồng ý với{" "}
          <Link href="#" className="text-zinc-500 hover:text-zinc-300">
            Điều khoản dịch vụ
          </Link>{" "}
          và{" "}
          <Link href="#" className="text-zinc-500 hover:text-zinc-300">
            Chính sách bảo mật
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

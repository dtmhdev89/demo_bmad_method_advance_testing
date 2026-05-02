'use client';

import Link from "next/link";
import { useParams } from "next/navigation";

export default function LoginPage() {
  const params = useParams();
  const locale = params.locale as string;

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8 text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Đăng nhập
        </h1>
        <p className="text-zinc-400">Trang đăng nhập đang được phát triển (Story 1.2).</p>
        <div className="pt-4">
          <Link 
            href={`/${locale}/register`}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            Chưa có tài khoản? Đăng ký ngay
          </Link>
        </div>
      </div>
    </div>
  );
}

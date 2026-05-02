import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Xác thực | Polyglot Cards",
  description: "Đăng ký hoặc đăng nhập vào Polyglot Cards",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

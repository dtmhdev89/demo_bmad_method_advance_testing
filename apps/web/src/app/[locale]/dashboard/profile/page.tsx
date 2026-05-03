import { auth } from "@/auth";
import { prisma } from "database";
import { ProfileForm } from "@/components/ProfileForm";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      targetLanguages: true,
    },
  });

  if (!user) redirect("/login");

  const currentLanguages = user.targetLanguages.map(l => l.languageCode);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Hồ sơ cá nhân</h1>
          <p className="mt-2 text-lg text-gray-600">
            Quản lý thông tin tài khoản và tùy chỉnh lộ trình học tập của bạn.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <ProfileForm 
              user={{
                name: user.name || "",
                role: user.role,
                targetLanguages: currentLanguages
              }} 
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-3">Tại sao cần chọn ngôn ngữ?</h3>
              <p className="text-sm text-blue-800 leading-relaxed">
                Việc chọn đúng ngôn ngữ mục tiêu giúp hệ thống AI của Polyglot Cards tạo ra các ví dụ, 
                câu chuyện ghi nhớ và phát âm chính xác nhất cho bạn.
              </p>
            </div>
            
            <div className="bg-purple-50 border border-purple-100 p-6 rounded-2xl">
              <h3 className="text-sm font-bold text-purple-900 uppercase tracking-wider mb-3">Quyền lợi PRO</h3>
              <ul className="text-sm text-purple-800 space-y-2">
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Tạo Mnemonics không giới hạn
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Phát âm AI chất lượng cao
                </li>
                <li className="flex items-start">
                  <svg className="w-4 h-4 mr-2 mt-0.5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Xuất dữ liệu sang Anki/Quizlet
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

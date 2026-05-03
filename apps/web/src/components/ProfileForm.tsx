"use client";

import { useState } from "react";
import { Role } from "database";
import { updateUserProfile } from "@/actions/profile";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { SUPPORTED_LANGUAGES } from "@/lib/constants";

interface ProfileFormProps {
  user?: {
    name?: string | null;
    role?: Role;
    targetLanguages?: string[];
  };
}

export function ProfileForm({ user }: ProfileFormProps) {
  const { update: updateSession } = useSession();
  const [name, setName] = useState(user?.name || "");
  const [selectedLangs, setSelectedLangs] = useState<string[]>(user?.targetLanguages || []);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!user) {
    return <div className="p-6 text-gray-500 italic">Không tìm thấy thông tin người dùng.</div>;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const result = await updateUserProfile({
      name,
      targetLanguages: selectedLangs,
    });
    
    if (result.success) {
      // Refresh session to reflect changes in header/other components
      await updateSession({
        name,
        targetLanguages: selectedLangs,
      });
      
      alert("Cập nhật thành công!");
      router.refresh();
    } else {
      alert("Lỗi: " + result.error);
    }
    setLoading(false);
  };

  const toggleLanguage = (code: string) => {
    setSelectedLangs((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <div>
        <label className="block text-sm font-medium text-gray-700">Tên người dùng</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Nhập tên của bạn"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Loại tài khoản</label>
        <div className="mt-2 flex items-center space-x-3">
          <span id="user-role" className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
            user.role === 'PRO' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'
          }`}>
            {user.role || 'FREE'}
          </span>
          {user.role === 'FREE' && (
            <button 
              type="button"
              onClick={() => alert("Chức năng nâng cấp đang phát triển!")}
              className="text-xs text-blue-600 font-medium hover:text-blue-800 transition-colors"
            >
              Nâng cấp lên PRO
            </button>
          )}
        </div>
        <p className="mt-1 text-xs text-gray-500">
          {user.role === 'PRO' ? 'Bạn đang sử dụng các tính năng cao cấp.' : 'Tài khoản miễn phí có giới hạn một số tính năng AI.'}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">Ngôn ngữ mục tiêu</label>
        <div className="grid grid-cols-2 gap-3">
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              type="button"
              onClick={() => toggleLanguage(lang.code)}
              className={`text-sm py-2 px-3 rounded-lg border transition-all duration-200 text-left flex items-center justify-between ${
                selectedLangs.includes(lang.code)
                  ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              <span>{lang.label}</span>
              {selectedLangs.includes(lang.code) && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
          ))}
        </div>
        <p className="mt-2 text-xs text-gray-500 italic">
          Chọn các ngôn ngữ bạn muốn học để AI có thể gợi ý nội dung phù hợp.
        </p>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
      >
        {loading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Đang lưu...
          </span>
        ) : "Cập nhật hồ sơ"}
      </button>
    </form>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [meaning, setMeaning] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!meaning) return;

    setLoading(true);
    try {
      const res = await fetch('http://localhost:8080/concepts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ meaning_central: meaning }),
      });

      if (res.ok) {
        const data = await res.json();
        // Redirect to detail page (to be implemented in story 2.x)
        router.push(`/dashboard/concept/${data.id}`);
      } else {
        alert('Có lỗi xảy ra khi tạo Concept Node.');
      }
    } catch (err) {
      console.error(err);
      alert('Không thể kết nối đến server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
              Bảng điều khiển
            </h1>
            <p className="text-zinc-500 mt-2">Quản lý kho tàng kiến thức đa ngôn ngữ của bạn.</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
        </header>

        <main>
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-600 to-cyan-500 opacity-25 blur transition duration-1000 group-hover:opacity-50" />
            <div className="relative bg-zinc-900/50 border border-white/10 p-8 rounded-2xl backdrop-blur-xl">
              <h2 className="text-xl font-semibold mb-6">Tạo Concept mới</h2>
              <form onSubmit={handleCreate} className="space-y-4">
                <div>
                  <label htmlFor="meaning" className="block text-sm font-medium text-zinc-400 mb-2">
                    Ý nghĩa trung tâm (Ví dụ: Apple, Tình yêu, Chạy bộ)
                  </label>
                  <input
                    id="meaning"
                    type="text"
                    value={meaning}
                    onChange={(e) => setMeaning(e.target.value)}
                    placeholder="Nhập ý nghĩa cốt lõi..."
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
                    required
                    data-testid="concept-meaning-input"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full h-12 rounded-xl bg-white text-black font-bold transition-all hover:bg-zinc-200 active:scale-[0.98] disabled:opacity-50"
                  data-testid="create-concept-button"
                >
                  {loading ? 'Đang khởi tạo...' : 'Tạo Concept Node'}
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl">
              <h3 className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-2">Thống kê</h3>
              <div className="text-2xl font-bold">0 Concept Nodes</div>
            </div>
            <div className="p-6 bg-zinc-900/30 border border-white/5 rounded-2xl">
              <h3 className="text-zinc-400 text-sm font-medium uppercase tracking-wider mb-2">Tiến độ</h3>
              <div className="text-2xl font-bold">Bắt đầu ngay hôm nay!</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

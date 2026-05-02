import { use } from "react";

export default function ConceptDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div className="min-h-screen bg-[#050505] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Chi tiết Concept</h1>
        <div className="p-6 bg-zinc-900 border border-white/10 rounded-2xl">
          <p className="text-zinc-400">ID: {id}</p>
          <p className="mt-4">Đây là trang chi tiết cho Concept Node vừa tạo.</p>
          <p className="text-zinc-500 text-sm mt-2">(Tính năng thêm nội dung đa ngôn ngữ sẽ được triển khai ở Story 2.2)</p>
        </div>
      </div>
    </div>
  );
}

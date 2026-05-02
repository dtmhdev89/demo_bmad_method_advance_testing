import Image from 'next/image';
import Link from 'next/link';

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-purple-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-400" />
            <span className="text-xl font-bold tracking-tight">Polyglot Cards</span>
          </div>
          <div className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
            <a href="#" className="transition-colors hover:text-white">Phương pháp</a>
            <a href="#" className="transition-colors hover:text-white">Tính năng</a>
            <a href="#" className="transition-colors hover:text-white">Giá cả</a>
          </div>
          <Link
            href={`/${locale}/register`}
            className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105 active:scale-95"
          >
            Bắt đầu học
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 -z-10 h-[600px] w-full bg-[radial-gradient(circle_at_50%_0%,rgba(120,0,255,0.15),transparent_70%)]" />
        
        <div className="container mx-auto px-6 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-purple-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500"></span>
            </span>
            Đã tích hợp Gemini AI 1.5
          </div>
          
          <h1 className="mx-auto max-w-4xl text-5xl font-extrabold leading-[1.1] tracking-tight sm:text-7xl">
            Ghi nhớ ngôn ngữ qua <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Sức mạnh của Trí tưởng tượng
            </span>
          </h1>
          
          <p className="mx-auto mt-8 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            Sử dụng AI để tạo ra các câu chuyện ghi nhớ (Mnemonics) độc đáo, giúp bạn nhớ từ vựng vĩnh viễn chỉ sau một lần học.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={`/${locale}/register`}
              className="flex items-center justify-center h-14 w-full rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 text-lg font-bold transition-all hover:shadow-[0_0_40px_rgba(147,51,234,0.3)] hover:brightness-110 sm:w-auto"
            >
              Thử miễn phí ngay
            </Link>
            <button className="h-14 w-full rounded-2xl border border-white/10 bg-white/5 px-8 text-lg font-bold backdrop-blur-sm transition-colors hover:bg-white/10 sm:w-auto">
              Xem demo
            </button>
          </div>

          {/* Hero Image Container */}
          <div className="relative mt-20 group">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 blur-2xl transition duration-1000 group-hover:opacity-40" />
            <div className="relative rounded-[2rem] border border-white/10 bg-zinc-900/50 p-2 backdrop-blur-3xl">
              <Image
                src="/hero.png"
                alt="Polyglot Cards Hero"
                width={1200}
                height={800}
                className="rounded-[1.5rem] shadow-2xl"
                style={{ width: '100%', height: 'auto' }}
                priority
              />
            </div>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="border-y border-white/5 bg-zinc-900/30 py-16 backdrop-blur-sm">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {[
            { label: 'Ngôn ngữ', value: '30+' },
            { label: 'Tỷ lệ ghi nhớ', value: '98%' },
            { label: 'Người dùng', value: '10K+' },
            { label: 'AI Mnemonics', value: '1M+' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-zinc-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

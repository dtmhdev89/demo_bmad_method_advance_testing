# 🚀 Polyglot Cards - Monorepo (Next.js + Go)

Chào mừng bạn đến với dự án **Polyglot Cards**, một ứng dụng học ngôn ngữ đột phá sử dụng sức mạnh của AI (Gemini) và thuật toán SRS hiệu năng cao.

## 🏗️ Cấu trúc dự án
Dự án được quản lý dưới dạng Monorepo sử dụng **TurboRepo** và **pnpm Workspaces**:

- `/apps/web`: Frontend Next.js 14 (App Router), TypeScript, Tailwind CSS.
- `/apps/api`: Backend Go (Echo Framework), tập trung vào hiệu năng SRS và AI.
- `/packages/database`: Quản lý Database Schema sử dụng Prisma.
- `/packages/config`: Các cấu hình dùng chung (Prettier, ESLint).

---

## 🛠️ Yêu cầu hệ thống
Trước khi bắt đầu, hãy đảm bảo máy bạn đã cài đặt:
- **Node.js** (v18+) & **pnpm** (`npm install -g pnpm`)
- **Go** (v1.20+)
- **PostgreSQL** (hoặc một database tương thích Prisma)

---

## 🚀 Hướng dẫn chạy dự án

### 1. Cài đặt Dependencies
Tại thư mục gốc, chạy lệnh sau để cài đặt toàn bộ thư viện cho FE, BE và Database:
```bash
pnpm install
```

### 2. Khởi động môi trường phát triển (Dev Mode)
Để chạy đồng thời cả Frontend và Backend chỉ bằng 1 lệnh duy nhất:
```bash
pnpm dev
```
- **Frontend:** [http://localhost:3000](http://localhost:3000)
- **Backend API:** [http://localhost:8080](http://localhost:8080)
- **Kiểm tra API:** [http://localhost:8080/health](http://localhost:8080/health)

### 3. Cấu hình Database (Lần đầu)
Di chuyển vào thư mục database để thiết lập schema:
```bash
cd packages/database
# Cập nhật file .env với URL Database của bạn
npx prisma generate
# npx prisma db push (Để đẩy schema lên database của bạn)
```

---

## 💡 Các lệnh hữu ích khác

| Lệnh | Mô tả |
| :--- | :--- |
| `pnpm build` | Build toàn bộ dự án cho Production. |
| `pnpm lint` | Kiểm tra lỗi code style trên toàn dự án. |
| `pnpm -F web dev` | Chỉ chạy riêng Frontend. |
| `pnpm -F api dev` | Chỉ chạy riêng Backend. |

---

## 🎨 Lưu ý về thiết kế
Dự án sử dụng phong cách **Premium Dark Mode** với các thành phần:
- **Glassmorphism**: Hiệu ứng kính mờ cho các thẻ học.
- **AI-Powered**: Mnemonics được tạo tự động bởi Gemini 1.5.
- **SRS Optimized**: Thuật toán Spaced Repetition được xử lý bằng Go để đảm bảo không bị nghẽn khi dữ liệu lớn.

---
*Chúc bạn có những trải nghiệm học tập tuyệt vời với Polyglot Cards!*

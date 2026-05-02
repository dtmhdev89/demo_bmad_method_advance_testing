# Story 1.1: Đăng ký tài khoản với Email và chọn ngôn ngữ mục tiêu
**Assignee:** Agent-Frontend

## 📝 User Story
**As a** new user,
**I want to** create an account with my email and select my target languages,
**So that** I can start learning and tracking my progress.

## ✅ Acceptance Criteria
**Given** tôi đang ở trang đăng ký
**When** tôi nhập email hợp lệ, mật khẩu và chọn ít nhất một ngôn ngữ mục tiêu
**Then** một tài khoản người dùng mới được tạo trong cơ sở dữ liệu
**And** mật khẩu của tôi được mã hóa an toàn (bcrypt)
**And** tôi được tự động đăng nhập và chuyển hướng đến trang dashboard

## 🛠 Developer Context
### Technical Requirements
- **Frontend**: Next.js (App Router). Sử dụng Server Actions hoặc API Routes để xử lý đăng ký.
- **Database**: Sử dụng Prisma để tạo bản ghi `User` và `UserLanguage`.
- **Security**: Hash mật khẩu bằng `bcryptjs` trước khi lưu.
- **Auth**: Tích hợp với `NextAuth.js` để tự động đăng nhập sau khi đăng ký thành công.

### Architecture Compliance
- Sử dụng cấu trúc monorepo: Code frontend nằm trong `apps/web` (hoặc thư mục tương đương).
- Schema Prisma nằm trong `packages/database`.

### File Structure Requirements
- `apps/web/app/(auth)/register/page.tsx`: Giao diện đăng ký.
- `packages/database/prisma/schema.prisma`: Cập nhật model User nếu cần.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Khởi tạo nền tảng người dùng cho toàn bộ ứng dụng.

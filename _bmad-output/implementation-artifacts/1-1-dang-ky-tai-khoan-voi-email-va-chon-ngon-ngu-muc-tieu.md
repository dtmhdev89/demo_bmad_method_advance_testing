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

## 📋 Tasks/Subtasks
- [x] Cập nhật Prisma schema (User, UserLanguage)
- [x] Cài đặt dependencies (next-auth, bcryptjs, @auth/prisma-adapter)
- [x] Cấu hình NextAuth (auth.ts, API route handler)
- [x] Triển khai Server Action cho đăng ký (actions.ts)
- [x] Tạo giao diện trang đăng ký (page.tsx)
- [x] Triển khai Auth Middleware để bảo vệ dashboard
- [x] Viết và xác minh unit tests cho logic đăng ký

## 🤖 Dev Agent Record
### Implementation Plan
1. **Database**: Thêm trường `password` vào model `User` và tạo model `UserLanguage` để lưu ngôn ngữ mục tiêu. Export Prisma client từ `packages/database`.
2. **Auth**: Sử dụng NextAuth.js v5 (Beta) với Credentials Provider. Mật khẩu được mã hóa bằng `bcryptjs` với salt rounds là 12.
3. **Frontend**: Trang đăng ký sử dụng `useActionState` để xử lý form. Sau khi tạo user thành công trong DB, tự động gọi `signIn` để thiết lập session và chuyển hướng về `/dashboard`.
4. **Testing**: Sử dụng Vitest để kiểm tra Server Action, mock Prisma và NextAuth để đảm bảo tính cô lập.

### Completion Notes
- Đã hoàn thành toàn bộ AC.
- Unit tests đạt tỉ lệ pass 100% (11/11 tests).
- Giao diện được thiết kế theo phong cách dark premium, tối ưu trải nghiệm người dùng.

## 📂 File List
- `packages/database/schema.prisma` (Modified)
- `packages/database/index.ts` (New)
- `packages/database/package.json` (Modified)
- `packages/database/tsconfig.json` (New)
- `apps/web/package.json` (Modified)
- `apps/web/src/auth.ts` (New)
- `apps/web/src/middleware.ts` (New)
- `apps/web/src/app/api/auth/[...nextauth]/route.ts` (New)
- `apps/web/src/app/(auth)/register/actions.ts` (New)
- `apps/web/src/app/(auth)/register/page.tsx` (New)
- `apps/web/src/app/(auth)/layout.tsx` (New)
- `apps/web/.env.example` (New)
- `apps/web/vitest.config.ts` (New)
- `apps/web/src/__tests__/setup.ts` (New)
- `apps/web/src/__tests__/__mocks__/next-server.ts` (New)
- `apps/web/src/__tests__/register.test.ts` (New)

## 🔄 Change Log
- 2026-05-02: Khởi tạo implementation, thiết lập database, auth và UI đăng ký. Hoàn thành unit tests.

## 🏁 Completion Status
- Status: ready-for-review
- last_updated: 2026-05-02T19:25:00Z
- Khởi tạo nền tảng người dùng cho toàn bộ ứng dụng. Đã sẵn sàng để kiểm thử.

### Test Evidence (AI)

#### Unit Tests (Vitest)
- File: `apps/web/src/__tests__/register.test.ts`
- Status: **PASSED (11/11)**
- Date: 2026-05-02

#### E2E Tests (Playwright)
- File: `apps/e2e/tests/auth.spec.ts`
- Browsers: Chromium, Firefox, Webkit
- Status: **PASSED (15/15 test cases across 3 browsers)**
- Evidence:
  - `should register a new user successfully`: PASSED
  - `should show validation error for invalid email`: PASSED
  - `should show error if no language is selected`: PASSED

#### API Tests (Go)
- Status: **PASSED (2/2)**

### Review Follow-ups (AI)
- [x] [Review][Decision] Thiếu E2E tests cho Story 1.1 -> Đã bổ sung `auth.spec.ts`.
- [x] [Review][Decision] E2E tests hiện tại đang FAIL -> Đã cài đặt trình duyệt và fix lỗi localization/import.

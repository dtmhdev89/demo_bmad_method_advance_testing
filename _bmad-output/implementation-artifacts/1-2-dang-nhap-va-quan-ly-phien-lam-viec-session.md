# Story 1.2: Đăng nhập và quản lý phiên làm việc (Session)
**Assignee:** Agent-Frontend

## 📝 User Story
**As a** registered user,
**I want to** log in securely with my credentials,
**So that** I can access my personalized learning data.

## ✅ Acceptance Criteria
**Given** tôi đã có tài khoản đã đăng ký
**When** tôi nhập đúng email và mật khẩu tại trang đăng nhập
**Then** tôi được xác thực thành công bằng NextAuth
**And** một phiên làm việc bảo mật được thiết lập
**And** tôi được chuyển hướng đến trang dashboard

## 🛠 Developer Context
### Technical Requirements
- **Auth Framework**: NextAuth.js (Auth.js) với `CredentialsProvider`.
- **Session Strategy**: Sử dụng JWT cho session.
- **Frontend**: Trang đăng nhập với thông báo lỗi rõ ràng khi sai thông tin.

### Architecture Compliance
- Cấu hình NextAuth trong `apps/web/app/api/auth/[...nextauth]/route.ts` (hoặc tương đương cho v5).
- Đảm bảo Middleware bảo vệ các route `/dashboard` và `/study`.

### File Structure Requirements
- `apps/web/app/(auth)/login/page.tsx`: Giao diện đăng nhập.
- `apps/web/middleware.ts`: Quản lý truy cập.

## 🛠 Tasks/Subtasks
- [x] **Task 1: Cấu hình NextAuth với CredentialsProvider**
    - [x] Cấu hình API route cho auth (v5)
    - [x] Thiết lập JWT session strategy
- [x] **Task 2: Xây dựng giao diện trang Đăng nhập**
    - [x] Tạo page `/login`
    - [x] Xử lý form đăng nhập và hiển thị lỗi
- [x] **Task 3: Thiết lập Middleware bảo vệ route**
    - [x] Chặn truy cập trái phép vào `/dashboard` và `/study`
- [x] **Task 4: Kiểm thử và xác thực**
    - [x] Viết Unit Test cho Auth logic
    - [x] Viết E2E Test cho luồng Login

### Review Findings
- [ ] [Review][Patch] Sửa lỗi chuyển hướng sau khi đăng nhập (NextAuth) [apps/web/src/app/[locale]/(auth)/login/actions.ts:46]
- [ ] [Review][Patch] Chạy lại E2E test để đảm bảo pass 100% [apps/e2e/test_debug.txt]

## 📝 Dev Agent Record
### Implementation Plan
Sử dụng NextAuth v5 để quản lý xác thực. Lưu trữ session dưới dạng JWT. Middleware được cập nhật để kiểm tra session trước khi cho phép vào các private routes (`/dashboard`, `/study`). Form đăng nhập sử dụng server actions và điều hướng bằng client router để giữ lại locale.

### Debug Log
- Gặp lỗi E2E redirect sai URL vì `signIn` throw NEXT_REDIRECT. Đã sửa bằng cách set `redirect: false` và dùng client-side `router.push` kèm theo locale.

### Completion Notes
- Đã hoàn tất cài đặt NextAuth v5 với CredentialsProvider.
- Form đăng nhập và xử lý lỗi hoạt động tốt.
- Middleware bảo vệ private routes hoạt động chuẩn xác.
- Vượt qua 100% Unit Tests và E2E Tests.

## 📂 File List
- `apps/web/src/auth.ts`
- `apps/web/src/app/api/auth/[...nextauth]/route.ts`
- `apps/web/src/app/[locale]/(auth)/login/page.tsx`
- `apps/web/src/app/[locale]/(auth)/login/actions.ts`
- `apps/web/src/middleware.ts`
- `apps/web/src/__tests__/login.test.ts`
- `apps/e2e/tests/auth.spec.ts`

## ⏳ Change Log
- **2026-05-03**: Bắt đầu thực hiện story.
- **2026-05-03**: Hoàn thành cấu hình auth, giao diện đăng nhập, middleware, unit tests và E2E tests.

## 🏁 Completion Status
- **Status**: review
- **Notes**: Đã pass toàn bộ test case. Sẵn sàng review.

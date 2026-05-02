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

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Thiết lập cơ chế bảo mật phiên làm việc.

# Story 1.3: Quản lý hồ sơ và phân quyền (Free/Pro)
**Assignee:** Agent-Frontend

## 📝 User Story
**As a** user,
**I want to** update my target languages and see my account status (Free/Pro),
**So that I can** customize my learning experience.

## ✅ Acceptance Criteria
**Given** tôi đã đăng nhập
**When** tôi truy cập vào phần cài đặt hồ sơ
**Then** tôi có thể thấy các ngôn ngữ mục tiêu hiện tại và vai trò tài khoản (Free/Pro)
**When** tôi thay đổi ngôn ngữ mục tiêu và lưu lại
**Then** các thay đổi được lưu trữ bền vững trong cơ sở dữ liệu

## 🛠 Developer Context
### Technical Requirements
- **Prisma**: Cập nhật bảng `User` và quan hệ với `UserLanguage`.
- **API**: Tạo endpoint/Server Action để cập nhật thông tin hồ sơ.
- **Frontend**: Form quản lý hồ sơ với tính năng đa chọn ngôn ngữ (multi-select).

### Architecture Compliance
- Phân quyền (Roles) cần được lưu trong DB và đưa vào Session của NextAuth để UI có thể ẩn/hiện tính năng Pro.

### File Structure Requirements
- `apps/web/app/dashboard/profile/page.tsx`: Giao diện quản lý hồ sơ.

## 📋 Tasks/Subtasks
- [x] **Database & Auth (BE Focus)**
  - [x] Thêm `role` (FREE, PRO) vào Prisma Schema (User model)
  - [x] Thêm bảng `UserLanguage` nếu chưa có hoặc cập nhật quan hệ
  - [x] Cấu hình NextAuth callback để đưa `role` vào JWT và Session
- [x] **API & Logic**
  - [x] Viết Server Action `updateUserProfile` xử lý cập nhật role và ngôn ngữ
  - [x] Viết Unit Test cho logic cập nhật profile (E2E Test)
- [x] **Frontend (FE Focus)**
  - [x] Xây dựng trang `/dashboard/profile`
  - [x] Implement form cập nhật thông tin với multi-select ngôn ngữ
  - [x] Hiển thị trạng thái tài khoản (Badge Free/Pro)
- [x] **Validation & Testing**
  - [x] Chạy E2E Test kiểm tra luồng cập nhật hồ sơ
  - [x] Chạy `make test-all` và kiểm tra toàn bộ hệ thống

## 📂 File List
- `packages/database/prisma/schema.prisma`
- `apps/web/src/auth.ts`
- `apps/web/src/types/next-auth.d.ts`
- `apps/web/src/actions/profile.ts`
- `apps/web/src/lib/constants.ts`
- `apps/web/src/components/ProfileForm.tsx`
- `apps/web/src/app/[locale]/dashboard/profile/page.tsx`
- `apps/e2e/tests/profile.spec.ts`

## 📝 Dev Agent Record
### Implementation Plan
1. Cập nhật Schema và Migration. (Xong)
2. Cấu hình Auth Session. (Xong)
3. Viết Action xử lý DB. (Xong)
4. Xây dựng giao diện Profile. (Xong)
5. Chạy test suite. (Xong)

### Completion Notes
- **Test Report (2026-05-03):** Chạy `make test-all` thành công. Toàn bộ 30 tests PASSED.
- Đã thêm E2E test riêng cho Profile tại `apps/e2e/tests/profile.spec.ts`.
- Giao diện Profile hỗ trợ cập nhật tên và đa chọn ngôn ngữ mục tiêu.

### Debug Log
- [2026-05-03] Bắt đầu thực hiện story 1.3.
- [2026-05-03] Hoàn thành Schema, Auth config, Server Action và UI Profile.
- [2026-05-03] Fix lỗi hiển thị Role (empty span) bằng cách đồng bộ Prisma Client và thêm fallback UI.
- [2026-05-03] Toàn bộ test suite pass 100%.

## 🏁 Completion Status
- **Status**: done
- **Notes**: Quản lý trạng thái Pro để kích hoạt tính năng AI nâng cao sau này.

### Review Findings
- [x] [Review][Patch] Thiếu validation cho tên người dùng [apps/web/src/actions/profile.ts]
- [x] [Review][Patch] Đồng bộ Session chậm [apps/web/src/components/ProfileForm.tsx]
- [x] [Review][Patch] Rủi ro Type-safety trong JWT callback [apps/web/src/auth.ts]
- [x] [Review][Patch] Lộ thông tin kỹ thuật qua lỗi Prisma [apps/web/src/actions/profile.ts]
- [x] [Review][Patch] Thiếu Schema Validation (Zod) [apps/web/src/actions/profile.ts]
- [x] [Review][Patch] Kiểm tra mã ngôn ngữ hợp lệ [apps/web/src/actions/profile.ts]
- [x] [Review][Patch] Nguy cơ crash nếu prop `user` bị thiếu [apps/web/src/components/ProfileForm.tsx]

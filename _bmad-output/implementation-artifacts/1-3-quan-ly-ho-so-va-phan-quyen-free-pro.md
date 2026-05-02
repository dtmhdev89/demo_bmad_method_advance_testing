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

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Quản lý trạng thái Pro để kích hoạt tính năng AI nâng cao sau này.

# Story 2.1: Tạo Concept Node mới với ý nghĩa trung tâm
**Assignee:** Agent-Backend

## 📝 User Story
**As a** user,
**I want to** create a central "concept node",
**So that I can** link different languages to it.

## ✅ Acceptance Criteria
- [x] **Given** tôi đã đăng nhập và đang ở trang Dashboard
- [x] **When** tôi nhấn nút "Tạo Concept mới" và nhập từ khóa ý nghĩa trung tâm
- [x] **Then** một Concept Node mới được tạo trong cơ sở dữ liệu
- [x] **And** tôi được chuyển hướng đến trang chi tiết của Node đó

## 🛠 Developer Context
### Technical Requirements
- **Backend (Go)**: Tạo endpoint POST để khởi tạo một Concept Node mới.
- **Database**: Tạo model `ConceptNode` trong Prisma. Lưu ý trường `meaning_central` là bắt buộc.
- **Frontend**: Dashboard có nút hành động nổi bật để tạo nhanh Concept.

### Architecture Compliance
- Sử dụng Go Backend cho các API nghiệp vụ cốt lõi.
- Next.js gọi API Go thông qua Server Actions hoặc proxy.

### File Structure Requirements
- `packages/database/schema.prisma`: Thêm model `ConceptNode`.
- `apps/api/main.go`: Implement logic tạo Node.

## 📄 File List
- `packages/database/schema.prisma` (modified)
- `packages/database/prisma.config.ts` (new)
- `packages/database/.env` (new)
- `apps/api/main.go` (modified)
- `apps/api/main_test.go` (new)
- `apps/api/db/*` (generated)
- `apps/web/src/app/dashboard/page.tsx` (new)
- `apps/web/src/app/dashboard/concept/[id]/page.tsx` (new)

## 🕒 Change Log
- 2026-05-02: Khởi tạo model ConceptNode trong Prisma 7.
- 2026-05-02: Cấu hình Go generator cho Prisma.
- 2026-05-02: Triển khai endpoint POST /concepts trong Go API.
- 2026-05-02: Tạo giao diện Dashboard Next.js với form tạo Concept.

## 🤖 Dev Agent Record
### Implementation Plan
1. Cập nhật schema Prisma để thêm ConceptNode và liên kết với Card.
2. Cấu hình Prisma 7 (prisma.config.ts) để giải quyết thay đổi breaking change về datasource.
3. Tạo Go Client bằng Prisma generator.
4. Triển khai API Go sử dụng Echo và Prisma Client Go.
5. Xây dựng UI Dashboard Next.js 16 với thiết kế cao cấp (premium aesthetics).

### Debug Log
- Gặp lỗi Prisma 7 do datasource `url` không còn được hỗ trợ trong `schema.prisma`. Đã giải quyết bằng cách tạo `prisma.config.ts`.
- Gặp lỗi `go.mod` khi generate client trong thư mục database. Đã giải quyết bằng cách init module tạm thời.

### Completion Notes
- Hệ thống đã sẵn sàng để tạo Concept Node trung tâm.
- Đã kiểm tra build và chạy test cho backend Go thành công.
- UI Frontend sử dụng Next.js 16 (App Router) với hiệu ứng kính mờ (backdrop-blur) và gradient cao cấp.

## 🏁 Completion Status
- **Status**: review
- **Notes**: Đây là đơn vị dữ liệu nhỏ nhất và quan trọng nhất của hệ thống.

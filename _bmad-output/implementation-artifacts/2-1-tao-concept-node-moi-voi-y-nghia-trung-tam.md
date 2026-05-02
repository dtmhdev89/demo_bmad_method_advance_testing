# Story 2.1: Tạo Concept Node mới với ý nghĩa trung tâm
**Assignee:** Agent-Backend

## 📝 User Story
**As a** user,
**I want to** create a central "concept node",
**So that I can** link different languages to it.

## ✅ Acceptance Criteria
**Given** tôi đã đăng nhập và đang ở trang Dashboard
**When** tôi nhấn nút "Tạo Concept mới" và nhập từ khóa ý nghĩa trung tâm
**Then** một Concept Node mới được tạo trong cơ sở dữ liệu
**And** tôi được chuyển hướng đến trang chi tiết của Node đó

## 🛠 Developer Context
### Technical Requirements
- **Backend (Go)**: Tạo endpoint POST để khởi tạo một Concept Node mới.
- **Database**: Tạo model `ConceptNode` trong Prisma. Lưu ý trường `meaning_central` là bắt buộc.
- **Frontend**: Dashboard có nút hành động nổi bật để tạo nhanh Concept.

### Architecture Compliance
- Sử dụng Go Backend cho các API nghiệp vụ cốt lõi.
- Next.js gọi API Go thông qua Server Actions hoặc proxy.

### File Structure Requirements
- `packages/database/prisma/schema.prisma`: Thêm model `ConceptNode`.
- `apps/server/main.go` (hoặc thư mục API Go): Implement logic tạo Node.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Đây là đơn vị dữ liệu nhỏ nhất và quan trọng nhất của hệ thống.

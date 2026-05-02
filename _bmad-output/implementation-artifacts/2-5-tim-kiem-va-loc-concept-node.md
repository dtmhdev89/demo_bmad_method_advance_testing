# Story 2.5: Tìm kiếm và lọc Concept Node
**Assignee:** Agent-Backend

## 📝 User Story
**As a** user,
**I want to** search for Concept Nodes by keyword or filter by tag/language,
**So that I can** quickly find the information I need.

## ✅ Acceptance Criteria
**Given** tôi đang ở trang thư viện Concept Nodes
**When** tôi nhập từ khóa vào ô tìm kiếm hoặc chọn bộ lọc
**Then** hệ thống hiển thị danh sách các Node khớp với yêu cầu tìm kiếm

## 🛠 Developer Context
### Technical Requirements
- **Search Engine**: Sử dụng Full-text search của Postgres hoặc đơn giản là Prisma filtering cho MVP.
- **Backend**: API GET `/concepts` với các query parameters (`search`, `tag`, `lang`).
- **Frontend**: Trang Library với bộ lọc nâng cao ở sidebar.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Đảm bảo hiệu suất tìm kiếm khi dữ liệu lớn.

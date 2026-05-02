# Story 5.2: Khám phá và sao chép bộ thẻ cộng đồng
**Assignee:** Agent-Frontend

## 📝 User Story
**As a** user,
**I want to** search for and clone decks from the community to my personal repository,
**So that I can** start learning immediately without creating cards from scratch.

## ✅ Acceptance Criteria
**Given** tôi đang ở trang "Khám phá" (Explore)
**When** tôi tìm thấy một bộ thẻ ưng ý và nhấn "Lưu vào thư viện"
**Then** hệ thống tạo một bản sao của bộ thẻ đó trong tài khoản của tôi
**And** tôi có thể bắt đầu ôn tập bộ thẻ đó với lịch trình SRS cá nhân

## 🛠 Developer Context
### Technical Requirements
- **Backend (Go)**: Endpoint thực hiện việc "Clone" (sao chép bản ghi sang userId mới).
- **Frontend**: Giao diện Explore với các tính năng: Lọc theo ngôn ngữ, chủ đề phổ biến.

### Architecture Compliance
- Khi clone, cần tạo các bản ghi `ReviewLog` trống để bắt đầu quá trình SRS từ đầu cho người dùng mới.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Tạo tính cộng đồng và chia sẻ dữ liệu giữa những người học.

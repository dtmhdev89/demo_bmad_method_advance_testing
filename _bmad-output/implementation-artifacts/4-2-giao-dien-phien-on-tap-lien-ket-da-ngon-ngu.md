# Story 4.2: Giao diện phiên ôn tập liên kết đa ngôn ngữ
**Assignee:** Agent-Backend

## 📝 User Story
**As a** user,
**I want to** perform review sessions where languages are displayed linked together,
**So that I reinforce** my multi-dimensional concept network.

## ✅ Acceptance Criteria
**Given** tôi bắt đầu một phiên ôn tập
**When** hệ thống hiển thị mặt trước của thẻ (khái niệm trung tâm)
**Then** tôi có thể lật thẻ để xem định nghĩa, ví dụ và Mnemonics của tất cả ngôn ngữ mục tiêu cùng lúc
**And** hệ thống sử dụng cơ chế **Layered Reveal** để hiển thị thông tin dần dần, tránh gây quá tải nhận thức
**And** giao diện hỗ trợ hiển thị tốt các bảng chữ cái khác nhau (Kanji, Cyrillic,...)

## 🛠 Developer Context
### Technical Requirements
- **Frontend**: Giao diện thẻ Flashcard 3D hoặc hiệu ứng chuyển trang mượt mà.
- **UX**: Triển khai "Layered Reveal" - nhấp vào từng ngôn ngữ để mở nội dung thay vì hiện tất cả cùng lúc.
- **Data**: Fetch danh sách thẻ cần học từ API Go `/study/next`.

### Architecture Compliance
- Hỗ trợ tốt cho cả Desktop và Mobile.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Giao diện này cần mang lại cảm giác cao cấp và hiện đại.

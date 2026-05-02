# Story 4.3: Đánh giá mức độ ghi nhớ sau khi ôn tập
**Assignee:** Agent-Backend

## 📝 User Story
**As a** user,
**I want to** self-assess my memory level after seeing the answer,
**So that the system** adjusts the review schedule accordingly.

## ✅ Acceptance Criteria
**Given** tôi vừa xem đáp án của một thẻ trong phiên ôn tập
**When** tôi chọn một trong các mức độ: "Quên", "Khó", "Tốt", "Dễ"
**Then** hệ thống cập nhật lịch sử ôn tập (Review History) và tính toán lại ngày ôn tập tiếp theo ngay lập tức

## 🛠 Developer Context
### Technical Requirements
- **Backend (Go)**: Endpoint POST `/study/log` nhận kết quả đánh giá (0-3 hoặc 1-4) và cập nhật DB.
- **Frontend**: 4 nút bấm tương ứng với các mức độ, được gán phím tắt (1, 2, 3, 4) để thao tác nhanh.

### Architecture Compliance
- Đảm bảo dữ liệu được lưu ngay lập tức (Auto-save) sau mỗi lần đánh giá.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Ghi lại phản hồi người dùng là đầu vào cho thuật toán SRS.

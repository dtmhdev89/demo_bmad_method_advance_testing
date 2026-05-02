# Story 4.1: Logic tính toán lịch ôn tập dựa trên SRS
**Assignee:** Agent-Backend

## 📝 User Story
**As a** user,
**I want** the system to automatically calculate when I need to review a Concept Node,
**So that I optimize** my long-term memory retention.

## ✅ Acceptance Criteria
**Given** một Concept Node đã được học
**When** hệ thống chạy logic SRS (ví dụ: thuật toán Anki-SM2 hoặc Leitner)
**Then** ngày ôn tập tiếp theo (Next Review Date) được xác định dựa trên lịch sử ghi nhớ của tôi
**And** Node được đưa vào danh sách "Cần ôn tập" khi đến hạn

## 🛠 Developer Context
### Technical Requirements
- **Backend (Go)**: Triển khai thuật toán SM2 (tính toán `Interval`, `E-Factor`, `Repetitions`).
- **Database**: Bảng `ReviewLog` lưu lịch sử mỗi lần học. Bảng `ConceptNode` cập nhật `nextReviewDate`.
- **Scheduled Task**: Một worker chạy định kỳ để cập nhật danh sách thẻ cần ôn tập cho từng user.

### Architecture Compliance
- Thuật toán SRS được đặt hoàn toàn tại Go Backend để đảm bảo tính nhất quán và hiệu năng.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Đây là trung tâm điều khiển của ứng dụng học tập.

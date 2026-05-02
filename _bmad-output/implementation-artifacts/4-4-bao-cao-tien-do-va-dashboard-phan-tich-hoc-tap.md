# Story 4.4: Báo cáo tiến độ và Dashboard phân tích học tập
**Assignee:** Agent-Backend

## 📝 User Story
**As a** user,
**I want to** see my learning progress charts and vocabulary statistics,
**So that I stay** motivated to keep learning daily.

## ✅ Acceptance Criteria
**Given** tôi đang ở trang Dashboard
**When** tôi xem phần Analytics
**Then** hệ thống hiển thị biểu đồ số lượng thẻ đã học theo thời gian
**And** hiển thị thống kê về mức độ ghi nhớ và các chủ đề đang học mạnh nhất/yếu nhất

## 🛠 Developer Context
### Technical Requirements
- **Visualization**: Sử dụng thư viện như `Recharts` hoặc `Chart.js` cho frontend.
- **Backend**: API tổng hợp dữ liệu (Aggregation) từ `ReviewLog`.

### Architecture Compliance
- Sử dụng cache cho dữ liệu analytics để giảm tải cho DB khi người dùng truy cập dashboard thường xuyên.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Giúp người dùng thấy được giá trị của việc học hằng ngày.

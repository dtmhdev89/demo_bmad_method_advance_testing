# Story 3.2: Tự động gợi ý ví dụ cho các ngôn ngữ mục tiêu
**Assignee:** Agent-Frontend

## 📝 User Story
**As a** user,
**I want** AI to suggest real-world example sentences for the keyword in the target language,
**So that I understand** how to use the word in context.

## ✅ Acceptance Criteria
**Given** tôi vừa thêm một từ mới vào ngôn ngữ mục tiêu
**When** tôi chọn tính năng "Gợi ý ví dụ"
**Then** AI trả về ít nhất 2 câu ví dụ phổ biến kèm bản dịch sang ngôn ngữ gốc
**And** tôi có thể chọn câu ví dụ ưng ý để thêm vào Node

## 🛠 Developer Context
### Technical Requirements
- **AI Engine**: Prompt yêu cầu AI trả về định dạng JSON gồm `sentence` và `translation`.
- **Frontend**: Hiển thị danh sách gợi ý dưới dạng các thẻ (cards) để người dùng chọn nhanh.

### Architecture Compliance
- Tích hợp vào quy trình chỉnh sửa ngôn ngữ trong `Epic 2`.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Giúp người dùng học từ qua ngữ cảnh thay vì học từ đơn lẻ.

# Story 3.1: Tạo câu chuyện ghi nhớ (Mnemonics) bằng AI
**Assignee:** Agent-Frontend

## 📝 User Story
**As a** user,
**I want to** request AI to generate a mnemonic story linking languages in a Node,
**So that I can** remember them more easily.

## ✅ Acceptance Criteria
**Given** tôi đang xem một Concept Node có ít nhất 2 ngôn ngữ
**When** tôi nhấn nút "Tạo Mnemonic bằng AI"
**Then** hệ thống gửi yêu cầu đến AI Engine (Gemini/OpenAI)
**And** một câu chuyện ghi nhớ sáng tạo, liên kết âm thanh/ý nghĩa các ngôn ngữ được hiển thị trong vòng 5 giây
**And** hệ thống tự động lọc các nội dung không phù hợp hoặc nhạy cảm
**And** người dùng có thể báo cáo (Flag) nếu nội dung AI không chính xác hoặc không phù hợp
**And** tôi có thể lưu hoặc yêu cầu tạo lại câu chuyện khác

## 🛠 Developer Context
### Technical Requirements
- **AI Integration**: Sử dụng Google Gemini SDK. Prompt cần cung cấp đủ từ khóa của tất cả ngôn ngữ trong Node.
- **Async Handling**: AI có thể mất vài giây, cần hiển thị trạng thái loading "Đang sáng tạo...".
- **Database**: Lưu kết quả vào trường `mnemonic_text` của `ConceptNode`.

### Architecture Compliance
- Logic AI nên được đóng gói thành một Service riêng để dễ dàng chuyển đổi nhà cung cấp AI sau này.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Prompt Engineering là yếu tố quyết định chất lượng câu chuyện.

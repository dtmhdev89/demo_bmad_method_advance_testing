# Story 2.2: Thêm và quản lý định nghĩa/ví dụ đa ngôn ngữ
**Assignee:** Agent-Backend

## 📝 User Story
**As a** user,
**I want to** add definitions and examples for each target language within a Concept Node,
**So that I understand** the meaning in each language.

## ✅ Acceptance Criteria
**Given** tôi đang xem một Concept Node
**When** tôi chọn một ngôn ngữ mục tiêu và nhập định nghĩa/ví dụ tương ứng
**Then** thông tin được lưu trữ và hiển thị ngay lập tức trong Node
**And** tôi có thể chỉnh sửa hoặc xóa các thông tin này bất cứ lúc nào

## 🛠 Developer Context
### Technical Requirements
- **Prisma**: Model `Definition` và `Example` có quan hệ 1-N với `ConceptNode`.
- **Backend (Go)**: API quản lý nội dung đa ngôn ngữ.
- **Frontend**: Giao diện tab hoặc list cho phép chuyển đổi giữa các ngôn ngữ mục tiêu (Target Languages).

### Architecture Compliance
- Đảm bảo tính nhất quán dữ liệu giữa Concept gốc và các định nghĩa thành viên.

### File Structure Requirements
- `apps/web/components/concept/LanguageDetail.tsx`: Thành phần hiển thị chi tiết ngôn ngữ.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Hỗ trợ tối đa tính đa ngôn ngữ trong một thực thể duy nhất.

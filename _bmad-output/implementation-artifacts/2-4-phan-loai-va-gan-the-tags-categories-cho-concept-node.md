# Story 2.4: Phân loại và gắn thẻ (Tags/Categories) cho Concept Node
**Assignee:** Agent-Backend

## 📝 User Story
**As a** user,
**I want to** attach tags or put a Concept Node into a Category,
**So that I can** manage my vocabulary in groups.

## ✅ Acceptance Criteria
**Given** tôi đang chỉnh sửa một Concept Node
**When** tôi nhập danh sách các thẻ (tags) hoặc chọn Chủ đề (Category) hiện có
**Then** Node được gán nhãn tương ứng và có thể lọc theo các nhãn này sau này

## 🛠 Developer Context
### Technical Requirements
- **Database**: Model `Tag` và `Category`. Quan hệ N-N với `ConceptNode`.
- **Frontend**: Thành phần Input thẻ (Tag Input) hỗ trợ gợi ý (autocomplete).

### Architecture Compliance
- Tối ưu hóa truy vấn tags để dashboard load nhanh.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Giúp người dùng tổ chức kho kiến thức một cách khoa học.

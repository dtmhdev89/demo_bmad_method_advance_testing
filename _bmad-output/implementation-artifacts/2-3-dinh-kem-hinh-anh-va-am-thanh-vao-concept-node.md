# Story 2.3: Đính kèm hình ảnh và âm thanh vào Concept Node
**Assignee:** Agent-Backend

## 📝 User Story
**As a** user,
**I want to** add illustrative images and pronunciation audio files for each language,
**So that I can** increase memory efficiency.

## ✅ Acceptance Criteria
**Given** tôi đang ở chế độ chỉnh sửa ngôn ngữ trong một Concept Node
**When** tôi tải lên một tệp hình ảnh hoặc âm thanh
**Then** tệp được lưu trữ và liên kết với ngôn ngữ đó
**And** tôi có thể xem hình ảnh hoặc nghe âm thanh khi xem thẻ

## 🛠 Developer Context
### Technical Requirements
- **Storage**: Cần cấu hình một dịch vụ lưu trữ (S3, Cloudinary hoặc local storage cho MVP).
- **Database**: Lưu URL của media vào bảng `Media` liên kết với `Definition`.
- **Frontend**: Component tải lên tệp có thanh tiến trình và xem trước (preview).

### Architecture Compliance
- Xử lý tải lên tệp bất đồng bộ để không làm treo UI.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Multimedia là yếu tố then chốt giúp ghi nhớ từ vựng.

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

## 📋 Tasks/Subtasks
- [x] **Task 1: Cập nhật Schema Database (Prisma)**
    - [x] Thêm model `Definition` (text, languageCode, conceptNodeId)
    - [x] Thêm model `Example` (text, languageCode, definitionId?)
    - [x] Chạy migration và generate client
- [x] **Task 2: Phát triển Backend API (Go)**
    - [x] Triển khai CRUD API cho `Definition`
    - [x] Triển khai CRUD API cho `Example`
    - [x] Đảm bảo validation ngôn ngữ mục tiêu
- [x] **Task 3: Phát triển Giao diện Frontend**
    - [x] Tạo component `LanguageDetail.tsx`
    - [x] Tích hợp vào trang chi tiết Concept Node với hệ thống Tab ngôn ngữ
    - [x] Xử lý Form thêm/sửa định nghĩa và ví dụ
- [x] **Task 4: Kiểm thử và Hoàn thiện**
    - [x] Viết Unit Tests cho logic Backend
    - [x] Viết E2E Tests cho luồng thêm/sửa/xóa đa ngôn ngữ
    - [x] Chạy `make test-all` và kiểm tra 100% Pass

## 📝 Dev Agent Record
### Debug Log
- [2026-05-02] Thêm model Prisma và đồng bộ database thành công.
- [2026-05-02] Triển khai API Go cho Definition và Example.
- [2026-05-02] Sửa lỗi thiếu package `lucide-react` ở Frontend.
- [2026-05-02] Khắc phục xung đột port khi chạy E2E tests.

### Completion Notes
- Story hoàn thành với đầy đủ chức năng quản lý đa ngôn ngữ (Định nghĩa & Ví dụ).
- Giao diện Premium sử dụng Tailwind, hỗ trợ Tab ngôn ngữ linh hoạt.
- Đã kiểm tra 100% test cases (API & E2E) vượt qua thành công.

## 📂 File List
- `packages/database/schema.prisma`
- `apps/api/main.go`
- `apps/api/main_test.go`
- `apps/web/package.json`
- `apps/web/src/components/concept/LanguageDetail.tsx`
- `apps/web/src/app/[locale]/dashboard/concept/[id]/page.tsx`
- `apps/e2e/tests/multilingual-content.spec.ts`

## 📜 Change Log
- **2026-05-02**: Khởi tạo story và danh sách nhiệm vụ.
- **2026-05-02**: Hoàn thành triển khai và kiểm thử. Story sẵn sàng để review.

## 🏁 Completion Status
- **Status**: review
- **Notes**: Hỗ trợ tối đa tính đa ngôn ngữ trong một thực thể duy nhất. 100% Test Pass.

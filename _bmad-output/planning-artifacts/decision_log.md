# Decision Log & Process Journal - Polyglot Cards

Đây là file ghi chú về quá trình ra quyết định, các lựa chọn kỹ thuật và bài học kinh nghiệm trong quá trình triển khai dự án Polyglot Cards.

## 1. Hành trình Dự án (Timeline)

| Giai đoạn | ID | Decision | Rationale | Status |
|---|---|---|---|
| DEC-001 | Postgres + JSONB for Data | Cân bằng giữa tính linh hoạt của Graph và sự đơn giản của Relational DB cho MVP. | Approved |
| DEC-002 | Next.js ISR (Incremental Static Regeneration) | Tối ưu SEO và Performance cho các bộ thẻ công khai mà vẫn giữ được tính động. | Approved |
| DEC-003 | AI Pre-generation Strategy | Giảm độ trễ (latency) bằng cách tạo Mnemonics ngay khi cập nhật thẻ, thay vì tạo khi học. | Approved |
| DEC-004 | Offline-first with IndexedDB | Đáp ứng yêu cầu học tập mọi lúc mọi nơi mà không phụ thuộc vào kết nối mạng liên tục. | Approved |
| DEC-005 | Go (Golang) Backend | Xử lý SRS Engine hiệu năng cao, chống nghẽn khi có lượng request lớn. | Approved |
| DEC-006 | Google Gemini AI SDK | Tận dụng sức mạnh đa ngôn ngữ của Google AI thông qua lớp Gateway linh hoạt. | Approved |
| DEC-007 | NextAuth (Auth.js) | Xác thực người dùng bảo mật, dễ tích hợp và kiểm soát hoàn toàn dữ liệu. | Approved |
| DEC-010 | Read-only Offline for MVP | Tối ưu trải nghiệm học tập mà không làm phức tạp hóa cơ chế đồng bộ dữ liệu. | Approved |
| DEC-011 | Playwright for E2E Testing | Đảm bảo tính ổn định của luồng nghiệp vụ trên toàn bộ stack. | Approved |
| DEC-012 | E2E Quality Gate Enforcement | Bắt buộc pass E2E tests để hoàn thành Story nhằm duy trì tính ổn định liên tục. | Approved |

| Giai đoạn | Hành động | Kết quả | Ghi chú |
| :--- | :--- | :--- | :--- |
| **01/05/2026** | Khởi tạo Product Brief | Xác định tầm nhìn dự án Polyglot Cards. | Tập trung vào phương pháp ghi nhớ thay vì chỉ là thẻ học từ vựng. |
| **02/05/2026** | Biên soạn PRD (v1) | Hoàn thành bộ yêu cầu sản phẩm. | Chốt cấu trúc đa ngôn ngữ và AI Mnemonics. |
| **02/05/2026** | Chiến lược Song song hóa | Phân chia Task cho Frontend/Backend/AI. | Sử dụng JSON Contract để Agents làm việc độc lập. |
| **02/05/2026** | Thiết kế Epic & Story | Phân rã thành 5 Epic và 17 Story. | Acceptance Criteria bằng Tiếng Việt, giữ keyword English. |
| **02/05/2026** | Sprint Planning | Khởi tạo sprint-status.yaml. | Sẵn sàng cho việc thực thi bằng các Dev Agents. |
| **02/05/2026** | Khởi tạo Toàn bộ Story | Tạo 17 Story chi tiết cho 5 Epic. | Cung cấp đầy đủ ngữ cảnh kỹ thuật cho giai đoạn Implementation. |
| **03/05/2026** | Thiết lập E2E Framework | Cài đặt Playwright và viết test đầu tiên cho Story 2.1. | Đảm bảo AC được kiểm chứng tự động. |
| **03/05/2026** | Tùy chỉnh Quality Gate | Cấu hình BMad để bắt buộc pass test trước khi Done Story. | Tăng cường tính kỷ luật trong phát triển. |

---

## 2. Các Quyết định Quan trọng (Key Decisions)

### [D-001] Mô hình dữ liệu: Concept Node vs Flashcard
- **Lựa chọn:** Concept Node (Một khái niệm trung tâm liên kết nhiều ngôn ngữ).
- **Lý do:** Khắc phục nhược điểm của Flashcard truyền thống (thường chỉ 1-1). Giúp người dùng hiểu bản chất khái niệm thay vì chỉ học vẹt từ.
- **Hệ quả:** Yêu cầu Backend xử lý quan hệ phức tạp hơn, nhưng UI sẽ "wow" hơn.

### [D-002] Cơ chế AI Mnemonics
- **Lựa chọn:** Kết hợp Câu chuyện (Story) + Visual Prompt (DALL-E/Midjourney).
- **Lý do:** Tận dụng tối đa khả năng ghi nhớ hình ảnh và liên tưởng của não bộ.
- **Bài học:** Cần Prompt cực kỳ chuẩn xác để AI không tạo ra các câu chuyện vô nghĩa.

### [D-003] Chiến lược Triển khai: Parallel Development (BMAD Method)
- **Lựa chọn:** Chia dự án thành 3 layer độc lập (UI, Logic, Intelligence) dựa trên JSON Schema.
- **Lý do:** Để nhiều AI Agents có thể code cùng lúc mà không bị chồng chéo (conflict).
- **Công cụ hỗ trợ:** Sử dụng "Hợp đồng dữ liệu" (Data Contract) làm điểm giao thoa.

### [D-004] Chiến lược Kiểm thử: Shift-Left & Quality Gate
- **Lựa chọn:** Thiết lập E2E test ngay từ story đầu tiên và bắt buộc Pass test để hoàn thành Story.
- **Lý do:** Tránh tích tụ nợ kỹ thuật (technical debt) và đảm bảo các tính năng cũ không bị hỏng khi thêm tính năng mới.
- **Công cụ:** Playwright + Custom BMad Workflow Overrides.

---

## 3. Bài học kinh nghiệm (Lessons Learned)

- **Về Quy trình:** Việc dành thời gian định nghĩa rõ "Contract" (JSON Schema) ngay từ đầu giúp giảm 80% rắc rối khi tích hợp (Integration).
- **Về Giao tiếp với AI:** Khi yêu cầu AI chia nhỏ task, cần chỉ rõ "Điểm chốt chặn" (Gate) để kiểm soát chất lượng.

---

## 4. Trạng thái Hiện tại & Bước tiếp theo
- **Trạng thái:** Đang thực hiện Story 2.1. Đã hoàn tất hạ tầng E2E và cơ chế Quality Gate.
- **Bước tiếp theo:** Hoàn tất Code Review cho Story 2.1 (kèm bằng chứng E2E test) và chuyển sang Story tiếp theo.

---
*File này sẽ được cập nhật liên tục mỗi khi có quyết định mới.*

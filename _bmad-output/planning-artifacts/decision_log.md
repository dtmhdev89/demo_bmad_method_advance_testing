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
| DEC-012 | E2E Quality Gate Enforcement | Bắt buộc pass E2E tests để hoàn thành Story nhằm duy trì tính ổn định liên tục. | Approved |
| DEC-013 | I18n Proxy Pattern | Sử dụng pattern [locale] kết hợp với proxy.ts để thay thế middleware i18n truyền thống, giải quyết xung đột với NextAuth. | Approved |
| DEC-014 | Webpack over Turbopack | Vô hiệu hóa Turbopack để đảm bảo độ ổn định môi trường phát triển và tránh lỗi Hydration. | Approved |
| DEC-015 | Mandatory Real Auth for E2E | Bắt buộc thực hiện đăng ký/đăng nhập thực tế trong E2E tests, loại bỏ SKIP_AUTH để đảm bảo tính xác thực của quy trình. | Approved |

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
| **03/05/2026** | Hoàn thành Story 1.1 & 2.1 | Triển khai Đăng ký tài khoản và Tạo Concept Node. | Đạt 100% pass E2E tests cho cả hai story. |
| **03/05/2026** | Hoàn thành Story 1.2 & 2.2 | Triển khai Đăng nhập/Session và Quản lý nội dung đa ngôn ngữ. | Loại bỏ SKIP_AUTH, sử dụng xác thực thực tế trong E2E. |

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

### [D-005] Kiến trúc I18n & Auth Compatibility
- **Lựa chọn:** Chuyển từ Middleware-based I18n sang `[locale]` segment + `proxy.ts`.
- **Lý do:** Middleware i18n truyền thống thường xung đột với NextAuth session handling. Proxy pattern giúp kiểm soát routing chặt chẽ hơn và hỗ trợ tốt cho SEO.
- **Hệ quả:** Code routing minh bạch hơn, dễ debug hơn trong môi trường monorepo.

### [D-006] Ổn định hóa môi trường phát triển
- **Lựa chọn:** Chạy `next dev` với Webpack, tạm thời tắt Turbopack.
- **Lý do:** Turbopack (Next.js v15) đôi khi gây lỗi Hydration mismatch và hot reload không ổn định khi kết hợp với nhiều thư viện i18n/UI phức tạp.
- **Kết quả:** Môi trường dev ổn định, tốc độ phản hồi đồng nhất.

### [D-007] Quy chuẩn xác thực trong Kiểm thử E2E
- **Lựa chọn:** Bắt buộc sử dụng quy trình Đăng ký/Đăng nhập thực tế, vô hiệu hóa `SKIP_AUTH`.
- **Lý do:** Đảm bảo Middleware, Session và các Redirect flows hoạt động chính xác 100% trong môi trường giống production nhất có thể. Tránh các lỗi tiềm ẩn khi bỏ qua lớp bảo mật.
- **Hệ quả:** Tăng thời gian chạy test một chút nhưng đảm bảo độ tin cậy tuyệt đối cho luồng người dùng.

---

## 3. Bài học kinh nghiệm (Lessons Learned)

- **Về Quy trình:** Việc dành thời gian định nghĩa rõ "Contract" (JSON Schema) ngay từ đầu giúp giảm 80% rắc rối khi tích hợp (Integration).
- **Về Giao tiếp với AI:** Khi yêu cầu AI chia nhỏ task, cần chỉ rõ "Điểm chốt chặn" (Gate) để kiểm soát chất lượng.
- **Về Testing:** Không nên dùng shortcuts như `SKIP_AUTH` trong E2E nếu kiến trúc i18n/routing phức tạp, vì nó che giấu các lỗi routing thực tế.

---

## 4. Trạng thái Hiện tại & Bước tiếp theo
- **Trạng thái:** Đã hoàn thành Story 1.1, 1.2, 2.1 và 2.2. Hệ thống Auth và nội dung đa ngôn ngữ đã vận hành ổn định.
- **Bước tiếp theo:** Triển khai Epic 3 (AI Integration) và các tính năng nâng cao của Epic 2.

---
*File này sẽ được cập nhật liên tục mỗi khi có quyết định mới.*

---
stepsCompleted: ["step-01-init", "step-02-discovery", "step-02b-vision", "step-02c-executive-summary", "step-03-success", "step-04-journeys", "step-05-domain", "step-06-innovation", "step-07-project-type", "step-08-scoping", "step-09-functional", "step-10-nonfunctional"]
inputDocuments: ["_bmad-output/planning-artifacts/product-brief-Polyglot-Cards.md", "_bmad-output/planning-artifacts/product-brief-Polyglot-Cards-distillate.md"]
workflowType: 'prd'
releaseMode: phased
documentCounts:
  briefCount: 2
  researchCount: 0
  brainstormingCount: 0
  projectDocsCount: 0
classification:
  projectType: Web App (SaaS-oriented)
  domain: EdTech
  complexity: Medium
  projectContext: greenfield
---

# Product Requirements Document - Polyglot Cards

**Author:** Antigravity (AI Product Manager)
**Date:** 2026-05-02

## 1. Executive Summary

### 1.1 Vision
Trở thành nền tảng số 1 giúp người học chinh phục đa ngôn ngữ song song, xóa bỏ rào cản giữa các ngôn ngữ bằng cách học thông qua **Mạng lưới Khái niệm (Concept Network)** được hỗ trợ bởi AI.

### 1.2 Core Value Proposition (Concept Syncing System)
Thay vì học từ vựng rời rạc của từng ngôn ngữ, Polyglot Cards tập trung vào việc **đồng bộ hóa các khái niệm (Concept Syncing)**. Người dùng sẽ nắm bắt một khái niệm cốt lõi và thấy cách nó được biểu hiện qua nhiều ngôn ngữ mục tiêu cùng lúc, sử dụng AI để tạo ra các liên kết ghi nhớ (Mnemonics) xuyên ngôn ngữ.

### 1.3 Target Audience
- **The Polyglot Aspirants:** Những người đang học từ 2 ngôn ngữ trở lên cùng lúc.
- **Language Hobbyists:** Những người yêu thích khám phá sự tương đồng giữa các ngôn ngữ.
- **Efficient Learners:** Những người muốn tối ưu hóa thời gian học bằng phương pháp liên kết.

## 2. Project Overview
Dự án nhằm xây dựng một ứng dụng web hiện đại, nơi Flashcard không chỉ có 2 mặt, mà là một thực thể đa chiều (Multi-dimensional Node). Hệ thống sẽ sử dụng thuật toán lặp lại ngắt quãng (SRS) được tinh chỉnh cho việc học đa ngôn ngữ, kết hợp với AI Engine để tự động hóa việc tạo nội dung và gợi ý liên kết.

### 2.1 Project Classification
- **Project Type:** Web App (SaaS-oriented)
- **Domain:** EdTech / Language Learning
- **Complexity:** Medium (Yêu cầu xử lý AI và thuật toán SRS)
- **Project Context:** Greenfield (Phát triển mới hoàn toàn)

## 3. Success Criteria

### 3.1 User Success
- **Giảm áp lực nhận thức:** Người học cảm thấy việc học nhiều ngôn ngữ cùng lúc không còn là gánh nặng nhờ vào sự liên kết khái niệm.
- **Dễ dàng học và gợi nhớ:** Người dùng có thể nhanh chóng ghi nhớ và truy xuất từ vựng trong bối cảnh đa ngôn ngữ.

### 3.2 Business Success
- **Tăng trưởng người dùng:** Đạt 500 người dùng hoạt động hàng tháng (MAU).
- **Tỷ lệ giữ chân (Retention):** Đạt ít nhất 30% sau tháng đầu tiên.

### 3.3 Technical Success
- **Độ chính xác của AI:** AI Mnemonics và việc dịch khái niệm đạt độ chính xác "chấp nhận được" (ngữ nghĩa đúng trong 80-90% trường hợp).
- **Độ ổn định của hệ thống:** Đảm bảo trải nghiệm mượt mà trên môi trường Web.

## 4. Product Scope

### 4.1 MVP - Minimum Viable Product
- Hệ thống thẻ khái niệm (Concept Cards) cơ bản hỗ trợ 2-3 ngôn ngữ.
- Thuật toán SRS cơ bản.
- AI Generator cho Mnemonics đơn giản.

### 4.2 Growth Features (Post-MVP)
- Hỗ trợ không giới hạn số lượng ngôn ngữ trên mỗi khái niệm.
- AI tạo hình ảnh/âm thanh liên kết (Multimedia Mnemonics).
- Chế độ "Concept Network Visualizer" (Xem bản đồ khái niệm).

### 4.3 Vision (Future)
- Trở thành một mạng xã hội học thuật cho những người đa ngôn ngữ.
- Tích hợp sâu vào các trình duyệt/ứng dụng đọc để tự động tạo thẻ từ bối cảnh thực tế.

## 5. User Journeys

### 5.1 Hành trình của Linh (The Polyglot Aspirant)
*   **Mục tiêu:** Học từ vựng "Táo" trong tiếng Nhật và tiếng Tây Ban Nha cùng lúc mà không bị lẫn lộn.
*   **Hành trình:**
    *   **Mở đầu:** Linh truy cập ứng dụng và tìm kiếm khái niệm "Táo".
    *   **Hành động:** Hệ thống hiển thị node "Apple" với hai nhánh: Nhật (Ringo) và Tây Ban Nha (Manzana).
    *   **Khoảnh khắc cao trào:** AI tự động tạo ra một Mnemonics: *"Một võ sĩ Samurai (Nhật) đang ăn táo trong một quảng trường ở Tây Ban Nha"*.
    *   **Kết thúc:** Linh ghi nhớ cả hai từ chỉ với một hình ảnh liên kết. Cô cảm thấy tự tin hơn khi học song song.

### 5.2 Hành trình của Mark (The Language Hobbyist)
*   **Mục tiêu:** Khám phá sự tương đồng giữa tiếng Pháp và tiếng Anh để mở rộng vốn từ.
*   **Hành trình:**
    *   **Mở đầu:** Mark sử dụng tính năng **Concept Network Visualizer**.
    *   **Hành động:** Anh chọn node "Tự do" và thấy các từ "Libre" (Pháp) và "Liberty" (Anh) phát ra từ cùng một gốc Latinh.
    *   **Khoảnh khắc cao trào:** Mark nhận ra quy luật biến đổi từ vựng giữa hai ngôn ngữ này.
    *   **Kết thúc:** Mark cảm thấy việc học ngôn ngữ như một trò chơi thám tử đầy thú vị.

### 5.3 Hành trình của Admin (Content Curator)
*   **Mục tiêu:** Đảm bảo chất lượng nội dung và Mnemonics do AI tạo ra.
*   **Hành trình:**
    *   **Mở đầu:** Admin kiểm tra danh sách các Mnemonics mới được tạo bởi AI.
    *   **Hành động:** Phát hiện một Mnemonics có thể gây hiểu lầm về mặt văn hóa.
    *   **Khoảnh khắc cao trào:** Admin sử dụng Dashboard để chỉnh sửa template Mnemonics và áp dụng ngay lập tức cho toàn bộ người dùng đang học node đó.
    *   **Kết thúc:** Độ chính xác và tính phù hợp của nội dung được bảo đảm.

### 5.4 Journey Requirements Summary
Từ các hành trình trên, các năng lực cốt lõi cần được phát triển bao gồm:
- **AI Mnemonic Engine:** Khả năng tạo câu chuyện/hình ảnh liên kết đa ngôn ngữ.
- **Concept Network Visualization:** Giao diện đồ thị trực quan hóa các mối quan hệ giữa các khái niệm.
- **Multi-lingual Flashcard UI:** Giao diện thẻ hiển thị đồng thời nhiều ngôn ngữ mục tiêu.
- **Content Administration Dashboard:** Công cụ quản lý, kiểm duyệt và tinh chỉnh nội dung AI.

## 6. Domain-Specific Requirements (EdTech)

### 6.1 Compliance & Regulatory
- **Quyền riêng tư dữ liệu:** Tuân thủ GDPR cho người dùng quốc tế và các tiêu chuẩn bảo mật dữ liệu học tập.
- **Sở hữu trí tuệ:** Quy định rõ ràng về quyền sở hữu Mnemonics (nội dung do người dùng tạo vs. nội dung do AI tạo).

### 6.2 Technical Constraints
- **Content Integrity:** Cơ chế kiểm tra chéo (Cross-validation) giữa các ngôn ngữ để đảm bảo node khái niệm không bị lệch nghĩa.
- **Hỗ trợ đa bảng chữ cái:** Hệ thống Rendering phải hỗ trợ tốt các ngôn ngữ non-Latin (Nhật, Trung, Ả Rập, v.v.).
- **Offline Access:** Hỗ trợ lưu trữ cục bộ các thẻ đã học để người dùng có thể ôn tập không cần Internet.

### 6.3 Integration Requirements
- **Dictionary APIs:** Tích hợp với các nguồn từ điển mở để cung cấp định nghĩa chính thống.
- **TTS Engine:** Tích hợp công nghệ Text-to-Speech đa ngôn ngữ để hỗ trợ luyện nghe/phát âm.

### 6.4 Risk Mitigations
- **AI Content Moderation:** Sử dụng bộ lọc và kiểm duyệt cộng đồng để loại bỏ các Mnemonics không phù hợp hoặc gây tranh cãi.
- **Cơ chế báo cáo:** Người dùng có thể báo cáo sai sót nội dung ngay trên thẻ để Admin xử lý.

## 7. Innovation & Novel Patterns

### 7.1 Detected Innovation Areas
- **Multi-dimensional Concept Node:** Phá vỡ mô hình flashcard 2 mặt truyền thống, thay thế bằng node khái niệm trung tâm liên kết đa ngôn ngữ.
- **AI-Powered Cross-lingual Mnemonics:** Tự động tạo ra các câu chuyện liên kết sử dụng đặc điểm ngữ âm/hình ảnh của nhiều ngôn ngữ mục tiêu cùng lúc.
- **Concept Network Visualization:** Cách tiếp cận đồ thị (Graph-based approach) để quản lý và khám phá vốn từ vựng thay vì danh sách (List-based).

### 7.2 Market Context & Competitive Landscape
- **Khác biệt hóa:** Trong khi Duolingo tập trung vào game hóa tuyến tính và Anki tập trung vào SRS thuần túy, Polyglot Cards tập trung vào **Liên kết khái niệm đa ngôn ngữ**.
- **Lợi thế cạnh tranh:** Giảm thiểu công sức tạo thẻ cho người học đa ngôn ngữ thông qua AI tự động hóa.

### 7.3 Validation Approach
- **Hypothesis Testing:** Kiểm chứng giả thuyết việc học qua Concept Node giúp giảm áp lực ghi nhớ 30% so với học rời rạc.
- **User Retention:** Theo dõi sự gắn bó của nhóm người học từ 2 ngôn ngữ trở lên.

### 7.4 Risk Mitigation
- **Cognitive Overload:** Sử dụng cơ chế **Layered Reveal** để người dùng không bị choáng ngợp bởi quá nhiều thông tin cùng lúc.
- **AI Hallucination:** Cơ chế kiểm duyệt chéo và gắn cờ (Flagging) từ cộng đồng/admin.

## 8. Web App Specific Requirements

### 8.1 Project-Type Overview
- **Architecture:** Multi-Page Application (MPA) để tối ưu hóa SEO và trải nghiệm tải trang truyền thống nhưng ổn định.
- **Target Browsers:** Hầu hết các trình duyệt dựa trên nhân Chromium (Chrome, Edge, Brave, v.v.).

### 8.2 Technical Architecture Considerations
- **SEO Strategy:** Ưu tiên Server-Side Rendering (SSR) cho các trang danh mục từ vựng và node khái niệm công khai để công cụ tìm kiếm có thể index dễ dàng.
- **Performance Targets:** Đảm bảo thời gian phản hồi trang dưới 2 giây và tối ưu hóa Lighthouse score trên 90.

### 8.3 Implementation Considerations
- **Responsive Design:** Giao diện thích ứng tốt trên cả Mobile và Desktop (ưu tiên Mobile-first vì người dùng thường học khi đang di chuyển).
- **Accessibility:** Tuân thủ các tiêu chuẩn cơ bản về tương phản và điều hướng bàn phím.
- **SaaS Foundation:** Thiết lập cơ chế quản lý người dùng và phân quyền (RBAC) cho các gói dịch vụ Pro/Free.

## 9. Project Scoping & Phased Development

### 9.1 MVP Strategy & Philosophy
- **MVP Approach:** Experience MVP - Tập trung tạo ra trải nghiệm "Aha!" khi thấy sự liên kết đa ngôn ngữ trên một Concept Node.
- **Resource Requirements:** 1 Full-stack Developer, 1 UI/UX Designer, 1 AI Engineer (Prompting focus).

### 9.2 MVP Feature Set (Phase 1) - "Foundation"
- **Core User Journeys Supported:** Tạo Concept Node, Học qua SRS, Sử dụng AI Mnemonics cơ bản.
- **Must-Have Capabilities:**
    - Authentication & Profile management.
    - Concept Node CRUD (Hỗ trợ 3 ngôn ngữ song song).
    - Basic SRS Engine (Leitner system hoặc tương đương).
    - AI Mnemonics Generator (Text-based).
    - MPA-optimized Mobile/Desktop UI.

### 9.3 Post-MVP Features

**Phase 2: Intelligence & Growth**
- Advanced AI Mnemonics (with image suggestions).
- Dictionary & TTS integration.
- Public Explore page for SEO indexing.
- Multi-script support (Kanji, Cyrillic, v.v.).

**Phase 3: Ecosystem & Visualization**
- Concept Network Visualizer (Graph-based map).
- Community Mnemonics & Social sharing.
- Subscription Tiers (SaaS model).

### 9.4 Risk Mitigation Strategy
- **Technical Risks:** AI Latency -> Sử dụng Asynchronous processing.
- **Market Risks:** Độ phức tạp của mô hình mới -> Xây dựng Onboarding flow trực quan.
- **Resource Risks:** Giới hạn nhân sự -> Ưu tiên ổn định core logic trước khi làm Visualizer.

## 10. Functional Requirements

### 10.1 User Management
- **FR1:** Người dùng có thể đăng ký và đăng nhập vào hệ thống.
- **FR2:** Người dùng có thể quản lý thông tin hồ sơ và các ngôn ngữ mục tiêu (Target Languages).
- **FR3:** Hệ thống có thể phân quyền người dùng (Free vs Pro) để giới hạn tính năng.

### 10.2 Concept & Content Management
- **FR4:** Người dùng có thể tạo một **Concept Node** mới (thẻ khái niệm trung tâm).
- **FR5:** Người dùng có thể thêm/sửa/xóa các định nghĩa và ví dụ cho nhiều ngôn ngữ trong cùng một Concept Node.
- **FR6:** Người dùng có thể đính kèm hình ảnh hoặc âm thanh vào từng ngôn ngữ trong Node.
- **FR7:** Người dùng có thể phân loại Concept Node theo các chủ đề (Tags/Categories).

### 10.3 Learning & Retention
- **FR8:** Hệ thống có thể tự động tính toán lịch ôn tập cho từng Concept Node dựa trên thuật toán Spaced Repetition (SRS).
- **FR9:** Người dùng có thể thực hiện phiên ôn tập (Review Session) hiển thị thông tin đa ngôn ngữ liên kết.
- **FR10:** Người dùng có thể đánh giá mức độ ghi nhớ của mình sau mỗi lần ôn tập.
- **FR11:** Hệ thống có thể theo dõi và hiển thị tiến độ học tập (Learning Analytics).

### 10.4 AI & Automation
- **FR12:** Người dùng có thể yêu cầu AI tạo **Mnemonics** (câu chuyện ghi nhớ) liên kết giữa các ngôn ngữ trong một Node.
- **FR13:** Hệ thống có thể tự động gợi ý ví dụ (Examples) cho các ngôn ngữ đích dựa trên từ khóa chính.
- **FR14:** Hệ thống có thể tự động điền các thông tin cơ bản (định nghĩa, loại từ) khi người dùng nhập từ khóa.

### 10.5 Discovery & SEO
- **FR15:** Hệ thống có thể tạo ra các trang công khai cho các bộ thẻ (Decks) phổ biến để các công cụ tìm kiếm index.
- **FR16:** Người dùng có thể tìm kiếm các Concept Node trong kho lưu trữ cá nhân hoặc thư viện công cộng.

### 10.6 Visualization & Community (Phase 3)
- **FR17:** Người dùng có thể xem biểu đồ mạng lưới (Concept Map) hiển thị mối liên hệ giữa các từ vựng.
- **FR18:** Người dùng có thể chia sẻ bộ thẻ hoặc Mnemonics của mình cho cộng đồng.

## 11. Non-Functional Requirements

### 11.1 Performance
- **NFR1:** Thời gian phản hồi trang (Page Load) phải dưới 2 giây cho các trang tĩnh và dưới 3 giây cho các trang động (Study Sessions).
- **NFR2:** AI Mnemonics phải được khởi tạo và hiển thị trong vòng tối đa 5 giây kể từ khi người dùng gửi yêu cầu.
- **NFR3:** Hệ thống phải hỗ trợ ít nhất 100 người dùng hoạt động đồng thời (Concurrent Users) mà không làm tăng độ trễ quá 10%.

### 11.2 Security
- **NFR4:** Toàn bộ dữ liệu người dùng và nội dung học tập phải được mã hóa khi lưu trữ (at rest) và khi truyền tải (in transit) qua HTTPS.
- **NFR5:** Mật khẩu người dùng phải được hash bằng thuật toán bảo mật mạnh (ví dụ: bcrypt).
- **NFR6:** Hệ thống phải có cơ chế bảo vệ chống các cuộc tấn công phổ biến như SQL Injection và XSS.

### 11.3 Reliability
- **NFR7:** Hệ thống phải đảm bảo thời gian hoạt động (Uptime) đạt 99.5% mỗi tháng.
- **NFR8:** Dữ liệu học tập phải được tự động sao lưu (Auto-save) sau mỗi hành động ôn tập để tránh mất dữ liệu khi kết nối bị ngắt.

### 11.4 Scalability
- **NFR9:** Hệ thống phải có khả năng lưu trữ và xử lý ít nhất 10,000 Concept Nodes cho mỗi người dùng mà không làm giảm hiệu suất truy vấn.
- **NFR10:** Cơ cấu hạ tầng phải dễ dàng mở rộng (Horizontal Scaling) khi lượng người dùng tăng trưởng nhanh.

### 11.5 SEO & Accessibility
- **NFR11:** Các trang công khai (Public Decks) phải đạt điểm Lighthouse SEO trên 90.
- **NFR12:** Giao diện phải tuân thủ tiêu chuẩn tương phản màu sắc cơ bản để đảm bảo người dùng có thể học trong thời gian dài mà không mỏi mắt.

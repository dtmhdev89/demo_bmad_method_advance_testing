---
stepsCompleted: [1, 2, 3]
inputDocuments: ["_bmad-output/planning-artifacts/prd.md", "_bmad-output/planning-artifacts/architecture.md"]
---

# demo_bmad_method_advance_testing - Epic Breakdown

## Overview

This document provides the complete epic and story breakdown for demo_bmad_method_advance_testing, decomposing the requirements from the PRD, UX Design if it exists, and Architecture requirements into implementable stories.

## Requirements Inventory

### Functional Requirements

FR1: Người dùng có thể đăng ký và đăng nhập vào hệ thống.
FR2: Người dùng có thể quản lý thông tin hồ sơ và các ngôn ngữ mục tiêu (Target Languages).
FR3: Hệ thống có thể phân quyền người dùng (Free vs Pro) để giới hạn tính năng.
FR4: Người dùng có thể tạo một Concept Node mới (thẻ khái niệm trung tâm).
FR5: Người dùng có thể thêm/sửa/xóa các định nghĩa và ví dụ cho nhiều ngôn ngữ trong cùng một Concept Node.
FR6: Người dùng có thể đính kèm hình ảnh hoặc âm thanh vào từng ngôn ngữ trong Node.
FR7: Người dùng có thể phân loại Concept Node theo các chủ đề (Tags/Categories).
FR8: Hệ thống có thể tự động tính toán lịch ôn tập cho từng Concept Node dựa trên thuật toán Spaced Repetition (SRS).
FR9: Người dùng có thể thực hiện phiên ôn tập (Review Session) hiển thị thông tin đa ngôn ngữ liên kết.
FR10: Người dùng có thể đánh giá mức độ ghi nhớ của mình sau mỗi lần ôn tập.
FR11: Hệ thống có thể theo dõi và hiển thị tiến độ học tập (Learning Analytics).
FR12: Người dùng có thể yêu cầu AI tạo Mnemonics (câu chuyện ghi nhớ) liên kết giữa các ngôn ngữ trong một Node.
FR13: Hệ thống có thể tự động gợi ý ví dụ (Examples) cho các ngôn ngữ đích dựa trên từ khóa chính.
FR14: Hệ thống có thể tự động điền các thông tin cơ bản (định nghĩa, loại từ) khi người dùng nhập từ khóa.
FR15: Hệ thống có thể tạo ra các trang công khai cho các bộ thẻ (Decks) phổ biến để các công cụ tìm kiếm index.
FR16: Người dùng có thể tìm kiếm các Concept Node trong kho lưu trữ cá nhân hoặc thư viện công cộng.

### NonFunctional Requirements

NFR1: Thời gian phản hồi trang (Page Load) phải dưới 2 giây cho các trang tĩnh và dưới 3 giây cho các trang động (Study Sessions).
NFR2: AI Mnemonics phải được khởi tạo và hiển thị trong vòng tối đa 5 giây kể từ khi người dùng gửi yêu cầu.
NFR3: Hệ thống phải hỗ trợ ít nhất 100 người dùng hoạt động đồng thời (Concurrent Users) mà không làm tăng độ trễ quá 10%.
NFR4: Toàn bộ dữ liệu người dùng và nội dung học tập phải được mã hóa khi lưu trữ (at rest) và khi truyền tải (in transit) qua HTTPS.
NFR5: Mật khẩu người dùng phải được hash bằng thuật toán bảo mật mạnh (ví dụ: bcrypt).
NFR6: Hệ thống phải có cơ chế bảo vệ chống các cuộc tấn công phổ biến như SQL Injection và XSS.
NFR7: Hệ thống phải đảm bảo thời gian hoạt động (Uptime) đạt 99.5% mỗi tháng.
NFR8: Dữ liệu học tập phải được tự động sao lưu (Auto-save) sau mỗi hành động ôn tập để tránh mất dữ liệu khi kết nối bị ngắt.
NFR9: Hệ thống phải có khả năng lưu trữ và xử lý ít nhất 10,000 Concept Nodes cho mỗi người dùng mà không làm giảm hiệu suất truy vấn.
NFR10: Cơ cấu hạ tầng phải dễ dàng mở rộng (Horizontal Scaling) khi lượng người dùng tăng trưởng nhanh.
NFR11: Các trang công khai (Public Decks) phải đạt điểm Lighthouse SEO trên 90.
NFR12: Giao diện phải tuân thủ tiêu chuẩn tương phản màu sắc cơ bản để đảm bảo người dùng có thể học trong thời gian dài mà không mỏi mắt.

### Additional Requirements

- **Backend Stack**: Go (Golang) cho hệ thống Backend và SRS Engine.
- **Auth Strategy**: Sử dụng NextAuth (Auth.js) tích hợp vào Next.js.
- **Offline Strategy**: Triển khai Read-only Offline (Caching dữ liệu học tập).
- **Architecture**: Multi-Page Application (MPA) để tối ưu hóa SEO.
- **AI Integration**: Xử lý AI bất đồng bộ (Async Processing) với cơ chế Caching.
- **Database**: Sử dụng Prisma với mô hình dữ liệu linh hoạt (ưu tiên Postgres + JSONB).

### UX Design Requirements

(Không tìm thấy tài liệu UX chuyên biệt. Các yêu cầu về giao diện được trích xuất từ PRD).

### FR Coverage Map

FR1: Epic 1 - Đăng ký và đăng nhập hệ thống.
FR2: Epic 1 - Quản lý hồ sơ và ngôn ngữ mục tiêu.
FR3: Epic 1 - Phân quyền người dùng (Free vs Pro).
FR4: Epic 2 - Tạo Concept Node mới.
FR5: Epic 2 - Quản lý định nghĩa đa ngôn ngữ.
FR6: Epic 2 - Đính kèm media (hình ảnh/âm thanh).
FR7: Epic 2 - Phân loại Concept Node (Tags/Categories).
FR8: Epic 4 - Thuật toán lặp lại ngắt quãng (SRS).
FR9: Epic 4 - Giao diện phiên ôn tập đa ngôn ngữ.
FR10: Epic 4 - Đánh giá mức độ ghi nhớ.
FR11: Epic 4 - Báo cáo tiến độ học tập (Analytics).
FR12: Epic 3 - Tạo Mnemonics bằng AI.
FR13: Epic 3 - Gợi ý ví dụ đa ngôn ngữ bằng AI.
FR14: Epic 3 - Tự động điền thông tin từ khóa bằng AI.
FR15: Epic 5 - Trang công khai và tối ưu hóa SEO.
FR16: Epic 2 - Tìm kiếm Concept Node.

## Epic List

### Epic 1: Nền tảng Định danh & Cá nhân hóa (Identity & Foundation)
Người dùng có thể đăng nhập an toàn và thiết lập các ngôn ngữ mục tiêu để bắt đầu hành trình học tập.
**FRs covered:** FR1, FR2, FR3.

### Epic 2: Quản lý Concept Node Đa chiều (Core Content Management)
Người dùng có thể tạo và quản lý các "nút khái niệm" trung tâm với định nghĩa và ví dụ cho nhiều ngôn ngữ cùng lúc.
**FRs covered:** FR4, FR5, FR6, FR7, FR16.

### Epic 3: Trợ lý AI Thông minh (AI Mnemonic Engine)
Hệ thống tự động hóa việc tạo câu chuyện ghi nhớ (Mnemonics) và gợi ý ví dụ để tối ưu hóa việc học.
**FRs covered:** FR12, FR13, FR14.

### Epic 4: Hệ thống Ôn tập Thông minh (SRS & Analytics)
Người dùng ôn tập các khái niệm vào thời điểm tối ưu nhất dựa trên thuật toán SRS và theo dõi tiến độ học tập.
**FRs covered:** FR8, FR9, FR10, FR11.

### Epic 5: Thư viện Cộng đồng & SEO (Public Discovery)
Hệ thống chia sẻ các bộ thẻ phổ biến để người dùng khám phá và tối ưu hóa khả năng tìm kiếm trên web.
**FRs covered:** FR15.

## Epic 1: Nền tảng Định danh & Cá nhân hóa (Identity & Foundation)

Người dùng có thể đăng nhập an toàn và thiết lập các ngôn ngữ mục tiêu để bắt đầu hành trình học tập.

### Story 1.1: Đăng ký tài khoản với Email và chọn ngôn ngữ mục tiêu

As a new user,
I want to create an account with my email and select my target languages,
So that I can start learning and tracking my progress.

**Acceptance Criteria:**

**Given** tôi đang ở trang đăng ký
**When** tôi nhập email hợp lệ, mật khẩu và chọn ít nhất một ngôn ngữ mục tiêu
**Then** một tài khoản người dùng mới được tạo trong cơ sở dữ liệu
**And** mật khẩu của tôi được mã hóa an toàn (bcrypt)
**And** tôi được tự động đăng nhập và chuyển hướng đến trang dashboard

### Story 1.2: Đăng nhập và quản lý phiên làm việc (Session)

As a registered user,
I want to log in securely with my credentials,
So that I can access my personalized learning data.

**Acceptance Criteria:**

**Given** tôi đã có tài khoản đã đăng ký
**When** tôi nhập đúng email và mật khẩu tại trang đăng nhập
**Then** tôi được xác thực thành công bằng NextAuth
**And** một phiên làm việc bảo mật được thiết lập
**And** tôi được chuyển hướng đến trang dashboard

### Story 1.3: Quản lý hồ sơ và phân quyền (Free/Pro)

As a user,
I want to update my target languages and see my account status (Free/Pro),
So that I can customize my learning experience.

**Acceptance Criteria:**

**Given** tôi đã đăng nhập
**When** tôi truy cập vào phần cài đặt hồ sơ
**Then** tôi có thể thấy các ngôn ngữ mục tiêu hiện tại và vai trò tài khoản (Free/Pro)
**When** tôi thay đổi ngôn ngữ mục tiêu và lưu lại
**Then** các thay đổi được lưu trữ bền vững trong cơ sở dữ liệu

## Epic 2: Quản lý Concept Node Đa chiều (Core Content Management)

Người dùng có thể tạo và quản lý các "nút khái niệm" trung tâm với định nghĩa và ví dụ cho nhiều ngôn ngữ cùng lúc.

### Story 2.1: Tạo Concept Node mới với ý nghĩa trung tâm

As a user,
I want to create a central "concept node",
So that I can link different languages to it.

**Acceptance Criteria:**

**Given** tôi đã đăng nhập và đang ở trang Dashboard
**When** tôi nhấn nút "Tạo Concept mới" và nhập từ khóa ý nghĩa trung tâm
**Then** một Concept Node mới được tạo trong cơ sở dữ liệu
**And** tôi được chuyển hướng đến trang chi tiết của Node đó

### Story 2.2: Thêm và quản lý định nghĩa/ví dụ đa ngôn ngữ

As a user,
I want to add definitions and examples for each target language within a Concept Node,
So that I understand the meaning in each language.

**Acceptance Criteria:**

**Given** tôi đang xem một Concept Node
**When** tôi chọn một ngôn ngữ mục tiêu và nhập định nghĩa/ví dụ tương ứng
**Then** thông tin được lưu trữ và hiển thị ngay lập tức trong Node
**And** tôi có thể chỉnh sửa hoặc xóa các thông tin này bất cứ lúc nào

### Story 2.3: Đính kèm hình ảnh và âm thanh vào Concept Node

As a user,
I want to add illustrative images and pronunciation audio files for each language,
So that I can increase memory efficiency.

**Acceptance Criteria:**

**Given** tôi đang ở chế độ chỉnh sửa ngôn ngữ trong một Concept Node
**When** tôi tải lên một tệp hình ảnh hoặc âm thanh
**Then** tệp được lưu trữ và liên kết với ngôn ngữ đó
**And** tôi có thể xem hình ảnh hoặc nghe âm thanh khi xem thẻ

### Story 2.4: Phân loại và gắn thẻ (Tags/Categories) cho Concept Node

As a user,
I want to attach tags or put a Concept Node into a Category,
So that I can manage my vocabulary in groups.

**Acceptance Criteria:**

**Given** tôi đang chỉnh sửa một Concept Node
**When** tôi nhập danh sách các thẻ (tags) hoặc chọn Chủ đề (Category) hiện có
**Then** Node được gán nhãn tương ứng và có thể lọc theo các nhãn này sau này

### Story 2.5: Tìm kiếm và lọc Concept Node

As a user,
I want to search for Concept Nodes by keyword or filter by tag/language,
So that I can quickly find the information I need.

**Acceptance Criteria:**

**Given** tôi đang ở trang thư viện Concept Nodes
**When** tôi nhập từ khóa vào ô tìm kiếm hoặc chọn bộ lọc
**Then** hệ thống hiển thị danh sách các Node khớp với yêu cầu tìm kiếm

## Epic 3: Trợ lý AI Thông minh (AI Mnemonic Engine)

Hệ thống tự động hóa việc tạo câu chuyện ghi nhớ (Mnemonics) và gợi ý ví dụ để tối ưu hóa việc học.

### Story 3.1: Tạo câu chuyện ghi nhớ (Mnemonics) bằng AI

As a user,
I want to request AI to generate a mnemonic story linking languages in a Node,
So that I can remember them more easily.

**Acceptance Criteria:**

**Given** tôi đang xem một Concept Node có ít nhất 2 ngôn ngữ
**When** tôi nhấn nút "Tạo Mnemonic bằng AI"
**Then** hệ thống gửi yêu cầu đến AI Engine (Gemini/OpenAI)
**And** một câu chuyện ghi nhớ sáng tạo, liên kết âm thanh/ý nghĩa các ngôn ngữ được hiển thị trong vòng 5 giây
**And** hệ thống tự động lọc các nội dung không phù hợp hoặc nhạy cảm
**And** người dùng có thể báo cáo (Flag) nếu nội dung AI không chính xác hoặc không phù hợp
**And** tôi có thể lưu hoặc yêu cầu tạo lại câu chuyện khác

### Story 3.2: Tự động gợi ý ví dụ cho các ngôn ngữ mục tiêu

As a user,
I want AI to suggest real-world example sentences for the keyword in the target language,
So that I understand how to use the word in context.

**Acceptance Criteria:**

**Given** tôi vừa thêm một từ mới vào ngôn ngữ mục tiêu
**When** tôi chọn tính năng "Gợi ý ví dụ"
**Then** AI trả về ít nhất 2 câu ví dụ phổ biến kèm bản dịch sang ngôn ngữ gốc
**And** tôi có thể chọn câu ví dụ ưng ý để thêm vào Node

### Story 3.3: Tự động điền thông tin từ điển (Định nghĩa, Loại từ)

As a user,
I want the system to automatically fill in basic information when I enter a keyword,
So that I save time on manual data entry.

**Acceptance Criteria:**

**Given** tôi đang nhập một từ mới vào Concept Node
**When** tôi nhập xong từ khóa và nhấn Tab hoặc chọn "Tự động điền"
**Then** hệ thống tự động truy vấn và điền Loại từ (Danh từ, Động từ,...) và Định nghĩa cơ bản
**And** tôi vẫn có quyền chỉnh sửa lại các thông tin này

## Epic 4: Hệ thống Ôn tập Thông minh (SRS & Analytics)

Người dùng ôn tập các khái niệm vào thời điểm tối ưu nhất dựa trên thuật toán SRS và theo dõi tiến độ học tập.

### Story 4.1: Logic tính toán lịch ôn tập dựa trên SRS

As a user,
I want the system to automatically calculate when I need to review a Concept Node,
So that I optimize my long-term memory retention.

**Acceptance Criteria:**

**Given** một Concept Node đã được học
**When** hệ thống chạy logic SRS (ví dụ: thuật toán Anki-SM2 hoặc Leitner)
**Then** ngày ôn tập tiếp theo (Next Review Date) được xác định dựa trên lịch sử ghi nhớ của tôi
**And** Node được đưa vào danh sách "Cần ôn tập" khi đến hạn

### Story 4.2: Giao diện phiên ôn tập liên kết đa ngôn ngữ

As a user,
I want to perform review sessions where languages are displayed linked together,
So that I reinforce my multi-dimensional concept network.

**Acceptance Criteria:**

**Given** tôi bắt đầu một phiên ôn tập
**When** hệ thống hiển thị mặt trước của thẻ (khái niệm trung tâm)
**Then** tôi có thể lật thẻ để xem định nghĩa, ví dụ và Mnemonics của tất cả ngôn ngữ mục tiêu cùng lúc
**And** hệ thống sử dụng cơ chế **Layered Reveal** để hiển thị thông tin dần dần, tránh gây quá tải nhận thức
**And** giao diện hỗ trợ hiển thị tốt các bảng chữ cái khác nhau (Kanji, Cyrillic,...)

### Story 4.3: Đánh giá mức độ ghi nhớ sau khi ôn tập

As a user,
I want to self-assess my memory level after seeing the answer,
So that the system adjusts the review schedule accordingly.

**Acceptance Criteria:**

**Given** tôi vừa xem đáp án của một thẻ trong phiên ôn tập
**When** tôi chọn một trong các mức độ: "Quên", "Khó", "Tốt", "Dễ"
**Then** hệ thống cập nhật lịch sử ôn tập (Review History) và tính toán lại ngày ôn tập tiếp theo ngay lập tức

### Story 4.4: Báo cáo tiến độ và Dashboard phân tích học tập

As a user,
I want to see my learning progress charts and vocabulary statistics,
So that I stay motivated to keep learning daily.

**Acceptance Criteria:**

**Given** tôi đang ở trang Dashboard
**When** tôi xem phần Analytics
**Then** hệ thống hiển thị biểu đồ số lượng thẻ đã học theo thời gian
**And** hiển thị thống kê về mức độ ghi nhớ và các chủ đề đang học mạnh nhất/yếu nhất

### Story 4.5: Đồng bộ hóa dữ liệu và Tối ưu hóa truy vấn

As a user,
I want my learning data to be synced across devices and the dashboard to load instantly,
So that I can study anywhere without performance lag.

**Acceptance Criteria:**

**Given** tôi hoàn thành một phiên ôn tập trên bất kỳ thiết bị nào
**When** tôi mở ứng dụng trên một thiết bị khác
**Then** dữ liệu lịch sử và lịch SRS được cập nhật đồng bộ ngay lập tức
**And** các truy vấn dữ liệu cho Analytics Dashboard được tối ưu hóa bằng Database Indexing để đảm bảo tốc độ tải dưới 2 giây ngay cả với 10,000 nodes

## Epic 5: Thư viện Cộng đồng & SEO (Public Discovery)

Hệ thống chia sẻ các bộ thẻ phổ biến để người dùng khám phá và tối ưu hóa khả năng tìm kiếm trên web.

### Story 5.1: Trang bộ thẻ công khai và Node khái niệm tối ưu SEO

As a guest,
I want to view public decks and concept node information on the web,
So that I can explore the app and learn for free.

**Acceptance Criteria:**

**Given** một bộ thẻ hoặc Concept Node được đặt ở chế độ "Công khai"
**When** tôi truy cập vào đường dẫn công khai (ví dụ: `/explore/decks/science`)
**Then** hệ thống hiển thị nội dung thẻ mà không yêu cầu đăng nhập
**And** trang web được tối ưu hóa kỹ thuật SEO (Meta tags, SSR) để các công cụ tìm kiếm có thể index

### Story 5.2: Khám phá và sao chép bộ thẻ cộng đồng

As a user,
I want to search for and clone decks from the community to my personal repository,
So that I can start learning immediately without creating cards from scratch.

**Acceptance Criteria:**

**Given** tôi đang ở trang "Khám phá" (Explore)
**When** tôi tìm thấy một bộ thẻ ưng ý và nhấn "Lưu vào thư viện"
**Then** hệ thống tạo một bản sao của bộ thẻ đó trong tài khoản của tôi
**And** tôi có thể bắt đầu ôn tập bộ thẻ đó với lịch trình SRS cá nhân

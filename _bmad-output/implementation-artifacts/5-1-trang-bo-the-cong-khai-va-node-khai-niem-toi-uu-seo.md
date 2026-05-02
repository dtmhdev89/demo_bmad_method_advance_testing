# Story 5.1: Trang bộ thẻ công khai và Node khái niệm tối ưu SEO
**Assignee:** Agent-Frontend

## 📝 User Story
**As a** guest,
**I want to** view public decks and concept node information on the web,
**So that I can** explore the app and learn for free.

## ✅ Acceptance Criteria
**Given** một bộ thẻ hoặc Concept Node được đặt ở chế độ "Công khai"
**When** tôi truy cập vào đường dẫn công khai (ví dụ: `/explore/decks/science`)
**Then** hệ thống hiển thị nội dung thẻ mà không yêu cầu đăng nhập
**And** trang web được tối ưu hóa kỹ thuật SEO (Meta tags, SSR) để các công cụ tìm kiếm có thể index

## 🛠 Developer Context
### Technical Requirements
- **Frontend**: Sử dụng Next.js ISR (Incremental Static Regeneration) để đảm bảo tốc độ tải cực nhanh cho guest.
- **SEO**: Tích hợp `next/head` hoặc `Metadata API` để cấu hình Title, Description, OpenGraph images động dựa trên nội dung Node.

### Architecture Compliance
- Các route `/explore/**` phải cho phép truy cập công khai mà không qua Middleware bảo mật.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: SEO là chìa khóa để ứng dụng phát triển tự nhiên.

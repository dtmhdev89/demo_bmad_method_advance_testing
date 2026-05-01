---
stepsCompleted: [1]
inputDocuments: ["_bmad-output/planning-artifacts/prd.md", "_bmad-output/planning-artifacts/product-brief-Polyglot-Cards.md", "_bmad-output/planning-artifacts/decision_log.md"]
workflowType: 'architecture'
project_name: 'demo_bmad_method_advance_testing'
user_name: 'hieu'
date: '2026-05-02'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis (Enhanced)

### Requirements Overview

**Functional Requirements:**
Hệ thống phải quản lý vòng đời của Concept Node đa chiều thông qua mô hình dữ liệu linh hoạt (ưu tiên Postgres + JSONB để cân bằng giữa hiệu suất và sự đơn giản). Cần một kiến trúc xử lý AI bất đồng bộ với cơ chế Caching/Pre-generation để đảm bảo trải nghiệm người dùng không bị ngắt quãng.

**Non-Functional Requirements:**
- Hiệu suất: Tải trang < 2s (sử dụng ISR cho trang công khai), phản hồi AI < 5s (thông qua Async Processing).
- Bảo mật: Mã hóa dữ liệu, bcrypt, và tuân thủ GDPR cho thị trường quốc tế.
- Độ tin cậy: Uptime 99.5%, cơ chế Auto-save và Offline-first (IndexedDB).
- Khả năng mở rộng: Tối ưu hóa Database Indexing để hỗ trợ 10,000 nodes/user mà không làm giảm tốc độ truy vấn.

**Scale & Complexity:**
Trung bình cao (Medium-High) do tính phức tạp của việc đồng bộ hóa đa ngôn ngữ và xử lý logic SRS trên tập dữ liệu lớn.

- Primary domain: EdTech / Multi-lingual SaaS
- Complexity level: Medium-High
- Estimated architectural components: Auth, Node Manager, SRS Engine, AI Service (với Prompt Registry), SEO Renderer (Next.js ISR), Offline Sync, Graph Visualizer.

### Technical Constraints & Dependencies
- Hệ thống phải render mượt mà các ký tự Non-Latin.
- Phụ thuộc vào các LLM APIs (OpenAI/Gemini) với chiến lược Fallback khi API gặp sự cố.

### Cross-Cutting Concerns Identified
- **AI Prompt Management:** Quản lý và tinh chỉnh các mẫu câu chuyện ghi nhớ theo thời gian.
- **Data Integrity:** Đảm bảo tính nhất quán về nghĩa của khái niệm khi thêm ngôn ngữ mới.
- **Performance Budget:** Kiểm soát kích thước bundle và thời gian phản hồi API để đạt điểm Lighthouse > 90.

## Architectural Decisions (ADR)

### ADR-001: Backend Stack for SRS Engine
- **Decision:** Sử dụng **Go (Golang)** cho hệ thống Backend.
- **Rationale:** Khả năng xử lý Concurrency của Go (Goroutines) rất mạnh, phù hợp cho việc tính toán SRS cho lượng lớn thẻ học mà không gây nghẽn.
- **Trade-offs:** Cần đội ngũ có kiến thức về Go, nhưng bù lại hiệu năng vượt trội so với các ngôn ngữ Scripting.

### ADR-003: Authentication Strategy
- **Decision:** Sử dụng **NextAuth (Auth.js)** tích hợp trực tiếp vào Next.js.
- **Rationale:** Tận dụng hệ sinh thái Next.js, bảo mật, miễn phí và dễ dàng kiểm soát dữ liệu người dùng trong Postgres.

### ADR-004: Offline & Sync Scope for MVP
- **Decision:** Triển khai **Read-only Offline** (Caching dữ liệu học tập) thay vì Full-sync.
- **Rationale:** Giảm thiểu rủi ro xung đột dữ liệu (Conflict Resolution) trong giai đoạn đầu, tập trung vào trải nghiệm học tập mượt mà.

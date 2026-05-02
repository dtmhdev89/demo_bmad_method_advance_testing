# Story 3.3: Tự động điền thông tin từ điển (Định nghĩa, Loại từ)
**Assignee:** Agent-Frontend

## 📝 User Story
**As a** user,
**I want** the system to automatically fill in basic information when I enter a keyword,
**So that I save time** on manual data entry.

## ✅ Acceptance Criteria
**Given** tôi đang nhập một từ mới vào Concept Node
**When** tôi nhập xong từ khóa và nhấn Tab hoặc chọn "Tự động điền"
**Then** hệ thống tự động truy vấn và điền Loại từ (Danh từ, Động từ,...) và Định nghĩa cơ bản
**And** tôi vẫn có quyền chỉnh sửa lại các thông tin này

## 🛠 Developer Context
### Technical Requirements
- **Integration**: Có thể sử dụng API từ điển bên ngoài (Free Dictionary API) hoặc chính AI Gemini.
- **Frontend**: Cơ chế "Debounce" hoặc kích hoạt bằng phím tắt để tránh gọi API liên tục khi đang gõ.

## 🏁 Completion Status
- **Status**: ready-for-dev
- **Notes**: Tăng tốc độ tạo thẻ lên gấp 3 lần.

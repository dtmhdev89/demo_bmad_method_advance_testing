# Polyglot Cards E2E Testing Framework

Hệ thống kiểm thử đầu-cuối (End-to-End) sử dụng Playwright cho dự án Polyglot Cards.

## 🚀 Cài đặt

1. **Cài đặt dependencies**:
   ```bash
   pnpm install
   ```

2. **Cài đặt trình duyệt Playwright**:
   ```bash
   npx playwright install
   ```

3. **Cấu hình môi trường**:
   Sao chép `.env.example` thành `.env` và cập nhật các giá trị cần thiết.

## 🛠 Chạy Tests

- **Chạy tất cả tests**:
  ```bash
  pnpm test
  ```

- **Chạy với giao diện UI**:
  ```bash
  pnpm test:ui
  ```

- **Chạy chế độ Debug**:
  ```bash
  pnpm test:debug
  ```

## 🏗 Kiến trúc

- **tests/**: Chứa các file test kịch bản (`.spec.ts`).
- **support/fixtures/**: Chứa các fixture để mở rộng khả năng của Playwright (auth, api, db).
- **support/helpers/**: Các hàm tiện ích hỗ trợ viết test.
- **support/page-objects/**: Page Object Model (POM) để quản lý selectors và hành động trên trang.

## 💡 Best Practices

- **Selectors**: Ưu tiên sử dụng `data-testid` cho các phần tử quan trọng.
- **Isolation**: Mỗi test nên độc lập và tự dọn dẹp dữ liệu nếu cần.
- **Given/When/Then**: Viết kịch bản theo định dạng dễ hiểu.

## 🔗 Liên kết

- [Playwright Documentation](https://playwright.dev/)
- [BMad Method Testing Standards](https://docs.bmad-method.org/testing)

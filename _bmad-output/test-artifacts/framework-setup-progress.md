---
stepsCompleted: ['step-01-preflight', 'step-02-select-framework']
lastStep: 'step-02-select-framework'
lastSaved: '2026-05-02T18:05:30Z'
---

# Step 1: Preflight Checks

## Stack Detection
- **Detected Stack**: `fullstack`
- **Frontend**: Next.js 16 (apps/web)
- **Backend**: Go 1.25 / Echo (apps/api), Prisma (packages/database)

## Prerequisites Validation
- [x] Root `package.json` exists.
- [x] No existing E2E framework detected (Playwright/Cypress).
- [x] Backend manifests found (`go.mod`, `schema.prisma`).

## Project Context
- **Monorepo Manager**: TurboRepo / pnpm.
- **Styling**: Tailwind CSS 4.
- **State**: Early development (Story 2.1 completed).
- **Architecture**: `_bmad-output/planning-artifacts/architecture.md`

# Step 2: Framework Selection

## Selected Frameworks
- **E2E/Frontend**: `Playwright`
- **Backend**: `Go test`

## Rationale
- Anh Hieu ưu tiên tính ổn định và yêu cầu cụ thể về Playwright.
- Playwright phù hợp với cấu trúc Monorepo và có hiệu năng thực thi song song tốt.
- Go test là lựa chọn mặc định và tối ưu cho backend Go.

# Step 3: Scaffold Framework

## Directory Structure
- Created `apps/e2e` workspace.
- Setup `tests/`, `support/fixtures/`, `support/helpers/`, `support/page-objects/`.

## Configuration
- Generated `playwright.config.ts` with:
  - Multi-browser support (Chromium, Firefox, Webkit).
  - Parallelism enabled.
  - Integration with `web` and `api` dev servers.
- Added `.env.example` and `.nvmrc`.

## Fixtures & Tests
- Implemented base fixtures in `support/fixtures/index.ts`.
- Added sample E2E test for Story 2.1 in `tests/concept-node.spec.ts`.
- Added `data-testid` to `apps/web/src/app/dashboard/page.tsx` for robust testing.

## Next Steps
- Run `npx playwright install` to setup browser binaries.
- Execute the sample test to verify the setup.

# Step 4: Documentation & Scripts

## Documentation
- Created `apps/e2e/README.md` với hướng dẫn cài đặt và chạy test chi tiết.

## Scripts
- Tích hợp các lệnh chạy test vào `apps/e2e/package.json`.
- Tạo `Makefile` tại root để quản lý việc chạy test toàn hệ thống (API và E2E).

# Step 5: Validate & Summarize

## Validation Results
- [x] Preflight checks passed.
- [x] Directory structure matches monorepo requirements.
- [x] Playwright config supports parallel execution and dev server integration.
- [x] Sample test covers Story 2.1 Acceptance Criteria.

## Final Summary
- **Framework**: Playwright (E2E), Go test (Backend).
- **Setup Type**: Monorepo-aware workspace (`apps/e2e`).
- **Knowledge Base**: Tuân thủ các mẫu về fixture và data-testid.

## Hướng dẫn tiếp theo cho anh Hieu:
1. Đợi quá trình cài đặt dependencies hoàn tất (em đang chạy `pnpm install` ngầm).
2. Chạy lệnh cài đặt trình duyệt: `cd apps/e2e && npx playwright install`.
3. Khởi chạy toàn bộ dự án: `pnpm dev`.
4. Chạy bộ test đầu tiên: `pnpm test-all` (hoặc `make test-all`).

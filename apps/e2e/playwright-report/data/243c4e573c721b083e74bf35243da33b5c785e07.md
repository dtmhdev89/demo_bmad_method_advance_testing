# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: concept-node.spec.ts >> Concept Node Creation >> should create a new concept node and redirect to detail page
- Location: tests/concept-node.spec.ts:10:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('text=Concept Test 2189')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('text=Concept Test 2189')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - button "Open Next.js Dev Tools" [ref=e7] [cursor=pointer]:
    - img [ref=e8]
  - alert [ref=e11]
  - generic [ref=e13]:
    - heading "Chi tiết Concept" [level=1] [ref=e14]
    - generic [ref=e15]:
      - paragraph [ref=e16]: "ID: cmootkm6x0009p5jeq732h1dv"
      - paragraph [ref=e17]: Đây là trang chi tiết cho Concept Node vừa tạo.
      - paragraph [ref=e18]: (Tính năng thêm nội dung đa ngôn ngữ sẽ được triển khai ở Story 2.2)
```

# Test source

```ts
  1  | import { test, expect } from '../support/fixtures';
  2  | 
  3  | test.describe('Concept Node Creation', () => {
  4  |   test.beforeEach(async ({ page }) => {
  5  |     // We use the dashboard as the starting point.
  6  |     // Auth is skipped via SKIP_AUTH=true in the test environment.
  7  |     await page.goto('/dashboard');
  8  |   });
  9  | 
  10 |   test('should create a new concept node and redirect to detail page', async ({ page }) => {
  11 |     const meaning = `Concept Test ${Math.floor(Math.random() * 10000)}`;
  12 | 
  13 |     // Fill in the meaning using data-testid
  14 |     await page.getByTestId('concept-meaning-input').fill(meaning);
  15 | 
  16 |     // Click create button
  17 |     await page.getByTestId('create-concept-button').click();
  18 | 
  19 |     // Wait for redirection
  20 |     await page.waitForURL(/\/(vi|en|ja)\/dashboard\/concept\/.+/, { timeout: 15000 });
  21 |     
  22 |     // Verify detail page content
  23 |     await expect(page.locator('h1')).toContainText(/Chi tiết Concept|Concept Details/, { timeout: 10000 });
  24 |     await expect(page.locator('text=ID:')).toBeVisible();
  25 |     
  26 |     // Verify the meaning we entered is displayed
> 27 |     await expect(page.locator(`text=${meaning}`)).toBeVisible();
     |                                                   ^ Error: expect(locator).toBeVisible() failed
  28 |   });
  29 | 
  30 |   test('should show validation error if meaning is empty', async ({ page }) => {
  31 |     // Attempt to click create without filling meaning
  32 |     await page.getByTestId('create-concept-button').click();
  33 | 
  34 |     // Verify browser validation (required attribute)
  35 |     const input = page.getByTestId('concept-meaning-input');
  36 |     const isInvalid = await input.evaluate((el: HTMLInputElement) => !el.checkValidity());
  37 |     expect(isInvalid).toBe(true);
  38 |   });
  39 | });
  40 | 
```
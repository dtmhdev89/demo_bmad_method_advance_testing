import { test, expect } from '../support/fixtures';

test.describe('User Registration', () => {
  test.beforeEach(async ({ page }) => {
    // We try to go to /register, middleware will redirect to /[locale]/register
    await page.goto('/register');
  });

  test('should register a new user successfully', async ({ page }) => {
    const email = `test-${Date.now()}@example.com`;
    const password = 'Password123!';

    // Fill registration form
    await page.fill('#email', email);
    await page.fill('#password', password);
    
    // Select a language (e.g., Japanese)
    await page.click('#lang-ja');

    // Submit form
    await page.click('#register-submit');

    // Should redirect to dashboard
    await expect(page).toHaveURL(/\/(vi|en|ja)\/dashboard/);
    
    // Verify dashboard content
    await expect(page.locator('h1')).toContainText(/Dashboard|Bảng điều khiển/);
  });

  test('should show validation error for invalid email', async ({ page }) => {
    await page.fill('#email', 'invalid-email');
    await page.fill('#password', 'Password123!');
    await page.click('#lang-ja');
    await page.click('#register-submit');

    // Check for validation message (browser validation or server action response)
    // The current implementation uses HTML5 required and type="email", but also has server-side validation
    const emailInput = page.locator('#email');
    const isInvalid = await emailInput.evaluate((el: HTMLInputElement) => !el.checkValidity());
    expect(isInvalid).toBe(true);
  });

  test('should show error if no language is selected', async ({ page }) => {
    await page.fill('#email', `test-${Date.now()}@example.com`);
    await page.fill('#password', 'Password123!');
    
    // Do not select any language
    await page.click('#register-submit');

    // Check for server-side error message
    await expect(page.locator('text=Vui lòng chọn ít nhất một ngôn ngữ mục tiêu.')).toBeVisible();
  });
});

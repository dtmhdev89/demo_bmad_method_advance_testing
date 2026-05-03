import { test, expect } from '../support/fixtures';

test.describe('User Profile Management', () => {
  let email: string;
  const password = 'Password123!';

  test.beforeEach(async ({ page }) => {
    // Register a new user for each test to have a clean slate
    email = `profile-test-${Date.now()}@example.com`;
    await page.goto('/register');
    await page.fill('#email', email);
    await page.fill('#password', password);
    await page.click('#lang-vi');
    await page.click('#register-submit');
    await expect(page).toHaveURL(/\/(vi|en|ja)\/dashboard/);
  });

  test('should display current user info in profile page', async ({ page }) => {
    const currentUrl = page.url();
    const profileUrl = currentUrl.replace('/dashboard', '/dashboard/profile');
    await page.goto(profileUrl);

    await expect(page.locator('h1')).toContainText(/Hồ sơ cá nhân/);
    await expect(page.locator('#user-role')).toContainText(/FREE|PRO/);
    
    // Check if Vietnamese is selected
    await expect(page.locator('button:has-text("Tiếng Việt")')).toHaveClass(/bg-blue-600/);
  });

  test('should update name and target languages', async ({ page }) => {
    const currentUrl = page.url();
    const profileUrl = currentUrl.replace('/dashboard', '/dashboard/profile');
    await page.goto(profileUrl);

    const newName = 'Amelia Developer';
    await page.fill('input[placeholder="Nhập tên của bạn"]', newName);

    // Select English and Japanese
    await page.click('button:has-text("Tiếng Anh")');
    await page.click('button:has-text("Tiếng Nhật")');

    // Submit form
    await page.click('button:has-text("Cập nhật hồ sơ")');

    // Wait for the success alert (handled automatically by Playwright or we can just wait for refresh)
    // The component refreshes the page on success
    await page.waitForTimeout(2000); 
    
    await page.goto(profileUrl);
    await expect(page.locator('input[placeholder="Nhập tên của bạn"]')).toHaveValue(newName);
    await expect(page.locator('button:has-text("Tiếng Anh")')).toHaveClass(/bg-blue-600/);
    await expect(page.locator('button:has-text("Tiếng Nhật")')).toHaveClass(/bg-blue-600/);
    await expect(page.locator('button:has-text("Tiếng Việt")')).toHaveClass(/bg-blue-600/);
  });
});

import { test, expect } from '../support/fixtures';
import { registerAndLogin } from '../support/helpers/auth';

test.describe('Concept Node Creation', () => {
  test.beforeEach(async ({ page }) => {
    // Register and login before each test
    await registerAndLogin(page);
    await page.goto('/dashboard');
  });

  test('should create a new concept node and redirect to detail page', async ({ page }) => {
    const meaning = `Concept Test ${Math.floor(Math.random() * 10000)}`;

    // Fill in the meaning using data-testid
    await page.getByTestId('concept-meaning-input').fill(meaning);

    // Click create button
    await page.getByTestId('create-concept-button').click();

    // Wait for redirection
    await page.waitForURL(/\/(vi|en|ja)\/dashboard\/concept\/.+/, { timeout: 15000 });
    
    // Verify detail page content
    await expect(page.locator('h1')).toContainText(/Chi tiết Concept|Concept Details/, { timeout: 10000 });
    await expect(page.locator('text=ID:')).toBeVisible();
    
    // Verify the meaning we entered is displayed
    await expect(page.locator(`text=${meaning}`)).toBeVisible();
  });

  test('should show validation error if meaning is empty', async ({ page }) => {
    // Attempt to click create without filling meaning
    await page.getByTestId('create-concept-button').click();

    // Verify browser validation (required attribute)
    const input = page.getByTestId('concept-meaning-input');
    const isInvalid = await input.evaluate((el: HTMLInputElement) => !el.checkValidity());
    expect(isInvalid).toBe(true);
  });
});

import { test, expect } from '../support/fixtures';

test.describe('Concept Node Creation', () => {
  test.beforeEach(async ({ page }) => {
    // In a real app, we would handle authentication here.
    // For now, we go directly to the dashboard.
    await page.goto('/dashboard');
  });

  test('should create a new concept node and redirect to detail page', async ({ page }) => {
    // Mock the API response
    await page.route('**/concepts', async (route) => {
      await route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ id: 'test-id-123', meaning_central: 'Test Concept' }),
      });
    });

    const meaning = `Test Concept ${Math.floor(Math.random() * 1000)}`;

    // Fill in the meaning
    await page.getByTestId('concept-meaning-input').fill(meaning);

    // Click create button
    await page.getByTestId('create-concept-button').click();

    // Verify loading state (optional but good practice)
    // await expect(page.getByTestId('create-concept-button')).toBeDisabled();

    // Verify redirection to detail page
    await expect(page).toHaveURL(/\/dashboard\/concept\/.+/);

    // Verify detail page content
    await expect(page.locator('h1')).toContainText('Chi tiết Concept');
    await expect(page.locator('text=ID:')).toBeVisible();
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

import { test, expect } from '../support/fixtures';

test.describe('Multilingual Content Management', () => {
  test('should add and manage definitions and examples', async ({ page }) => {
    // 1. Create a concept first
    await page.goto('/dashboard');
    const meaning = `Multilingual Test ${Date.now()}`;
    await page.getByTestId('concept-meaning-input').fill(meaning);
    await page.getByTestId('create-concept-button').click();
    
    // Wait for redirection to detail page
    await page.waitForURL(/\/(vi|en|ja)\/dashboard\/concept\/.+/);

    // 2. Add a definition
    await page.getByTestId('add-definition-button').click();
    await page.getByTestId('definition-input').fill('This is a test definition');
    await page.getByTestId('save-definition-button').click();
    
    // Verify visibility
    await expect(page.locator('text=This is a test definition')).toBeVisible();

    // 3. Add an example
    await page.getByTestId('add-example-button').click();
    await page.getByTestId('example-input').fill('This is a test example');
    await page.getByTestId('save-example-button').click();
    
    // Verify visibility (usually displayed in quotes)
    await expect(page.locator('text="This is a test example"')).toBeVisible();

    // 4. Verify they persist on reload
    await page.reload();
    await expect(page.locator('text=This is a test definition')).toBeVisible();
    await expect(page.locator('text="This is a test example"')).toBeVisible();
  });
});

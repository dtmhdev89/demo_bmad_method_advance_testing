import { Page, expect } from '@playwright/test';

/**
 * Registers a new user and logs them in.
 * Returns the credentials used.
 */
export async function registerAndLogin(page: Page) {
  const email = `test-user-${Date.now()}-${Math.floor(Math.random() * 1000)}@example.com`;
  const password = 'Password123!';
  
  // Go to registration page
  await page.goto('/register');
  
  // Fill in registration details
  await page.fill('#email', email);
  await page.fill('#password', password);
  
  // Select English as a target language
  await page.click('#lang-en');
  
  // Submit the form
  await page.click('#register-submit');
  
  // Should be redirected to dashboard
  await expect(page).toHaveURL(/\/(vi|en|ja)\/dashboard/, { timeout: 15000 });
  
  return { email, password };
}

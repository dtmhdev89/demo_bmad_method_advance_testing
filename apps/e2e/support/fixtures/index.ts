import { test as base } from '@playwright/test';

// Define custom fixtures here
type MyFixtures = {
  // Add custom fixtures types
};

export const test = base.extend<MyFixtures>({
  // Implement custom fixtures
});

export { expect } from '@playwright/test';

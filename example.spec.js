const { test, expect } = require('@playwright/test');

test('Google Title Test', async ({ page }) => {
  await page.goto('https://google.com');
  await expect(page).toHaveTitle(/Google/);
});
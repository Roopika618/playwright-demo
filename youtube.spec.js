import { test, expect } from '@playwright/test';

test('YouTube Search Test', async ({ page }) => {

  await page.goto('https://www.youtube.com/');

  // Wait for search box
  const searchBox = page.locator('input[placeholder="Search"]');
  await searchBox.waitFor();

  // Type search text
  await searchBox.fill('Playwright tutorial');

  // Press enter
  await page.keyboard.press('Enter');

  // Wait for results
  await expect(page).toHaveURL(/results/);
});
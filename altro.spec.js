import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://altoro.testfire.net/');
  await page.getByRole('link', { name: 'Sign In' }).click();
  await page.locator('#uid').click();
    await page.locator('#uid').fill('admin');
  await page.locator('#passw').click();
  await page.locator('#passw').fill('admin');
  await page.getByRole('button', { name: 'Login' }).click();
});
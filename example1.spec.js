import { test, expect } from '@playwright/test';

test('flipkart', async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    const searchBox = page.locator('input[placeholder="Search for Products, Brands and More"]');
    await searchBox.waitFor();
    await searchBox.fill("watch");
    page.click('button', { name: 'Search for Products, Brands' });
    await page.waitForTimeout(2000); 
    const dfg = page.locator('button', { name: 'GO TO CART' });
    await dfg.waitFor();
    await dfg.click();
    await page.waitForTimeout(2000);
    page.close();

})
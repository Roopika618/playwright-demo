const { test, expect } = require('@playwright/test');

test('OrangeHRM Login Test', async ({ page }) => {
    await page.goto("https://www.amazon.in/");
    await page.fill('input#twotabsearchtextbox', 'laptop');
    await page.click('input#nav-search-submit-button');
    await page.waitForTimeout(2000);
    await page.close(); 

});
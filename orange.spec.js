const { test ,expect} = require('@playwright/test');

const { LoginPage } = require('./LoginPage');

test('Login Test', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await loginPage.login('Admin', 'admin123');

  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  await page.screenshot({
  path: 'dashboard.png',
  fullPage: true
});

});
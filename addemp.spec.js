const { test } = require('@playwright/test');

const { LoginPage } = require('./LoginPage');

const { DashboardPage } = require('./Dashboard');

const { PIMPage } = require('./PIMPage');

const { perfor } = require('./perfor');

test('Add Employee Test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    const dashboardPage = new DashboardPage(page);

    const pimPage = new PIMPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com');

    await loginPage.login('Admin', 'admin123');

    await dashboardPage.verifyDashboard();

    await pimPage.addEmployee('Roopika', 'K');

});
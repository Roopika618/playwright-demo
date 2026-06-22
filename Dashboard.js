const{expect}=require('@Playwright/test');
class DashboardPage {

    constructor(page) {
        this.page = page;
        this.dashboard = page.getByRole('heading', { name: 'Dashboard' });
    }

    async verifyDashboard() {
        await expect(this.dashboard).toBeVisible();
    }
}

module.exports = { DashboardPage };
class PIMPage {

    constructor(page) {
        this.page = page;

        this.pimMenu = page.getByRole('link', { name: 'PIM' });

        this.addButton = page.getByRole('button', { name: 'Add' });

        this.firstName = page.locator('input[name="firstName"]');

        this.lastName = page.locator('input[name="lastName"]');

        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async addEmployee(fname, lname) {

        await this.pimMenu.click();

        await this.addButton.click();

        await this.firstName.fill(fname);

        await this.lastName.fill(lname);

        await this.saveButton.click();
    }
}

module.exports = { PIMPage };
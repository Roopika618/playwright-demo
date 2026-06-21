class LoginPage {
  constructor(page) {
    this.page = page;

    this.username = page.locator('[name="username"]');
    this.password = page.locator('[name="password"]');
    this.loginBtn = page.getByRole('button', { name: 'Login' });
  }

  async login(user, pass) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginBtn.click();
  }
}

module.exports = { LoginPage };
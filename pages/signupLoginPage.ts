import { Locator, Page } from "@playwright/test";

export class SignupLoginPage {
  readonly nameField: Locator;
  readonly signupEmailField: Locator;
  readonly signupButton: Locator;
  readonly loginEmailField: Locator;
  readonly loginPasswordField: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.nameField = page.locator('[data-qa="signup-name"]');
    this.signupEmailField = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.loginEmailField = page.locator('[data-qa="login-email"]');
    this.loginPasswordField = page.locator('[data-qa="login-password"]');
    this.loginButton = page.locator('[data-qa="login-button"]');
  }

  async populateSignupForm(name: string, email: string) {
    await this.nameField.fill(name);
    await this.signupEmailField.fill(email);
    await this.signupButton.click();
  }
}

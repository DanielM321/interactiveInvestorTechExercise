import { Locator, Page } from "@playwright/test";

/**
 * This class is the page object model for the signup/login page which appears after a user clicks on the "Signup / Login" button in the navigation bar
 */
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

  /**
   * Populate the signup form with the name and email provided and click the signup button
   * @param name the name to enter into the name field
   * @param email the email address to enter into the email field
   */
  async populateSignupForm(name: string, email: string) {
    await this.nameField.fill(name);
    await this.signupEmailField.fill(email);
    await this.signupButton.click();
  }

  /**
   * Populate the login form with the email and password provided and click the login button
   * @param email the email address to enter into the email field
   * @param password the password to enter into the password field
   */
  async populateLoginForm(email: string, password: string) {
    await this.loginEmailField.fill(email);
    await this.loginPasswordField.fill(password);
    await this.loginButton.click();
  }
}

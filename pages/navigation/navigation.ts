import { Locator, Page } from "@playwright/test";

/**
 * This class is the page object model for the navigation menu at the top of the page which is visible from all other pages
 */
export class Navigation {
  readonly productsLink: Locator;
  readonly signupLoginLink: Locator;
  readonly logoutLink: Locator;
  readonly cookieConsentButton: Locator;

  constructor(page: Page) {
    this.productsLink = page.locator('[href="/products"]');
    this.signupLoginLink = page.locator('[href="/login"]');
    this.logoutLink = page.locator('[href="/logout"]');
    this.cookieConsentButton = page.getByRole("button", { name: "Consent" });
  }

  /**
   * Click the consent button on the cookie consent banner if it is visible on the page
   */
  async acceptCookies() {
    if (await this.cookieConsentButton.isVisible()) {
      await this.cookieConsentButton.click();
    }
  }
}

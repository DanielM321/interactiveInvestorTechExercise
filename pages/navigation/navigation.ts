import { Locator, Page } from "@playwright/test";

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

  async acceptCookies() {
    if (await this.cookieConsentButton.isVisible()) {
      await this.cookieConsentButton.click();
    }
  }
}

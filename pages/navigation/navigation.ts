import { Locator, Page } from "@playwright/test";

export class Navigation {
  readonly signupLoginLink: Locator;
  readonly cookieConsentButton: Locator;

  constructor(page: Page) {
    this.signupLoginLink = page.locator('[href="/login"]');
    this.cookieConsentButton = page.getByRole("button", { name: "Consent" });
  }

  async acceptCookies() {
    if (await this.cookieConsentButton.isVisible()) {
      await this.cookieConsentButton.click();
    }
  }
}

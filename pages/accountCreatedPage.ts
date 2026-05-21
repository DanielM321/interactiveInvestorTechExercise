import { Locator, Page } from "@playwright/test";

export class AccountCreatedPage {
  readonly heading: Locator;
  readonly body: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.heading = page.locator('[data-qa="account-created"]');
    this.body = page.locator("body");
    this.continueButton = page.locator('[data-qa="continue-button"]');
  }
}

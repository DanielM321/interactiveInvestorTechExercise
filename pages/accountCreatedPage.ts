import { Locator, Page } from "@playwright/test";

/** This is the page object model for the confirmation page that appears after a user successfully creates an account */
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

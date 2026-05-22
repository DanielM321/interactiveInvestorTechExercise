import { Locator, Page } from "@playwright/test";

export class OrderConfirmationPage {
  readonly heading: Locator;
  readonly body;
  readonly downloadInvoiceButton: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    this.heading = page.locator('[data-qa="order-placed"]');
    this.body = page.locator("body");
    this.downloadInvoiceButton = page.getByRole("button", {
      name: "Download Invoice",
    });
    this.continueButton = page.locator('[data-qa="continue-button"]');
  }
}

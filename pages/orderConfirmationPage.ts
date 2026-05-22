import { Locator, Page } from "@playwright/test";

/**
 * This class is the page object model for the order confirmation page which appears after a user successfully places an order after proceeding from the payment page
 */
export class OrderConfirmationPage {
  readonly heading: Locator;
  readonly body: Locator;
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

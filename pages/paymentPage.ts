import { Locator, Page } from "@playwright/test";

type cardDetails = {
  nameOnCard: string;
  cardNumber: string;
  cvc: string;
  expiryMonth: string;
  expiryYear: string;
};

export class PaymentPage {
  readonly nameOnCardField: Locator;
  readonly cardNumberField: Locator;
  readonly cvcField: Locator;
  readonly expiryMonthField: Locator;
  readonly expiryYearField: Locator;
  readonly payAndConfirmOrderButton: Locator;

  constructor(page: Page) {
    this.nameOnCardField = page.locator('[data-qa="name-on-card"]');
    this.cardNumberField = page.locator('[data-qa="card-number"]');
    this.cvcField = page.locator('[data-qa="cvc"]');
    this.expiryMonthField = page.locator('[data-qa="expiry-month"]');
    this.expiryYearField = page.locator('[data-qa="expiry-year"]');
    this.payAndConfirmOrderButton = page.getByTestId("submit");
  }

  async submitPaymentDetails(cardDetails: cardDetails) {
    await this.nameOnCardField.fill(cardDetails.nameOnCard);
    await this.cardNumberField.fill(cardDetails.cardNumber);
    await this.cvcField.fill(cardDetails.cvc);
    await this.expiryMonthField.fill(cardDetails.expiryMonth);
    await this.expiryYearField.fill(cardDetails.expiryYear);
    await this.payAndConfirmOrderButton.click();
  }
}

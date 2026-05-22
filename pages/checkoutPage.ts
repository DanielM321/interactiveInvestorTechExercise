import { Locator, Page } from "@playwright/test";
import { CartTable } from "./tables/cartTable";

/**
 * This class is the page object model for the checkout page which appears after a user clicks the "Proceed To Checkout" button from the cart page.
 */
export class CheckoutPage {
  readonly deliveryAddress: Locator;
  readonly invoiceAddress: Locator;
  readonly cartTable: CartTable;
  readonly placeOrderButton: Locator;

  constructor(page: Page) {
    this.deliveryAddress = page.getByTestId("address_delivery");
    this.invoiceAddress = page.getByTestId("address_invoice");
    this.cartTable = new CartTable(page);
    this.placeOrderButton = page.locator('[href="/payment"]');
  }

  async getAddressDetails(addressLocator: Locator): Promise<string> {
    return await addressLocator.innerText();
  }
}

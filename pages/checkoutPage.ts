import { Locator, Page } from "@playwright/test";
import { CartTable } from "./tables/cartTable";

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

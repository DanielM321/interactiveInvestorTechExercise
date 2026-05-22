import { Locator, Page } from "@playwright/test";
import { CartTable } from "./tables/cartTable";

type CartItem = {
  description: string;
  price: string;
  quantity: string;
  total: string;
};

export class CartPage {
  readonly cartTable: CartTable;
  readonly proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.cartTable = new CartTable(page);
    this.proceedToCheckoutButton = page.getByText("Proceed To Checkout");
  }
}

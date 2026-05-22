import { Locator, Page } from "@playwright/test";
import { CartTable } from "./tables/cartTable";

type CartItem = {
  description: string;
  price: string;
  quantity: string;
  total: string;
};

/**
 * This class is the page object model for the cart page which appears after a user clicks the "View Cart" button from the cart modal. The cart page contains a table of products that have been added to the cart and a button to proceed to checkout
 */
export class CartPage {
  readonly cartTable: CartTable;
  readonly proceedToCheckoutButton: Locator;

  constructor(page: Page) {
    this.cartTable = new CartTable(page);
    this.proceedToCheckoutButton = page.getByText("Proceed To Checkout");
  }
}

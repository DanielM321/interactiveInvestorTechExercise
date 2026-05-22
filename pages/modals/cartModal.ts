import { Locator, Page } from "@playwright/test";

/**
 * This class represents the page object model for the cart modal which appears in a few places in the application
 */
export class CartModal {
  readonly cartModal: Locator;
  readonly viewCartButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    this.cartModal = page.getByTestId("cartModal");
    this.viewCartButton = this.cartModal.locator('[href="/view_cart"]');
    this.continueShoppingButton = this.cartModal.getByRole("button", {
      name: "Continue Shopping",
    });
  }
}

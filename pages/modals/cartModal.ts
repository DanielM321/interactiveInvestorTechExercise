import { Locator, Page } from "@playwright/test";

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

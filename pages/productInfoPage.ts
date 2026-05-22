import { Locator, Page } from "@playwright/test";
import { CartModal } from "./modals/cartModal";

export class ProductInfoPage {
  readonly quantityField: Locator;
  readonly addtoCartButton: Locator;
  readonly addedToCartModal: CartModal;

  constructor(page: Page) {
    this.quantityField = page.getByTestId("quantity");
    this.addtoCartButton = page.getByRole("button", { name: "Add to Cart" });
    this.addedToCartModal = new CartModal(page);
  }

  async addProductToCart(quantity: string) {
    await this.quantityField.fill(quantity);
    await this.addtoCartButton.click();
  }
}

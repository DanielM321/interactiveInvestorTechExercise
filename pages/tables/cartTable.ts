import { Locator, Page } from "@playwright/test";

type CartItem = {
  description: string;
  price: string;
  quantity: string;
  total: string;
};

export class CartTable {
  readonly firstCartItem: Locator;
  readonly firstCartDescription: Locator;
  readonly firstCartItemPrice: Locator;
  readonly firstCartItemQuantity: Locator;
  readonly firstCartItemTotal: Locator;

  constructor(page: Page) {
    this.firstCartItem = page.getByTestId("product-1");
    this.firstCartDescription = this.firstCartItem.locator(
      '[class="cart_description"]',
    );
    this.firstCartItemPrice = this.firstCartItem.locator(
      '[class="cart_price"]',
    );
    this.firstCartItemQuantity = this.firstCartItem.locator(
      '[class="cart_quantity"]',
    );
    this.firstCartItemTotal = this.firstCartItem.locator(
      '[class="cart_total"]',
    );
  }

  async getCartItemDetails(): Promise<CartItem> {
    return {
      description: await this.firstCartDescription.innerText(),
      price: await this.firstCartItemPrice.innerText(),
      quantity: await this.firstCartItemQuantity.innerText(),
      total: await this.firstCartItemTotal.innerText(),
    };
  }

  async calculateTotalForItem(
    price: number,
    quantity: number,
  ): Promise<number> {
    return price * quantity;
  }
}

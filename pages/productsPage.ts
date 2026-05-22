import { Locator, Page } from "@playwright/test";

export class ProductsPage {
  readonly searchProductField: Locator;
  readonly submitSearchButton: Locator;
  readonly viewProductButton: Locator;

  constructor(page: Page) {
    this.searchProductField = page.getByTestId("search_product");
    this.submitSearchButton = page.getByTestId("submit_search");
    this.viewProductButton = page
      .getByRole("link", { name: "View Product" })
      .nth(0);
  }

  async searchForProduct(productName: string) {
    await this.searchProductField.fill(productName);
    await this.submitSearchButton.click();
  }
}

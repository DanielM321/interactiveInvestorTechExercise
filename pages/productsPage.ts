import { Locator, Page } from "@playwright/test";

/**
 * This class is the page object model for the products page which appears after a user clicks on the "Products" button in the navigation bar
 */
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

  /**
   * Enter a product name into the search field and click the submit search button
   * @param productName The product name you want to search for
   */
  async searchForProduct(productName: string) {
    await this.searchProductField.fill(productName);
    await this.submitSearchButton.click();
  }
}

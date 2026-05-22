import { Locator, Page } from "@playwright/test";

/**
 * This is the class for the page object model for the homepage which loads when you first enter the application
 */
export class HomePage {
  readonly page: Page;
  readonly loggedInUser: Locator;
  readonly popupCloseButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loggedInUser = page.getByText("Logged in as");
    this.popupCloseButton = page.getByTestId("dismiss-button-element");
  }

  /**
   * Navigates to the homepage using the URL stored in the environment variable homePage
   */
  async navigateToHomePage() {
    await this.page.goto(process.env.homePage!);
  }
}

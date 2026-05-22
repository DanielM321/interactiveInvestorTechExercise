import { Locator, Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly loggedInUser: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loggedInUser = page.getByText("Logged in as");
  }

  async navigateToHomePage() {
    await this.page.goto(process.env.homePage!);
  }
}

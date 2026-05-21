import { test as base } from "@playwright/test";
import { SignupLoginPage } from "../pages/signupLoginPage";
import { Navigation } from "../pages/navigation/navigation";
import { HomePage } from "../pages/homePage";

export type PageObjectFixtures = {
  readonly navigation: Navigation;
  readonly homePage: HomePage;
  readonly signupLoginPage: SignupLoginPage;
};

export const test = base.extend<PageObjectFixtures>({
  navigation: async ({ page }, use) => {
    const navigation = new Navigation(page);
    await use(navigation);
  },
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  signupLoginPage: async ({ page }, use) => {
    const signupLoginPage = new SignupLoginPage(page);
    await use(signupLoginPage);
  },
});

export { expect } from "@playwright/test";

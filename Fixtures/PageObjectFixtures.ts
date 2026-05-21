import { test as base } from "@playwright/test";
import { SignupLoginPage } from "../pages/signupLoginPage";
import { Navigation } from "../pages/navigation/navigation";
import { HomePage } from "../pages/homePage";
import { AccountInformationPage } from "../pages/accountInformationPage";
import { AccountCreatedPage } from "../pages/accountCreatedPage";

export type PageObjectFixtures = {
  readonly navigation: Navigation;
  readonly homePage: HomePage;
  readonly signupLoginPage: SignupLoginPage;
  readonly accountInformationPage: AccountInformationPage;
  readonly accountCreatedPage: AccountCreatedPage;
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
  accountInformationPage: async ({ page }, use) => {
    const accountInformationPage = new AccountInformationPage(page);
    await use(accountInformationPage);
  },
  accountCreatedPage: async ({ page }, use) => {
    const accountCreatedPage = new AccountCreatedPage(page);
    await use(accountCreatedPage);
  },
});

export { expect } from "@playwright/test";

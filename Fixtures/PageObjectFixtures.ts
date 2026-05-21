import { test as base } from "@playwright/test";
import { SignupLoginPage } from "../pages/signupLoginPage";
import { NavigationMenu } from "../pages/navigation/navigationMenu";

export type PageObjectFixtures = {
  readonly signupLoginPage: SignupLoginPage;
  readonly navigationMenu: NavigationMenu;
};

export const test = base.extend<PageObjectFixtures>({
  navigationMenu: async ({ page }, use) => {
    const navigationMenu = new NavigationMenu(page);
    await use(navigationMenu);
  },
  signupLoginPage: async ({ page }, use) => {
    const signupLoginPage = new SignupLoginPage(page);
    await use(signupLoginPage);
  },
});

export { expect } from "@playwright/test";

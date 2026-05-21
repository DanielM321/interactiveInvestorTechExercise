import { expect, test } from "../Fixtures/PageObjectFixtures";

test("Register New User", async ({ page, navigationMenu }) => {
  await page.goto("https://automationexercise.com/");
  await navigationMenu.acceptCookies();
  await navigationMenu.signupLoginLink.click();
});

import path from "path";
import { expect, test } from "../Fixtures/PageObjectFixtures";

test("Log in", async ({
  page,
  homePage,
  navigation,
  signupLoginPage,
  browserName,
}) => {
  const authFile = path.join(
    __dirname,
    `../playwright/.auth/${browserName}/user.json`,
  );

  await test.step("Given I navigate to Home page", async () => {
    await homePage.navigateToHomePage();
    await navigation.acceptCookies();
  });

  await test.step("When I click the signup/login link and populate", async () => {
    await navigation.signupLoginLink.click();
  });

  await test.step("And I populate the login form", async () => {
    await signupLoginPage.populateLoginForm(
      process.env.userEmail!,
      process.env.password!,
    );
  });

  await test.step("Then I am returned to the home page and I am logged in", async () => {
    await expect(homePage.page).toHaveURL(process.env.homePage!);
    await expect(navigation.logoutLink).toBeVisible();
    await expect(homePage.loggedInUser).toHaveText(
      `Logged in as ${process.env.usersName}`,
    );
  });

  await page.context().storageState({ path: authFile });
});

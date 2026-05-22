import { expect, test } from "../Fixtures/PageObjectFixtures";

test("Login and log out", async ({ homePage, navigation, signupLoginPage }) => {
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

  await test.step("When I click the logout link", async () => {
    await navigation.logoutLink.click();
  });

  await test.step("Then I am logged out and returned to the signup / login page", async () => {
    await expect(homePage.page).toHaveURL(`${process.env.homePage}/login`);
  });
});

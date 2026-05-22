import { expect, test } from "../Fixtures/PageObjectFixtures";

test("Log out", async ({ homePage, navigation }) => {
  await test.step("Given I navigate to Home page", async () => {
    await homePage.navigateToHomePage();
  });

  await test.step("When I click the logout link", async () => {
    await navigation.logoutLink.click();
  });

  await test.step("Then I am logged out and returned to the signup / login page", async () => {
    await expect(homePage.page).toHaveURL(`${process.env.homePage}/login`);
  });
});

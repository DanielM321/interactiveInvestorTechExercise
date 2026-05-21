import { expect, test } from "../Fixtures/PageObjectFixtures";
import { createRandomUser } from "../helpers/createRandomData";

const randomCustomer = createRandomUser();

test("Register New User", async ({ homePage, navigation, signupLoginPage }) => {
  await homePage.navigateToHomePage();
  await navigation.acceptCookies();
  await navigation.signupLoginLink.click();
  await signupLoginPage.populateSignupForm(
    randomCustomer.fullName,
    randomCustomer.email,
  );
});

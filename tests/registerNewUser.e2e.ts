import { expect, test } from "../Fixtures/PageObjectFixtures";
import { createRandomUser } from "../helpers/createRandomData";

const randomUser = createRandomUser();

test("Register New User", async ({
  homePage,
  navigation,
  signupLoginPage,
  accountInformationPage,
  accountCreatedPage,
}) => {
  await test.step("Given I navigate to Signup/Login page", async () => {
    await homePage.navigateToHomePage();
    await navigation.acceptCookies();
  });

  await test.step("When I click the signup/login link and populate", async () => {
    await navigation.signupLoginLink.click();
  });

  await test.step("And I populate the signup form", async () => {
    await signupLoginPage.populateSignupForm(
      `${randomUser.firstName} ${randomUser.lastName}`,
      randomUser.email,
    );
  });

  await test.step("Then I should see the enter account information page with name and emailk pre populated", async () => {
    await expect(accountInformationPage.nameField).toHaveValue(
      `${randomUser.firstName} ${randomUser.lastName}`,
    );
    await expect(accountInformationPage.emailField).toHaveValue(
      randomUser.email,
    );
  });

  await test.step("When I populate the account information form and submit", async () => {
    await accountInformationPage.populateAccountInformationForm({
      gender: randomUser.gender,
      password: randomUser.password,
      dayOfBirth: randomUser.dayOfBirth,
      monthOfBirth: randomUser.monthOfBirth,
      yearOfBirth: randomUser.yearOfBirth,
      signUpForNewsletter: randomUser.signUpForNewsletter,
      receiveSpecialOffers: randomUser.receiveSpecialOffers,
      firstName: randomUser.firstName,
      lastName: randomUser.lastName,
      company: randomUser.company,
      addressLine1: randomUser.addressLine1,
      addressLine2: randomUser.addressLine2,
      country: randomUser.country,
      state: randomUser.state,
      city: randomUser.city,
      zipcode: randomUser.zipcode,
      mobileNumber: randomUser.mobileNumber,
    });
  });

  await test.step("Then the account created page should show", async () => {
    await expect(accountCreatedPage.heading).toBeVisible();
    await expect(accountCreatedPage.heading).toHaveText("Account Created!");
    await expect(accountCreatedPage.body).toContainText(
      "Congratulations! Your new account has been successfully created!",
    );
    await expect(accountCreatedPage.body).toContainText(
      "You can now take advantage of member privileges to enhance your online shopping experience with us.",
    );
  });

  await test.step("When I click the continue button on account created page", async () => {
    await accountCreatedPage.continueButton.click();
  });

  await test.step("Then I am returned to the home page and I am logged in", async () => {
    await expect(homePage.page).toHaveURL("https://automationexercise.com/");
    await expect(navigation.logoutLink).toBeVisible();
    await expect(homePage.loggedInUser).toHaveText(
      `Logged in as ${randomUser.firstName} ${randomUser.lastName}`,
    );
  });
});

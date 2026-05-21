import { expect, test } from "../Fixtures/PageObjectFixtures";
import { createRandomCustomer } from "../helpers/createRandomData";

const randomCustomer = createRandomCustomer();

test("Register New User", async ({
  homePage,
  navigation,
  signupLoginPage,
  accountInformationPage,
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
      `${randomCustomer.firstName} ${randomCustomer.lastName}`,
      randomCustomer.email,
    );
  });

  await test.step("Then I should see the enter account information page with name and emailk pre populated", async () => {
    await expect(accountInformationPage.nameField).toHaveValue(
      `${randomCustomer.firstName} ${randomCustomer.lastName}`,
    );
    await expect(accountInformationPage.emailField).toHaveValue(
      randomCustomer.email,
    );
  });

  await test.step("When I populate the account information form and submit", async () => {
    await accountInformationPage.populateAccountInformationForm({
      gender: randomCustomer.gender,
      password: randomCustomer.password,
      dayOfBirth: randomCustomer.dayOfBirth,
      monthOfBirth: randomCustomer.monthOfBirth,
      yearOfBirth: randomCustomer.yearOfBirth,
      signUpForNewsletter: randomCustomer.signUpForNewsletter,
      receiveSpecialOffers: randomCustomer.receiveSpecialOffers,
      firstName: randomCustomer.firstName,
      lastName: randomCustomer.lastName,
      company: randomCustomer.company,
      addressLine1: randomCustomer.addressLine1,
      addressLine2: randomCustomer.addressLine2,
      country: randomCustomer.country,
      state: randomCustomer.state,
      city: randomCustomer.city,
      zipcode: randomCustomer.zipcode,
      mobileNumber: randomCustomer.mobileNumber,
    });
  });
});

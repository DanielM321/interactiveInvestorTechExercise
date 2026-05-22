import { Locator, Page } from "@playwright/test";

//Define the properties of the account information form that we want to populate
type AccountInformation = {
  gender: string;
  password: string;
  dayOfBirth: string;
  monthOfBirth: string;
  yearOfBirth: string;
  signUpForNewsletter: boolean;
  receiveSpecialOffers: boolean;
  firstName: string;
  lastName: string;
  company: string;
  addressLine1: string;
  addressLine2: string;
  country: string;
  state: string;
  city: string;
  zipcode: string;
  mobileNumber: string;
};

/**
 * This is the class to represent the account information form that appear once you chose to register as a new user
 */
export class AccountInformationPage {
  readonly maleRadioBuitton: Locator;
  readonly femaleRadioButton: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly passwordField: Locator;
  readonly dayOfBirthField: Locator;
  readonly monthOfBirthField: Locator;
  readonly yearOfBirthField: Locator;
  readonly newsletterCheckbox: Locator;
  readonly specialOffersCheckbox: Locator;
  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly companyField: Locator;
  readonly addressLine1Field: Locator;
  readonly addressLine2Field: Locator;
  readonly countryField: Locator;
  readonly stateField: Locator;
  readonly cityField: Locator;
  readonly zipcodeField: Locator;
  readonly mobileNumberField: Locator;
  readonly createAccountButton: Locator;

  constructor(page: Page) {
    this.maleRadioBuitton = page.getByTestId("id_gender1");
    this.femaleRadioButton = page.getByTestId("id_gender2");
    this.nameField = page.getByTestId("name");
    this.emailField = page.getByTestId("email");
    this.passwordField = page.getByTestId("password");
    this.dayOfBirthField = page.getByTestId("days");
    this.monthOfBirthField = page.getByTestId("months");
    this.yearOfBirthField = page.getByTestId("years");
    this.newsletterCheckbox = page.getByTestId("newsletter");
    this.specialOffersCheckbox = page.getByTestId("optin");
    this.firstNameField = page.getByTestId("first_name");
    this.lastNameField = page.getByTestId("last_name");
    this.companyField = page.getByTestId("company");
    this.addressLine1Field = page.getByTestId("address1");
    this.addressLine2Field = page.getByTestId("address2");
    this.countryField = page.getByTestId("country");
    this.stateField = page.getByTestId("state");
    this.cityField = page.getByTestId("city");
    this.zipcodeField = page.getByTestId("zipcode");
    this.mobileNumberField = page.getByTestId("mobile_number");
    this.createAccountButton = page.locator('[data-qa="create-account"]');
  }

  /**
   * Populates the account information form with the provided data and clicks the create account button
   * @param accountInfo A JSON object containing all fields that are needed to complete the account information form
   */
  async populateAccountInformationForm(accountInfo: AccountInformation) {
    if (accountInfo.gender === "male") {
      await this.maleRadioBuitton.check();
    } else {
      await this.femaleRadioButton.check();
    }
    await this.passwordField.fill(accountInfo.password);
    await this.dayOfBirthField.selectOption(accountInfo.dayOfBirth);
    await this.monthOfBirthField.selectOption(accountInfo.monthOfBirth);
    await this.yearOfBirthField.selectOption(accountInfo.yearOfBirth);
    if (accountInfo.signUpForNewsletter) {
      await this.newsletterCheckbox.check();
    }
    if (accountInfo.receiveSpecialOffers) {
      await this.specialOffersCheckbox.check();
    }
    await this.firstNameField.fill(accountInfo.firstName);
    await this.lastNameField.fill(accountInfo.lastName);
    await this.companyField.fill(accountInfo.company);
    await this.addressLine1Field.fill(accountInfo.addressLine1);
    await this.addressLine2Field.fill(accountInfo.addressLine2);
    await this.countryField.selectOption(accountInfo.country);
    await this.stateField.fill(accountInfo.state);
    await this.cityField.fill(accountInfo.city);
    await this.zipcodeField.fill(accountInfo.zipcode);
    await this.mobileNumberField.fill(accountInfo.mobileNumber);
    await this.createAccountButton.click();
  }
}

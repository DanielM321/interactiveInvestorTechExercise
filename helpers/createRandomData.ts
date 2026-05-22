import { faker } from "@faker-js/faker";
import { format } from "date-fns";

/**
 * Using the faker library we generate a random user than can be used to populate the registration form when registering a new user
 */
export function createRandomUser() {
  const currentDateAndTime = format(new Date(), "yyyyMMddHHmmss");
  //Only a limited subset of Countries in the Country drop down within the application
  const countries: string[] = [
    "India",
    "United States",
    "Canada",
    "Australia",
    "Israel",
    "New Zealand",
    "Singapore",
  ];
  return {
    gender: faker.person.gender(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `test${currentDateAndTime}@test.com`,
    password: faker.internet.password(),
    dayOfBirth: faker.date
      .birthdate({ min: 18, max: 80, mode: "age" })
      .getDate()
      .toString(),
    monthOfBirth: faker.date
      .birthdate({ min: 18, max: 80, mode: "age" })
      .getMonth()
      .toString(),
    yearOfBirth: faker.date
      .birthdate({ min: 18, max: 80, mode: "age" })
      .getFullYear()
      .toString(),
    signUpForNewsletter: faker.datatype.boolean(),
    receiveSpecialOffers: faker.datatype.boolean(),
    company: faker.company.name(),
    addressLine1: faker.location.streetAddress(),
    addressLine2: faker.location.secondaryAddress(),
    //Select a random country from the array of countries
    country: countries[Math.floor(Math.random() * countries.length)],
    state: faker.location.state(),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    mobileNumber: faker.phone.number(),
  };
}

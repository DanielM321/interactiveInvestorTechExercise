import { faker } from "@faker-js/faker";
import { format } from "date-fns";

export function createRandomUser() {
  const currentDateAndTime = format(new Date(), "yyyyMMddHHmmss");
  return {
    fullName: `${faker.person.firstName()} ${faker.person.lastName()}`,
    email: `test${currentDateAndTime}@test.com`,
  };
}

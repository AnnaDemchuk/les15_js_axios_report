import { faker } from '@faker-js/faker';

 export const createUpdateUser = () => ({
  username: faker.internet.username(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
});
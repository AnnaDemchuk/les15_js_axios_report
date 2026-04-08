export const expectedUser = {
  id: expect.any(Number),
  name: expect.any(String),
  username: expect.any(String),
  email: expect.any(String),
  address: {
    street: expect.any(String),
    suite: expect.any(String),
    city: expect.any(String),
    zipcode: expect.any(String),
    geo: {
      lat: expect.any(String),
      lng: expect.any(String),
    },
  },
  phone: expect.any(String),
  website: expect.any(String),
  company: {
    name: expect.any(String),
    catchPhrase: expect.any(String),
    bs: expect.any(String),
  },
};
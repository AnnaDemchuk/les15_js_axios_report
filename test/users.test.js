import {expectedUser} from '../src/utils/expectedUser';
import { createUpdateUser } from '../src/data/userFactory';
import {
  getAllUsers,
  getUsersById,
  createUsers,
  updateUsers,
  deleteUsers,
} from '../src/clients/usersApi';


describe('api users', () => {
  test('Request Get/users is successfull', async () => {
    const response = await getAllUsers();
    expect(response.status).toBe(200);

    expect(response.data.length).toBe(10);
    expect(Array.isArray(response.data)).toBe(true);

    expect(response.data[0]).toMatchObject(expectedUser);
  });

  test('Request Get/users/id is successfull', async () => {
    const response = await getUsersById(1);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('name');
  });

  test('Request Post/users is successfull', async () => {
    const newUser = createUpdateUser();
    const response = await createUsers(newUser);

   expect(response.status).toBe(201);
   expect(response.data).toHaveProperty('username');
   expect(response.data).toHaveProperty('email');
   expect(response.data.username).toBe(newUser.username);
   expect(response.data.email).toBe(newUser.email);
  });

  test('Request PUT/users/id is successfull', async () => {
    const updatedUser = createUpdateUser();
    const response = await updateUsers(1, updatedUser);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('username');
    expect(response.data).toHaveProperty('email');
    expect(response.data.username).toBe(updatedUser.username);
    expect(response.data.email).toBe(updatedUser.email);
    expect(response.data.email).toBe(updatedUser.email);
  });

  test('Request Delete/users/id is successfull', async () => {
    const response = await deleteUsers(1);
    expect(response.status).toBe(200);
  });
});

import { expect, jest } from '@jest/globals';

const mockCarId = jest.fn();

jest.unstable_mockModule('axios', () => ({
  default: {
    get: mockCarId
  }
}));

const { getCarById } = await import('../src/clients/carsApi.js');

test('should return 200 response get car/id', async () => {
  mockCarId.mockResolvedValue({
    status: 200,
    data: { id: 1, model: 'Car 1' }
  });

  const car = await getCarById(1);

  expect(car.status).toBe(200);
  expect(car.data.id).toBe(1);
  expect(car.data.model).toBe('Car 1');

  //console.log('Response:', car);
});

test('should return 404 when car is not found', async () => {
  mockCarId.mockRejectedValue({
    response: {
      status: 404,
      data: { message: 'Car not found' }
    }
  });

  try {
    await getCarById(1000000);

  } catch (error) {
    expect(error.response.status).toBe(404);
    expect(error.response.data.message).toBe('Car not found');
   // console.log('Error Response:', error.response.status, error.response.data);
  }

});

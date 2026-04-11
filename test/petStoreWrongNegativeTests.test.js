import axios from "axios";

describe('api petstore negative tests', () => {

test('Request Get/pet/id with incorrect URL', async () => {
  try {
    await axios.get('https://petstore.swagger.io/v2/pet12345/5');
  } catch (error) {
    expect(error.response.status).toBe(404);
    expect(error.response.data.message).toContain("null for uri");

  //  console.log("status:", error.response.status);
 // console.log("data:", error.response.data);
  }
});

test('Request Get/pet/id with incorrect Id', async () => {
  try {
    await axios.get('https://petstore.swagger.io/v2/pet/5000000');
  } catch (error) {
    expect(error.response.status).toBe(404);
    expect(error.response.data.message).toBe("Pet not found");
    expect(error.response.data.type).toBe("error");

  //  console.log("status:", error.response.status);
  //  console.log("data:", error.response.data);
  }
});
});
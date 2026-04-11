import axios from 'axios';

export const getCarById = async (id) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/car/${id}`);
  return response;
};
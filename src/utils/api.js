import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://661d2b76e7b95ad7fa6c61e2.mockapi.io',
});

export const fetchCars = async () => {
  const { data } = await instance.get(`/campers`);

  return data;
};

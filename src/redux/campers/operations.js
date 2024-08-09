import axios from 'axios';
import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://661d2b76e7b95ad7fa6c61e2.mockapi.io';

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/campers');

    return response.data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

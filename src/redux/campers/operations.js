import toast from 'react-hot-toast';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars } from '../../utils/api';

export const fetchCampers = createAsyncThunk('campers/fetchAll', async (_, thunkAPI) => {
  try {
    const data = await fetchCars();

    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

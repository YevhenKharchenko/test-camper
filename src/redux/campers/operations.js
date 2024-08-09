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

export const fetchMoreCampers = createAsyncThunk('campers/fetchMore', async (page, thunkAPI) => {
  try {
    const data = await fetchCars(page);

    if (!data.length) {
      toast.error('There are no more campers to load.');
    }
    return data;
  } catch (e) {
    toast.error(
      `Oops! Something went wrong. Please try again later or contact support if the issue persists. Error details: ${e.message}`
    );
    return thunkAPI.rejectWithValue(e.message);
  }
});

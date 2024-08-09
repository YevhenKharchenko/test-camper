import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './operations';

const handlePending = state => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    favorite: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const isFavorite = state.favorite.find(el => el._id === action.payload._id);

      if (isFavorite) {
        state.favorite = state.favorite.filter(el => el._id !== action.payload._id);
      } else {
        state.favorite.push(action.payload);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchCampers.rejected, handleRejected);
  },
});

export const { toggleFavorite } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;

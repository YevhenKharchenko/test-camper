import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers, fetchMoreCampers } from './operations';

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
    page: 2,
    loading: false,
    error: null,
    filters: {
      location: '',
      details: {
        airConditioner: false,
        kitchen: false,
        TV: false,
        shower: false,
      },
      form: '',
      transmission: '',
    },
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
    resetPage: state => {
      state.page = 2;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
    resetFilters: state => {
      state.filters = {
        location: '',
        details: {
          airConditioner: false,
          kitchen: false,
          TV: false,
          shower: false,
        },
        form: '',
        transmission: '',
      };
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
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchMoreCampers.pending, handlePending)
      .addCase(fetchMoreCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = [...state.items, ...action.payload];
        if (action.payload.length < 4) {
          state.page = 'lastPage';
        } else {
          state.page = state.page + 1;
        }
      })
      .addCase(fetchMoreCampers.rejected, handleRejected);
  },
});

export const { toggleFavorite, resetPage, setFilters, resetFilters } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;

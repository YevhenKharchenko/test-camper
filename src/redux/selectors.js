import { createSelector } from '@reduxjs/toolkit';

export const selectCampers = state => state.campers.items;

export const selectFavorite = state => state.campers.favorite;

export const selectIsFavorite = item => state =>
  state.campers.favorite.some(el => el._id === item._id);

export const selectLoading = state => state.campers.loading;

export const selectError = state => state.campers.error;

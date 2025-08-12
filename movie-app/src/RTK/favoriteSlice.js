import { createSlice } from "@reduxjs/toolkit"
import { addFavoriteToSupabase, loadFavoritesFromSupabase, removeFavoriteFromSupabase } from "./favoriteThunks";

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(addFavoriteToSupabase.fulfilled, (state, action) => {
      })
      .addCase(removeFavoriteFromSupabase.fulfilled, (state, action) => {
        const id = action.payload;
        return state.filter((movie) => movie.id !== id);
      })
      .addCase(loadFavoritesFromSupabase.fulfilled, (state, action) => {
        return action.payload
      });
  }
});

export const { setFavorites } = favoriteSlice.actions;
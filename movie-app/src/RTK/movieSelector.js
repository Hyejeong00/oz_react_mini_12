import { createSelector } from "@reduxjs/toolkit";

const selectPopularMovies = state => state.movie.popular?.data || [];

export const selectTop3PopularMovies = createSelector(
    [selectPopularMovies],
    (popularMovies) => popularMovies.slice(0, 3)
);

export const selectFavoriteMovie = createSelector(
  state => state.detail.movie,
  state => state.favorite,
  (detail, favorite) => {
    return state.favorite.includes(movieId);
  }
)
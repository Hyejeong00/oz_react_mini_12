import { createSelector } from "@reduxjs/toolkit";

const selectPopularMovies = state => state.movie.popular?.data || [];

export const selectTop3PopularMovies = createSelector(
    [selectPopularMovies],
    (popularMovies) => popularMovies.slice(0, 3)
);

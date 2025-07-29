import { createSelector } from "@reduxjs/toolkit";

export const selectMovieById = (movieId,type) => createSelector(
    [
        (state) => type === 'search'
            ? state.search?.data || []
            : state.movie[type]?.data || [],
    ],
    (movies) => movies.find(movie => movie.id === movieId)
)

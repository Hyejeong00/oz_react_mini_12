import { createSelector } from "@reduxjs/toolkit";

export const selectMovieById = (movieId,type) => createSelector(
    state => state.movie[type]?.data || [],
    (movie) => movie.find(el => el.id === movieId)
)

export const selectMovieByRegExp = (reg) => createSelector(
    state => state.movie.data,
    (movie) => movie.filter(el => el.name.match(reg))
)
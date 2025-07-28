import { createSelector } from "@reduxjs/toolkit";

export const selectGenreById = (genreIds) => createSelector(
    state => state.genre.data,
    (genres) => genreIds
        .map((id) => genres.find(genre => genre.id === id)?.name)
        .filter(Boolean) // 존재하지 않는 ID는 제거
)

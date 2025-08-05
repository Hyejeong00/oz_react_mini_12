import { createSlice } from "@reduxjs/toolkit";
import { fetchMovieDetail } from "./detailThunk";

export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
        movie: null,
        loading: false,
        error: null,
    },
    reducers: {
        clearMovieDetail: (state) => {
        state.movie = null;
        state.loading = false;
        state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchMovieDetail.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchMovieDetail.fulfilled, (state, action) => {
            state.loading = false;
            state.movie = action.payload;
        })
        .addCase(fetchMovieDetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { clearMovieDetail } = detailSlice.actions;
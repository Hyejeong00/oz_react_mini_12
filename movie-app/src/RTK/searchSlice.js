import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchMovies } from "./searchThunk";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {
        clearResults: (state) => {
        state.data = [];
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchSearchMovies.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchSearchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        })
        .addCase(fetchSearchMovies.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});
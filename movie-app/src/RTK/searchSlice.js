import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchMovies } from "./searchThunk";

const initialState = {
    data: [],
    loading: false,
    error: null
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        clearResults: () => initialState // ✅ 상태 초기화
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
        })
    },
});

export const { clearResults } = searchSlice.actions;
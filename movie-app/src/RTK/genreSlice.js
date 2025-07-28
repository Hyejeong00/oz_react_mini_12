import { createSlice } from "@reduxjs/toolkit";
import { fetchGenres } from "./genreThunk";

export const genreSlice = createSlice({
    name: "genre",
    initialState: {
        data: [],
        loading: true,
    },
    extraReducers: (builder) => { // 비동기적 상태 변경
        builder
            .addCase(fetchGenres.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchGenres.fulfilled, (state, action) => {
                state.loading = false
                state.data = action.payload
            })
            .addCase(fetchGenres.rejected, (state) => {
                state.loading = false
            })
    }
})
import { createSlice } from "@reduxjs/toolkit";
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpComingMovies } from "./movieThunks";

const initialState = {
    popular: {
        data: [],
        loading: false,
        error: null,
    },
    nowPlaying: {
        data: [],
        loading: false,
        error: null,
    },
    upComing: {
        data: [],
        loading: false,
        error: null,
    },
    topRated: {
        data: [],
        loading: false,
        error: null,
    }
};

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    extraReducers: (builder) => { // 비동기적 상태 변경
        builder
            // 인기 영화
            .addCase(fetchPopularMovies.pending, (state) => {
                state.popular.loading = true
            })
            .addCase(fetchPopularMovies.fulfilled, (state, action) => {
                state.popular.loading = false
                state.popular.data = action.payload
            })
            .addCase(fetchPopularMovies.rejected, (state) => {
                state.popular.loading = false
                state.error = action.error.message;
            })
            // 현재 상영중인 영화
            .addCase(fetchNowPlayingMovies.pending, (state) => {
                state.nowPlaying.loading = true
            })
            .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
                state.nowPlaying.loading = false
                state.nowPlaying.data = action.payload
            })
            .addCase(fetchNowPlayingMovies.rejected, (state) => {
                state.nowPlaying.loading = false
                state.error = action.error.message;
            })
            // 상영 예정 영화
            .addCase(fetchUpComingMovies.pending, (state) => {
                state.upComing.loading = true
            })
            .addCase(fetchUpComingMovies.fulfilled, (state, action) => {
                state.upComing.loading = false
                state.upComing.data = action.payload
            })
            .addCase(fetchUpComingMovies.rejected, (state) => {
                state.upComing.loading = false
                state.error = action.error.message;
            })
            // 최고 평점 영화
            .addCase(fetchTopRatedMovies.pending, (state) => {
                state.topRated.loading = true
            })
            .addCase(fetchTopRatedMovies.fulfilled, (state, action) => {
                state.topRated.loading = false
                state.topRated.data = action.payload
            })
            .addCase(fetchTopRatedMovies.rejected, (state) => {
                state.topRated.loading = false
                state.error = action.error.message;
            })
    }
})
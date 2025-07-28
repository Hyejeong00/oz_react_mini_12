import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovies } from "../../api/movieAPI";

const token = import.meta.env.VITE_TMDB_API_TOKEN;

// 인기 영화
export const fetchPopularMovies = createAsyncThunk(
    'movies/fetchPopularMovies',
    async (_, thunkAPI) => {
        try {
            const endpoint = `/movie/popular?language=ko-KR&region=KR`;
            return await fetchMovies(endpoint, token);
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

// 현재 상영중인 영화
export const fetchNowPlayingMovies = createAsyncThunk(
    'movies/fetchNowPlayingMovies',
    async (_, thunkAPI) => {
        try {
            const endpoint = `/movie/now_playing?language=ko-KR&region=KR`;
            return await fetchMovies(endpoint, token);
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

// 상영 예정 영화
export const fetchUpComingMovies = createAsyncThunk(
    'movies/fetchUpComingMovies',
    async (_, thunkAPI) => {
        try {
            const endpoint = `/movie/upcoming?language=ko-KR&region=KR`;
            return await fetchMovies(endpoint, token);
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

// 최고 평점 영화
export const fetchTopRatedMovies = createAsyncThunk(
    'movies/fetchTopRatedMovies',
    async (_, thunkAPI) => {
        try {
            const endpoint = `/movie/top_rated?language=ko-KR&region=KR`;
            return await fetchMovies(endpoint, token);
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);
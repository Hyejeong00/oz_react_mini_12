import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 영화 상세 정보 요청 Thunk
export const fetchMovieDetail = createAsyncThunk(
    'movieDetail/fetchMovieDetail',
    async (movieId, thunkAPI) => {
        try {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
            {
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
            },
            }
        );
        const data = await response.json();
        return data;
        } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
        }
    }
);

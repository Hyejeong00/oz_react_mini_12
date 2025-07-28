import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchGenres = createAsyncThunk(
    'genre/fetchGenres',
    async (_, thunkAPI) => {
        try {
            const response = await fetch(`${BASE_URL}/genre/movie/list?language=ko-KR`, {
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
                }
            });

            if (!response.ok) {
                throw new Error('장르 API 응답 오류');
            }

            const data = await response.json();
            return data.genres
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);


// store/searchSlice.js
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearchMovies = createAsyncThunk(
    'search/fetchSearchMovies',
    async (query, thunkAPI) => {
        try{
            const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?query=${query}&language=ko-KR`,
            {
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
                },
            }
            );
            const data = await response.json();
            return data.results.filter((movie) => !movie.adult);
        } catch (err){
            return thunkAPI.rejectWithValue(err.message)
        }
    }
);

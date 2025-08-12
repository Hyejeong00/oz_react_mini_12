import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchSearchMovies = createAsyncThunk(
  'search/fetchSearchMovies',
  async (query, thunkAPI) => {
    try {
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
      const filteredResults = data.results.filter((movie) => !movie.adult);

      return {
        results: filteredResults,
        totalResults: data.total_results,
        totalPages: data.total_pages,
      };
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);


export const fetchMoreSearchMovies = createAsyncThunk(
    'search/fetchMore',
    async ({ query, page }, thunkAPI) => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=ko-KR&page=${page}`, 
            {
                headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
                },
            });
            const data = await response.json();
            return {
                results: data.results.filter((movie) => !movie.adult),
                page: data.page,
                totalPages: data.total_pages,
            };
        }catch(err){
            return thunkAPI.rejectWithValue(err.message)
        }
    }
);
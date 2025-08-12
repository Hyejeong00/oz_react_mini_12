import { createAsyncThunk } from '@reduxjs/toolkit';
import { supabase } from '../../supabase/client';

export const addFavoriteToSupabase = createAsyncThunk(
  'favorite/addFavoriteToSupabase',
  async ({ userId, movie }, thunkAPI) => {
    const { error } = await supabase
      .from('favorites')
      .insert({
        user_id: userId,
        movie_id: movie.id,
        movie_data: movie
      });

    if (error) return thunkAPI.rejectWithValue(error.message);
    return movie;
  }
);

export const removeFavoriteFromSupabase = createAsyncThunk(
  'favorite/removeFavoriteFromSupabase',
  async ({ userId, movieId }, thunkAPI) => {
    const { error } = await supabase
      .from('favorites')
      .delete()
      .eq('user_id', userId)
      .eq('movie_id', movieId);

    if (error) return thunkAPI.rejectWithValue(error.message);
    return movieId;
  }
);

      // 북마크리스트 가져오기
export const loadFavoritesFromSupabase = createAsyncThunk(
  'favorite/loadFavoritesFromSupabase',
  async (userId, thunkAPI) => {
      const { data, error } = await supabase
        .from('favorites')
        .select('movie_data')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
    
      if (error) return thunkAPI.rejectWithValue(error.message);

      const favoriteMovies = data.map((item) => item.movie_data);
      return favoriteMovies
      }
);

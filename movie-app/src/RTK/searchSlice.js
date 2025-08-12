import { createSlice } from "@reduxjs/toolkit";
import { fetchMoreSearchMovies, fetchSearchMovies } from "./searchThunk";

const initialState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  hasMore: true,
  totalResults: 0,
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  extraReducers: (builder) => {
    builder
      // 검색 시작
      .addCase(fetchSearchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      // 검색 성공 → 새 데이터 세팅 + 페이지 초기화
    .addCase(fetchSearchMovies.fulfilled, (state, action) => {
    state.loading = false;
    state.data = action.payload.results;  // results 배열로 할당
    state.page = 1; // 페이지 초기화
    state.hasMore = action.payload.results.length > 0;
    state.totalResults = action.payload.totalResults;
    })

      .addCase(fetchSearchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // ➕ 더 불러오기 (무한 스크롤)
      .addCase(fetchMoreSearchMovies.pending, (state) => {
        state.loading = true;
      })

      .addCase(fetchMoreSearchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [...state.data, ...action.payload.results];
        state.page += 1;
        state.hasMore = action.payload.page < action.payload.totalPages;
      })

      .addCase(fetchMoreSearchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export const { clearResults } = searchSlice.actions;
export default searchSlice.reducer;

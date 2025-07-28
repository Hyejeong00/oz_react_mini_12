import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice";
import { genreSlice } from "./genreSlice";

export const store = configureStore({
    reducer: {
        movie: movieSlice.reducer,
        genre: genreSlice.reducer,
    }
})


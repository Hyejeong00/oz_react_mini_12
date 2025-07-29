import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice";
import { genreSlice } from "./genreSlice";
import { searchSlice } from "./searchSlice";

export const store = configureStore({
    reducer: {
        movie: movieSlice.reducer,
        search: searchSlice.reducer,
        genre: genreSlice.reducer,
    }
})


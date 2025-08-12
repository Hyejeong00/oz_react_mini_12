import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "./movieSlice";
import { searchSlice } from "./searchSlice";
import { userSlice } from "./userSlice";
import { detailSlice } from "./detailSlice";
import { favoriteSlice } from "./favoriteSlice";

export const store = configureStore({
    reducer: {
        movie: movieSlice.reducer,
        search: searchSlice.reducer,
        user: userSlice.reducer,
        detail: detailSlice.reducer,
        favorite: favoriteSlice.reducer,
    }
})


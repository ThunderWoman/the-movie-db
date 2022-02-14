import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "movies.slice";
import genresReducer from "./genres.slice";


const store = configureStore({

    reducer: {
        movies: movieReducer,
        genres: genresReducer
    }
})

export default store;
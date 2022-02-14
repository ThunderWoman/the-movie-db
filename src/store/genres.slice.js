import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../services";

const initialState = {
    movies: [],
    genres: []
}

export const getAllGenres = createAsyncThunk(
    'genresSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            return await movieServices.getGenres();
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

export const getGenreMovies = createAsyncThunk(
    'genresSlice/getGenreMovies',
    async ({id, page}, {rejectWithValue}) => {
        try {
            return await movieServices.getByGenreId(id, page)
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

export const genresSlice = createSlice({
        name: 'genresSlice',
        initialState,
        extraReducers: {
            [getAllGenres.fulfilled]: (state, action) => {
                state.statusGenres = 'fulfilled'
                state.genres = action.payload
            },
            [getAllGenres.rejected]: (state, action) => {
                state.statusGenres = 'rejected'
                state.error = action.payload
            },
            [getGenreMovies.fulfilled]: (state, action) => {
                state.statusMovies = 'fulfilled'
                state.movies = action.payload.movies
                state.total_pages = action.payload.movies.total_pages
            },
            [getGenreMovies.rejected]: (state, action) => {
                state.statusMovies = 'rejected'
                state.error = action.payload
            }
        }
    }
);

const genresReducer = genresSlice.reducer;

export default genresReducer;
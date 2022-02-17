import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieServices} from "../services";

const initialState = {
    movies: [],
    movie: {},
    search: []
}

export const getAllMovies = createAsyncThunk(
    'moviesSlice/getAllMovies',
    async (page, {rejectWithValue}) => {
        try {
            return await movieServices.getAll(page);
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

export const getByIdMovie = createAsyncThunk(
    'moviesSlice/getByIdMovie',
    async (id, {rejectWithValue}) => {
        try {
            return await movieServices.getById(id);
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

export const getBySearch = createAsyncThunk(
    'movies/getBySearch',
    async (title, {rejectWithValue}) => {
        const search = await movieServices.searchByTitle(title);
        return search
    }
)

const movieSlice = createSlice({

    name: 'movies',
    initialState,

    extraReducers: {

        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload
        },
        [getAllMovies.rejected]: (state, action) => {
            state.movies = action.payload
        },
        [getByIdMovie.fulfilled]: (state, action) => {
            state.movie = action.payload
        },
        [getByIdMovie.rejected]: (state, action) => {
            state.movies = action.payload
        },
        [getBySearch.fulfilled]: (state, action) => {
            state.search = action.payload
        },
        [getBySearch.rejected]: (state, action) => {
            state.movies = action.payload
        },
    }
});

const movieReducer = movieSlice.reducer;

export default movieReducer;
import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IMovie, IMovieDetails, IResMovie} from "../../interfaces";
import {genresService, moviesService} from "../../services";

interface IState {
    page: number,
    movies: IMovie[],
    total_pages: number,
    movie: IMovieDetails,
}

const initialState: IState = {
    page: null,
    movies: [],
    total_pages: null,
    movie: null
};

const getAll = createAsyncThunk<IResMovie, { page: string }>(
    'movieSlice/getAll',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getAll(page);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getById = createAsyncThunk<IMovieDetails, { id: string }>(
    'movieSlice/getById',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getById(id);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        }
    }
)

const getByGenre = createAsyncThunk<IResMovie, { page: string, genre: string }>(
    'movieSlice/getByGenre',
    async ({page, genre}, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getMoviesByGenres(page, genre);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getFound = createAsyncThunk<IResMovie, { page: string, word: string }>(
    'movieSlice/getFound',
    async ({page, word}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.searchByWord(page, word);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getById.fulfilled, (state, action) => {
                state.movie = action.payload;
            })
            .addMatcher(isFulfilled(getAll, getByGenre, getFound), (state, action) => {
                const {page, total_pages, results} = action.payload;
                state.movies = results;
                state.page = page;
                state.total_pages = total_pages;
                state.movie = null;
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    getByGenre,
    getFound
};

export {
    movieReducer,
    movieActions
}
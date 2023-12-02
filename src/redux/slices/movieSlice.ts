import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IImage, IImages, IMovie, IMovieDetails, IMovies, IVideo, IVideos} from "../../interfaces";
import {genresService, moviesService} from "../../services";

interface IState {
    page: number,
    movies: IMovie[],
    totalPages: number,
    movie: IMovieDetails,
    images: IImage[],
    videos: IVideo[],
    isLoading: boolean
}

const initialState: IState = {
    page: null,
    movies: [],
    totalPages: null,
    movie: null,
    images: [],
    videos: [],
    isLoading: null
};

const getAll = createAsyncThunk<IMovies, { page: string }>(
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

const getByGenre = createAsyncThunk<IMovies, { page: string, genre: string }>(
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

const getFound = createAsyncThunk<IMovies, { page: string, word: string }>(
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

const getImages = createAsyncThunk<IImages, { id: string }>(
    'movieSlice/getImages',
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await moviesService.getImages(id);
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data);
        }
    }
)

const getVideos = createAsyncThunk<IVideos, { id: string }>(
    'moviesSlice/getVideos',
    async ({id}, {rejectWithValue})=>{
        try {
            const {data} = await moviesService.getVideo(id)
            return data
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
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
                state.isLoading = false;
            })
            .addCase(getImages.fulfilled, (state, action) => {
                state.images = action.payload.backdrops;
                state.isLoading = false;
            })
            .addCase(getVideos.fulfilled, (state, action) => {
                state.videos = action.payload.results;
                state.isLoading = false;
            })
            .addMatcher(isFulfilled(getAll, getByGenre, getFound), (state, action) => {
                const {page, total_pages, results} = action.payload;
                state.movies = results;
                state.page = page;
                state.totalPages = total_pages > 500 ? 500 : total_pages;
                state.movie = null;
                state.isLoading = false;
            })
            .addMatcher(isPending(getAll, getByGenre, getFound, getById, getImages, getVideos), state => {
                state.isLoading = true;
            })
})

const {reducer: movieReducer, actions} = movieSlice;

const movieActions = {
    ...actions,
    getAll,
    getById,
    getByGenre,
    getFound,
    getImages,
    getVideos
};

export {
    movieReducer,
    movieActions
}
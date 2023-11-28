import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IGenres} from "../../interfaces";
import {genresService} from "../../services";

interface IState {
    genres: IGenre[]
}

const initialState: IState = {
    genres: []
};

const getAll = createAsyncThunk<IGenres, void>(
    'genreSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await genresService.getAll();
            return data;
        } catch (e) {
            const error = e as AxiosError;
            return rejectWithValue(error.response?.data)
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres = action.payload.genres;
            })
})

const {reducer: genreReducer, ...actions} = genreSlice;

const genreActions = {
    ...actions,
    getAll
}

export {
    genreReducer,
    genreActions
}
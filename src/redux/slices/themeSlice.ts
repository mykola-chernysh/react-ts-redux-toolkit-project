import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    theme: false
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        changeTheme: state => {
            state.theme = !state.theme
        }
    }
})

const {reducer: themeReducer, actions} = themeSlice;

const themeActions = {
    ...actions
}

export {
    themeReducer,
    themeActions
}
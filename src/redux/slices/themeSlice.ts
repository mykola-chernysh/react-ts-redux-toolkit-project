import {createSlice} from "@reduxjs/toolkit";

interface IState {
    mode: boolean
}

const initialState: IState = {
    mode: JSON.parse(localStorage.getItem('darkMode')) || false
};

const themeSlice = createSlice({
    name: 'themeSlice',
    initialState,
    reducers: {
        toggleDarkMode: state => {
            state.mode = !state.mode;
            localStorage.setItem('darkMode', JSON.stringify(state.mode));
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
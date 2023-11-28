import {configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, themeReducer} from "./slices";

const store = configureStore({
   reducer: {
      movies: movieReducer,
      genres: genreReducer,
      darkMode: themeReducer
   }
});

export {store};
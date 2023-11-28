import {configureStore} from "@reduxjs/toolkit";

import {genreReducer, movieReducer, themeReducer} from "./slices";

const store = configureStore({
   reducer: {
      movies: movieReducer,
      genres: genreReducer,
      theme: themeReducer
   }
});

export {store};
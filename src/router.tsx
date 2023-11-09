import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieDetailsPage, MoviesPage, SearchPage} from "./pages";
import {GenreMovies} from "./components";

const router = createBrowserRouter([
    {index: true, element: <Navigate to={'/movies'}/>},
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {path: '/movies', element: <MoviesPage/>},
            {path: '/movies/:id', element: <MovieDetailsPage/>},
            {
                path: '/genres', element: <GenresPage/>, children: [
                    {path: '', element: <GenreMovies/>}
                ]
            },
            {path: '/search', element: <SearchPage/>}
        ]
    }
]);

export {router};
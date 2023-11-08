import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {GenresPage, MovieDetailsPage, MoviesPage} from "./pages";
import {GenreMovies} from "./components/genres-container/GenreMovies";

const router = createBrowserRouter([
    {index: true, element: <Navigate to={'/movies'}/>},
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {path: '/movies', element: <MoviesPage/>},
            {path: '/movies/:id', element: <MovieDetailsPage/>},
            {path: '/genres', element: <GenresPage/>, children: [
                    {path: '', element: <GenreMovies/>}
                ]},
        ]
    }
]);

export {router};
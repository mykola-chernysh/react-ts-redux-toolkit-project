import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {MoviesPage} from "./pages";

const router = createBrowserRouter([
    {index: true, element: <Navigate to={'/movies'}/>},
    {
        path: '',
        element: <MainLayout/>,
        children: [
            {path: '/movies', element: <MoviesPage/>},
        ]
    }
]);

export {router};
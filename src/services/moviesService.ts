import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IResType} from "../types";
import {IResMovie} from "../interfaces";
import {IMovieDetails} from "../interfaces";


const moviesService = {
    getAll: (page: string = '1'): IResType<IResMovie> => axiosService.get(urls.movies.base, {params: {page}}),
    getById: (id: string): IResType<IMovieDetails> => axiosService.get(urls.movies.byId(id)),
    getSearchMovies: (page: string = '1', query: string): IResType<IResMovie> => axiosService.get(urls.movies.search, {params: {page, query}})

}

export {moviesService};
import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {AxiosResponseType} from "../types";
import {IMovieDetails, IResMovie} from "../interfaces";

const moviesService = {
    getAll: (page: string): AxiosResponseType<IResMovie> => axiosService.get(urls.movies.base, {params: {page}}),
    getById: (id: string): AxiosResponseType<IMovieDetails> => axiosService.get(urls.movies.byId(id)),
    searchByWord: (page: string, query: string): AxiosResponseType<IResMovie> => axiosService.get(urls.movies.search, {params: {page, query}})

}

export {moviesService};
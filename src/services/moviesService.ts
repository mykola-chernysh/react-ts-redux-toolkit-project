import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {AxiosResponseType} from "../types";
import {IImages, IMovieDetails, IMovies, IVideos} from "../interfaces";

const moviesService = {
    getAll: (page: string): AxiosResponseType<IMovies> => axiosService.get(urls.movies.base, {params: {page}}),
    getById: (id: string): AxiosResponseType<IMovieDetails> => axiosService.get(urls.movies.byId(id)),
    searchByWord: (page: string, query: string): AxiosResponseType<IMovies> => axiosService.get(urls.movies.search, {params: {page, query}}),
    getImages: (id: string): AxiosResponseType<IImages> => axiosService.get(urls.movies.images(id)),
    getVideo: (id: string): AxiosResponseType<IVideos> => axiosService.get(urls.movies.video(id))
}

export {moviesService};
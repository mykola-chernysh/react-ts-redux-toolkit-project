import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {AxiosResponseType} from "../types";
import {IGenres, IMovies} from "../interfaces";

const genresService = {
    getAll: (): AxiosResponseType<IGenres> => axiosService.get(urls.genres.base),
    getMoviesByGenres: (page: string, with_genres:string): AxiosResponseType<IMovies> => axiosService.get(urls.movies.base, {params: {page, with_genres}})
}

export {genresService};
import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IResType} from "../types";
import {IGenres, IResMovie} from "../interfaces";

const genresService = {
    getGenres: (): IResType<IGenres> => axiosService.get(urls.genres.base),
    getMoviesByGenres: (with_genres:string, page: string): IResType<IResMovie> => axiosService.get(urls.movies.base, {params: {with_genres, page}})
}

export {genresService};
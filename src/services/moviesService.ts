import {axiosService} from "./axiosService";
import {urls} from "../constants";
import {IResType} from "../types";
import {IResMovie} from "../interfaces";


const moviesService = {
    getAll: (page: string = '1'): IResType<IResMovie> => axiosService.get(urls.movies.base, {params: {page}}),
}

export {moviesService};
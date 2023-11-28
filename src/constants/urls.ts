const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list';
const search = '/search/movie';

const urls = {
    movies: {
        base: movies,
        byId: (id: string): string => `/movie/${id}`,
        search: search,
        images: (id: string): string => `/movie/${id}/images`
    },
    genres: {
        base: genres,
    }
}

export {
    baseURL,
    urls
}
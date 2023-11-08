const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const genres = '/genre/movie/list';

const urls = {
    movies: {
        base: movies,
        byId: (id: string) => `/movie/${id}`
    },
    genres: {
        base: genres,
    }
}

export {
    baseURL,
    urls
}
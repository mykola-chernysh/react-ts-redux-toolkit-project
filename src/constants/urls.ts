const baseURL = 'https://api.themoviedb.org/3';
const posterURL = 'https://image.tmdb.org/t/p/w500';

const movies = '/discover/movie';
const genre = '/genre/movie/list';
const find = '/find';

const urls = {
    movies: {
        base: movies,
        byId: (id: number) => `/${movies}/${id}`
    },
    poster: {
        getPosterUrl: (url: string) => `${url}`
    },
    genre,
    find: (id: number) :string => `/${find}/${id}`
}

export {
    baseURL,
    posterURL,
    urls
}
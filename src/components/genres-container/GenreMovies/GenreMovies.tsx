import React, {useEffect, useState} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

import css from './GenreMovies.module.css';
import {IMovie} from "../../../interfaces";
import {genresService} from "../../../services";
import {GenreMovie} from "../GenreMovie";
import {Pagination} from "../../pagination-container";

const GenreMovies = () => {
    const {state: id} = useLocation();
    const [moviesByGenre, setMoviesByGenre] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1', with_genres: ''});
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        genresService.getMoviesByGenres((query.get('with_genres')), (query.get('page'))).then(({data}) => {
            setMoviesByGenre(data.results);
            setCurrentPage(data.page);
            id && changeGenre()
        });
    }, [(query.get('with_genres')), (query.get('page')), id]);

    const changeGenre = () => {
        setQuery(prev => {
            prev.set('with_genres', `${id}`);

            return prev;
        });
    }

    return (
        <div className={css.GenreMovies}>
            <div className={css.GenreMovies_container}>
                {
                    moviesByGenre.map(movie => <GenreMovie key={movie.id} movie={movie}/>)
                }
            </div>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} setQuery={setQuery}/>
        </div>
    );
};

export {GenreMovies};
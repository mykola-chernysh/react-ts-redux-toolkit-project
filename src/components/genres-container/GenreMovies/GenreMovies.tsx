import React, {useEffect} from 'react';
import {useLocation, useSearchParams} from "react-router-dom";

import css from './GenreMovies.module.css';
import {GenreMovie} from "../GenreMovie";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../redux";
import {Pagination} from "../../pagination-container";

const GenreMovies = () => {
    const {state: id} = useLocation();
    const [query, setQuery] = useSearchParams({page: '', with_genres: ''});
    const {movies, page, totalPages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const currentPage = query.get('page');
    const currentGenre = query.get('with_genres');

    useEffect(() => {
        dispatch(movieActions.getByGenre({page: currentPage, genre: currentGenre}));

    }, [dispatch, id, currentPage, currentGenre, setQuery]);

    id && setQuery(prev => {
        let page = +prev.get('page');

        page += 1;

        return {page: `${page}`, with_genres: id};
    });

    return (
        <div className={css.GenreMovies}>
            <div className={css.GenreMovies_container}>
                {
                    movies.map(movie => <GenreMovie key={movie.id} movie={movie}/>)
                }
            </div>
            <Pagination currentPage={page} setQuery={setQuery} totalPages={totalPages}/>
        </div>
    );
};

export {GenreMovies};
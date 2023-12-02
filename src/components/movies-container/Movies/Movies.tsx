import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Movies.module.css';
import {Movie} from "../Movie";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../redux";
import {Pagination} from "../../pagination-container";

const Movies = () => {
    const [query, setQuery] = useSearchParams({page: '1'});
    const {movies, page, totalPages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();

    const currentPage = query.get('page');

    useEffect(() => {
        dispatch(movieActions.getAll({page: currentPage}));
    }, [dispatch, currentPage]);

    return (
        <div className={css.Movies}>
            <div className={css.Movies_container}>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
            <Pagination currentPage={page} setQuery={setQuery} totalPages={totalPages}/>
        </div>
    );
};

export {Movies};
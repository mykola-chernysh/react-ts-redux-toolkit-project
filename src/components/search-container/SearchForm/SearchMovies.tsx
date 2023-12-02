import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {useForm} from "react-hook-form";

import css from './SearchForm.module.css';
import {SearchMovie} from "../SeacrhMovies";
import {useAppDispatch, useAppSelector} from "../../../hooks";
import {movieActions} from "../../../redux";
import {Pagination} from "../../pagination-container";

const SearchMovies = () => {
    const {register, handleSubmit, reset} = useForm();
    const {movies, page, totalPages} = useAppSelector(state => state.movies);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    const currentPage = query.get('page');
    const currentWord = query.get('query');

    useEffect(() => {
        if (!query.get('query')) {
            dispatch(movieActions.getAll({page: currentPage}));
        } else {
            dispatch(movieActions.getFound({page: currentPage, word: currentWord}));
        }
    }, [dispatch, currentPage, currentWord, query]);

    const searchMovies = (value: { search: string }) => {
        setQuery((prev) => {
            prev.set('query', value.search);
            prev.set('page', '1');
            return prev;
        })

        reset();
    }

    return (
        <div className={css.SearchForm}>
            <form onSubmit={handleSubmit(searchMovies)} id={'form'}>
                <input placeholder={'Enter the name of the movie'} {...register('search')}/>
                <button>Search</button>
            </form>
            <div className={css.SearchForm_container}>
                {movies && movies.map((movie) => <SearchMovie key={movie.id} movie={movie}/>)}
            </div>
            {<Pagination currentPage={page} setQuery={setQuery} totalPages={totalPages}/>}
        </div>
    );
};

export {SearchMovies};
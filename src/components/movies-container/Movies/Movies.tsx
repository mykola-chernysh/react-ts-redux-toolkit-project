import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Movies.module.css';
import {IMovie} from "../../../interfaces";
import {moviesService} from "../../../services";
import {Movie} from "../Movie";
import {Pagination} from "../../pagination-container";

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        moviesService.getAll(query.get('page')).then(({data}) => {
            setMovies(data.results);
            setCurrentPage(data.page);
        })
    }, [query.get('page')]);

    return (
        <div className={css.Movies}>
            <div className={css.Movies_container}>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} setQuery={setQuery}/>
        </div>
    );
};

export {Movies};
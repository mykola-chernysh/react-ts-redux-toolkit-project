import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Movies.module.css';
import {IMovie} from "../../../interfaces";
import {moviesService} from "../../../services";
import {Movie} from "../Movie";
import {Pagination} from "../../pagination-container";

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [totalPages, setTotalPages] = useState<number>();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        moviesService.getAll(query.get('page')).then(({data}) => {
            setMovies(data.results);
            setTotalPages(data.total_pages);
            setCurrentPage(data.page);
        })
    }, [query]);

    return (
        <div className={css.Movies}>
            <div className={css.Movies_container}>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} setQuery={setQuery} totalPages={totalPages}/>
        </div>
    );
};

export {Movies};
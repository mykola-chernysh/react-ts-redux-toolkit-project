import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

import css from './Movies.module.css';
import {IMovie} from "../../interfaces";
import {moviesService} from "../../services";
import {Movie} from "./Movie";

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [currentPage, setCurrentPage] = useState<number>(1)

    useEffect(() => {
        moviesService.getAll(query.get('page')).then(({data}) => {
            setMovies(data.results);
            setCurrentPage(data.page)
        })
    }, [query.get('page')]);

    const prev = () => {
        setQuery((page) => {
            page.set('page', `${+page.get('page') - 1}`);

            return page;
        })
    }

    const next = () => {
        setQuery((page) => {
            page.set('page', `${+page.get('page') + 1}`);
            return page;
        })
    }

    return (
        <div className={css.Movies}>
            <div className={css.Movies_container}>
                {
                    movies.map(movie => <Movie key={movie.id} movie={movie}/>)
                }
            </div>
            <div className={css.Movies_buttons}>
                <button disabled={currentPage === 1} onClick={prev}>Prev</button>
                <button disabled={currentPage === 500} onClick={next}>Next</button>
            </div>
        </div>
    );
};

export {Movies};
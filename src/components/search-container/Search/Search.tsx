import React, {useEffect, useState} from 'react';
import {moviesService} from "../../../services";
import {IMovie} from "../../../interfaces";
import {useSearchParams} from "react-router-dom";
import css from "../SearchForm/SearchForm.module.css";
import {SearchMovies} from "../SeacrhMovies";
import {Pagination} from "../../pagination-container";

const Search = () => {
    const [movies, setMovies] = useState<IMovie[]>();
    const [currentPage, setCurrentPage] = useState(1)
    const [query, setQuery] = useSearchParams({page: '1'});

    const page = query.get('page');

    useEffect(() => {
        moviesService.getAll(query.get('page')).then(({data}) => {
            setMovies(data.results);
        })
    }, [page]);

    const changePage = (numPage: number) => {
        setQuery((page) => {
            page.set('page', `${numPage}`);

            return page;
        })
    }

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
        <div>
            <div className={css.SearchForm}>
                <div className={css.SearchForm_container}>
                    {movies && movies.map((movie) => <SearchMovies key={movie.id} movie={movie}/>)}
                </div>
                <Pagination setCurrentPage={setCurrentPage} changePage={changePage} prev={prev} next={next} currentPage={currentPage}/>
            </div>
        </div>
    );
};

export {Search};
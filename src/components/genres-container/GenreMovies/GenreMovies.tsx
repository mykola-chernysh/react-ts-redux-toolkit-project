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
    const [totalPages, setTotalPages] = useState<number>();
    const [query, setQuery] = useSearchParams({page: '1', with_genres: ''});
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        genresService.getMoviesByGenres((query.get('with_genres')), (query.get('page'))).then(({data}) => {
            setMoviesByGenre(data.results);
            setTotalPages(data.total_pages);
            setCurrentPage(data.page);

            const changeGenre = () => {
                setQuery(prev => {
                    prev.set('with_genres', `${id}`);

                    return prev;
                });
            }

            id && changeGenre()
        });
    }, [query, setQuery, id]);



    return (
        <div className={css.GenreMovies}>
            <div className={css.GenreMovies_container}>
                {
                    moviesByGenre.map(movie => <GenreMovie key={movie.id} movie={movie}/>)
                }
            </div>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} setQuery={setQuery} totalPages={totalPages}/>
        </div>
    );
};

export {GenreMovies};
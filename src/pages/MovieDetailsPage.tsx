import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from './MovieDetailsPage.module.css'
import {MovieDetails} from "../components";
import {moviesService} from "../services";
import {IMovieDetails} from "../interfaces";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const [movie, setMovie  ] = useState<IMovieDetails>();

    useEffect(() => {
        moviesService.getById(id).then(({data}) => setMovie(data));
    }, []);

    return (
        <div className={css.MoviesDetailsPage}>
            {movie && <MovieDetails movie={movie}/>}
        </div>
    );
};

export {MovieDetailsPage};
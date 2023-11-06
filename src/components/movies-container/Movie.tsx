import React, {FC} from 'react';

import css from './Movie.module.css';
import {IMovie} from "../../interfaces";
import {Link} from "react-router-dom";

interface IProps {
    movie: IMovie
}

const Movie: FC<IProps> = ({movie}) => {
    const {title, poster_path} = movie;

    return (
        <Link to={`/movies/${title}`} className={css.Movie}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="film_poster"/>
            <p>{title}</p>
        </Link>
    );
};

export {Movie};

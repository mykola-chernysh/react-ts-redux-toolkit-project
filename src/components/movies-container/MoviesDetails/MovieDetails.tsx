import React, {FC} from 'react';
import {Rating} from "react-simple-star-rating";

import css from './MovieDetails.module.css';
import {IMovieDetails} from "../../../interfaces";

interface IProps {
    movie: IMovieDetails,
}

const MovieDetails: FC<IProps> = ({movie}) => {
    const {
        poster_path,
        genres,
        title,
        release_date,
        vote_average,
        overview,
        adult,
        production_countries,
        spoken_languages,
        tagline
    } = movie;

    const nameGenres = genres.map(value => value.name).join(', ');
    const nameCountries = production_countries.map(value => value.iso_3166_1).join(', ');
    const language = spoken_languages.map(value => value.iso_639_1).join(', ');

    return (
        <div className={css.MovieDetails}>
            <div className={css.MovieDetails_container}>
                <div className={css.MovieDetails_poster}>
                    <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt=""/>
                    <Rating initialValue={vote_average} readonly={true} size={25} iconsCount={10} allowFraction={true}/>
                </div>
                <div className={css.MovieDetails_info}>
                    <div>{title}</div>
                    <div>Release date: <span>{release_date}</span></div>
                    <div>Age rating: <span>{adult ? 'nc-17' : 'pg'}</span></div>
                    <div>Country: <span>{nameCountries}</span></div>
                    <div>Genres: <span>{nameGenres}</span></div>
                    <div>Language: <span>{language}</span></div>
                </div>
            </div>
            <div className={css.MovieDetails_descr}>
                <div>
                    {tagline && <h3>{tagline}</h3>}
                </div>
                <div>
                    <p>{overview}</p>
                </div>
            </div>
        </div>
    );
};

export {MovieDetails};

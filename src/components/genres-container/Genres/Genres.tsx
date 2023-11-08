import React, {useEffect, useState} from 'react';

import css from './Genres.module.css';
import {IGenre} from "../../../interfaces";
import {genresService} from "../../../services";
import {Genre} from "../Genre";

const Genres = () => {
    const [genres, setGenres] = useState<IGenre[]>([]);

    useEffect(() => {
        genresService.getGenres().then(({data}) => setGenres(data.genres))
    }, []);

    return (
        <div className={css.Genres}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {Genres};
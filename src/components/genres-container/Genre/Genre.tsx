import React, {FC} from 'react';
import {Link} from "react-router-dom";

import css from './Genre.module.css';
import {IGenre} from "../../../interfaces";

interface IProps {
    genre: IGenre
}

const Genre: FC<IProps> = ({genre}) => {
    const {id, name} = genre;

    return (
        <div className={css.Genre}>
            <Link to={''} state={id}>{name}</Link>
        </div>
    );
};

export {Genre};
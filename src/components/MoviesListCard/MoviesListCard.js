import React from "react";
import {Link} from "react-router-dom";

import css from "./MoviesListCard.module.css";

const MoviesListCard = ({movie}) => {

    const {title, poster_path, vote_average} = movie;

    return (
        <div className={css.container}>
            <Link className={css.video} to={`/movies/${movie.id}`}>

                <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="title" title={title}/>
                <div className={css.flex}>
                    <div className={css.title}>{title}</div>
                    <div>{vote_average}</div>
                </div>

            </Link>
        </div>
    );
};

export {MoviesListCard};
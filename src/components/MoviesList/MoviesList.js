import React, {useEffect} from "react";
import {Link, useParams} from "react-router-dom";

import css from "./MoviesList.module.css";
import {useDispatch, useSelector} from "react-redux";
import { getGenreMovies} from "../../store";

const MoviesGenre = () => {
    const {id} = useParams();
    const {genre} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenreMovies(id));
    }, [dispatch, id]);

    const {title, poster_path, vote_average} = genre;

    return (
        <div className={css.container}>
            <Link className={css.video} to={`/genre/movie/list/${genre.id}`}>
                <img src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt="title" title={title}/>
                <div className={css.flex}>
                    <div className={css.title}>{title}</div>
                    <div>{vote_average}</div>
                </div>
            </Link>
        </div>
    );
};

export {MoviesGenre};
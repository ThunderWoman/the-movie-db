import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getAllGenres} from "../../store";
import {GenreBadge} from "../GenreBadge/GenreBadge";

const Genres = () => {

    const {genres} = useSelector(state => state.genres.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres())
    }, [dispatch])

    return (
        <div>
            {genres && <div>{genres.map(genre => <GenreBadge key={genre.id} genre={genre}/>)}</div>}
        </div>
    );
};

export {Genres};
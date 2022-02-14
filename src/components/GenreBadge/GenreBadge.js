import React from "react";
import {NavLink} from "react-router-dom";

import css from "../GenreBadge/GenreBadge.module.css";

const GenreBadge = ({genre}) => {
    const {id, name} = genre;

    return (
        <NavLink to={'/genre/' + id}><div className={css.GenreBadge}>{name}</div></NavLink>
    );
};

export {GenreBadge};
import React from "react";
import {NavLink} from "react-router-dom";

import css from "../GenreBadge/GenreBadge.module.css";

const GenreBadge = ({genre}) => {
    const {id, name} = genre

    return (
        <NavLink to={'/genres/' + id}><div className={css.leftMenuLink}>{name}</div></NavLink>
    );
};

export {GenreBadge};
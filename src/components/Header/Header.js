import React from "react";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>

            <NavLink to={'genre'}>Genre</NavLink>
            <NavLink to={'Country'}>Country</NavLink>
            <NavLink to={'tv'}>TV</NavLink>
            <NavLink to={'Anime'}>Anime</NavLink>


        </div>
    )

}

export {Header};
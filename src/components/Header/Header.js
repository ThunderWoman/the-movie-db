import React from "react";

import css from "./Header.module.css"
import {NavLink} from "react-router-dom";
import {Genres} from "../Genres/Genres";


const Header = () => {

    return (
        <div className={css.Container}>
            <div className={css.block}>
                <h3>media</h3>
                <NavLink to='/movies'>
                    <div className={css.Menu}>Movies</div>
                </NavLink>
            </div>

            <div className={css.block}>
                <h3>genres</h3>
                <Genres/>
            </div>
        </div>
    );
};

export {Header};
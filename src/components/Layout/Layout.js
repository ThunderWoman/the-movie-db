import React from "react";
import {Outlet} from "react-router-dom";

import css from "./Layout.module.css";

import {Main} from "../Main/Main";
import {Header} from "../Header/Header";
import {SearchMovies} from "../SearchMovies/SearchMovies";

const Layout = () => {

    return (
        <div className={css.Layout}>
            <Header/>
            <div id={"main"} className={css.flex}>
                <Main><Outlet/></Main>
                <SearchMovies/>
            </div>
        </div>
    );
};

export {Layout};
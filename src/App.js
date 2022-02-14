import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import "./App.css";
import {Layout} from "./components";
import {MovieInfoPage} from "./containers";
import {MoviesPage, MovieSearchPage, GenresPage} from "./containers";

const App = () => {
    return (
        <div className={'flex'}>
                <Routes>
                    <Route path={'/'} element={<Layout/>}>
                        <Route index element={<Navigate to={'/movies'}/>}/>
                        <Route path={'search'} element={<MovieSearchPage/>}/>
                        <Route path={'movies'} element={<MoviesPage/>}/>
                        <Route path={'movies/:id'} element={<MovieInfoPage/>}/>
                        <Route path={'genres/:id'} element={<GenresPage/>}/>
                    </Route>
                </Routes>
        </div>
    );
};

export default App;

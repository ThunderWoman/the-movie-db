import {Navigate, Route, Routes} from "react-router-dom";

import "./App.css";
import {Header} from "./components";
import {MovieInfoPage} from "./containers";
import {MoviesListPage, MovieSearchPage, MoviesByGenrePage} from "./containers";


const App = () => {
  return (
      <div>
<Routes>
    <Route path={'/'} element={<Header/>}>
        <Route index element={<Navigate to={'/movies'}/>}/>
        <Route path={'movies'} element={<MoviesListPage/>}/>
        <Route path={'movies/:id'} element={<MovieInfoPage/>}/>
        <Route path={'search'} element={<MovieSearchPage/>}/>
        <Route path={'genres/:id'} element={<MoviesByGenrePage/>}/>
    </Route>

</Routes>
      </div>
  );
};

export default App;

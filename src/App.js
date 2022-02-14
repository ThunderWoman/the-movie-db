import {Navigate, Route, Routes} from "react-router-dom";

import "./App.css";
import {Header} from "./components";
import {MovieInfoPage, MoviesListPage} from "./containers";


const App = () => {
  return (
      <div>
<Routes>
    <Route path={'/'} element={<Header/>}>
        <Route index element={<Navigate to={'/movies'}/>}/>
        <Route path={'movies'} element={<MoviesListPage/>}/>
        <Route path={'movies/:id'} element={<MovieInfoPage/>}/>
    </Route>

</Routes>
      </div>
  );
};

export default App;

import React, { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ActoresPage from './pages/ActoresPage';
import MoviePage from './pages/MoviePage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {


  return (

    <HashRouter>
        <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route exact path="/actors"><ActoresPage />   </Route>
          <Route exact path="/actors/:actorId/movie"><MoviePage /></Route>
          <Route path="/"><NotFoundPage/></Route>
        </Switch>
    </HashRouter>

  );
}

export default App;

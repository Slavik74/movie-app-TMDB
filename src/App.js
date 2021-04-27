import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ActoresPage from './pages/ActoresPage/ActoresPage';
import MoviePage from './pages/MoviePage/MoviePage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import NavBar from './components/NavBar/NavBar';
import './App.css';


function App() {


  return (
    <div className="app">
      <HashRouter>
        
          <header>
              <span className="header-text">Movies App</span>               
          </header>
          
          <NavBar/>

          <Switch>
            <Route exact path="/"><HomePage/></Route>
            <Route exact path="/home"><HomePage/></Route>
            <Route exact path="/actors"><ActoresPage />   </Route>
            <Route exact path="/actors/:actorId/movie"><MoviePage /></Route>
            <Route path="*"><NotFoundPage/></Route>
          </Switch>
      </HashRouter>
    </div>

  );
}

export default App;

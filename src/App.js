import ActoresPage from './pages/ActoresPage';
import React, { useState } from 'react';
import MovieCard from './components/MovieCard';
import MovieModel from './model/MovieModel'

function App() {

  const [actorId, setActorId] = useState([]);


  const movieTest = new MovieModel("my actor", 134,"my director", 
      "/lT6NgvhUoVJK3skU2xW3qUeCQ1c.jpg",
      "A tough-on-crime street cop must protect the only surviving witness to a strange murderous cult with far reaching plans.",
      ["star1","star2","star3","star4"]);

  return (
    <div>
      <ActoresPage getActorId={(actorId)=>{
        setActorId(actorId)
      }} />   
      
      <MovieCard movie={movieTest}  ></MovieCard>
    </div>
  );
}

export default App;

import ActoresPage from './pages/ActoresPage';
import React, { useState } from 'react';
import MoviePage from './pages/MoviePage';

function App() {

  const [actorId, setActorId] = useState(null);

  return (
    <div>
      <ActoresPage getActorId={(actorId)=>{
        setActorId(actorId)
      }} />   
      
      {actorId? <MoviePage actorId={actorId} />:null}
    </div>
  );
}

export default App;

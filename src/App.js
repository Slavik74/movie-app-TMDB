import ActoresPage from './pages/ActoresPage';
import React, { useState } from 'react';

function App() {

  const [actorId, setActorId] = useState([]);

  return (
    <div>
      <ActoresPage getActorId={(actorId)=>{
        setActorId(actorId)
      }} />   
      {actorId}  
    </div>
  );
}

export default App;

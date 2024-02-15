import React, {useState, useEffect } from 'react';
import './App.css';

function callApi() {
  fetch(`http://51.222.87.62:3001/api/utilisateurs`, { method: 'GET' })
    .then(data => data.json())
    .then(json => alert(JSON.stringify(json)))
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callApi}>Appel avec l'API</button>
      </header>
    </div>
  );
}


export default App;

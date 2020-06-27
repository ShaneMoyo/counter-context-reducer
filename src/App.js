import React from 'react';
import CountContainer from './components/CountContainer';
import CountContext from './components/CountContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <CountContext>
        <CountContainer />
      </CountContext>
      
    </div>
  );
}

export default App;

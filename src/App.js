import React from 'react';
import Routes from './config/routes';
import {Link} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>{' • '}
            <Link to="/about">About</Link>{' • '} 
            <Link to="/random">Random</Link>{' • '} 
          </li>
        </ul>
      </nav>
      <Routes />
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import {Link} from 'react-router-dom';
import Router from "./Router";

function App() {
  return (
    <div>
        <nav>
          <ul>
            <li>
              <Link to="/cars">Cars</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
      <Router />
    </div>
  );
}

export default App;

// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import About from './pages/About';
// import Home from './pages/Home'; // Assuming you have a Home page

import logo from './logo.svg';
import './css/styles.css'
import Navbar from './components/common/navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>

      <div className="section-container">
        <h1 className="text-red-500 bg-blue-100">This is an h1</h1>
      </div>
    </div>
  );
}

export default App;
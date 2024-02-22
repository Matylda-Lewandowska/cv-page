import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';

function App () {
  return (
    <Router>
      <Routes>
        <Route path='home' element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;

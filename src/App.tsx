import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { MainProvider } from './context/MainContext';

function App () {
  return (
    <MainProvider>
      <Router>
        <Routes>
          <Route path='home' element={<Home />} />
          <Route path='*' element={<Navigate replace to="/home" />} />

        </Routes>
      </Router>
    </MainProvider>
  );
}

export default App;

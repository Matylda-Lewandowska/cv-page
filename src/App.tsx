import React from 'react';
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
// import { Home } from './pages/Home/Home';
import { MainProvider } from './context/MainContext';
import { About } from './pages/About/About';
import { ITHub } from './pages/ITHub/ITHub';
// import { ArtHub } from './pages/ArtHub/ArtHub';
import { ITTeckStack } from './pages/ITTeckStack/ITTeckStack';
import { ITProjects } from './pages/ITProjects/ITProjects';
import { ITFunctions } from './pages/ITFunctions/ITFunctions';

function App () {
  return (
    <MainProvider>
      <Router>
        <Routes>
          {/* <Route path='home' element={<Home />} /> */}
          <Route path='about' element={<About />} />
          <Route path='it' element={<ITHub />} >
          </Route>
          <Route path='it/tech-stack' element={<ITTeckStack />} />
          <Route path='it/projects' element={<ITProjects />}>
          </Route>
          <Route path='it/projects/:id' element={<ITProjects />} />
          <Route path='it/functions' element={<ITFunctions />}>
          </Route>
          <Route path='it/projects/:id' element={<ITFunctions />} />
          {/* <Route path='art' element={<ArtHub />} /> */}
          <Route path='*' element={<Navigate replace to="/it" />} />

        </Routes>
      </Router>
    </MainProvider>
  );
}

export default App;

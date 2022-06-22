import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Game from './components/game/Game';
import { NameContextProvider } from './components/context/NamesContext';
import { PointsContextProvider } from './components/context/pointsContext';
import './App.css';

const App = () => {
  return (
  <Router>
    <div className="App">
    <NameContextProvider>
      <PointsContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
      </PointsContextProvider>
    </NameContextProvider>
    </div>
  </Router>
  );
}

export default App;
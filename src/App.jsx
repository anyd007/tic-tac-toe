import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import Game from './components/game/Game';
import { NameContextProvider } from './components/context/NamesContext';
import './App.css';

const App = () => {
  return (
  <Router>
    <div className="App">
    <NameContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </NameContextProvider>
    </div>
  </Router>
  );
}

export default App;
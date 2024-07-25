// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AddParticipant from './pages/AddParticipant';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-participant" element={<AddParticipant />} />
        {/* Define other routes similarly */}
      </Routes>
    </Router>
  );
};

export default App;

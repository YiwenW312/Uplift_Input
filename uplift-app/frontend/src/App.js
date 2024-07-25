// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AddParticipant from './pages/AddParticipant';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-participant" component={AddParticipant} />
        {/* Define other routes similarly */}
      </Switch>
    </Router>
  );
};

export default App;

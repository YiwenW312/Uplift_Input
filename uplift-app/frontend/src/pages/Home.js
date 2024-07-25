// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Uplift</h1>
      <ul>
        <li><Link to="/add-participant">Add New Participant</Link></li>
        <li><Link to="/update-participant">Update Existing Participant</Link></li>
        <li><Link to="/search-participants">Search Participants</Link></li>
        <li><Link to="/add-employer">Add New Employer</Link></li>
        <li><Link to="/update-employer">Update Employer</Link></li>
        <li><Link to="/add-job-placement">Add New Job Placement Code</Link></li>
        <li><Link to="/update-job-placement">Update Job Placement Code</Link></li>
      </ul>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="home-page">
      <header>
        <h1>TEAM Bazzigar</h1>
        <p>Welcome To Bazzigar Team Management</p>
      </header>
      <div className="buttons">
        <Link to="/add-member" className="btn">Add Member</Link>
        <Link to="/view-members" className="btn">View Members</Link>
      </div>
    </div>
  );
};

export default HomePage;

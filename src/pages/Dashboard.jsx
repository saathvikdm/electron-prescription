import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Dashboard = () => {
  return (
    <div
      className="container justify-content-center flex-column"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <Link to="/issue">
        <button type="button" className="btn btn-primary">
          Issue Prescription
        </button>
      </Link>
    </div>
  );
};

export default Dashboard;

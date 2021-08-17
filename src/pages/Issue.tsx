import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import InputForm from '../components/InputForm';

export default function Issue() {
  const location = useLocation();

  return (
    <div
      className="container justify-content-center flex-column mb-3"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <div className="alert alert-success mb-4" role="alert">
        <i className="fas fa-marker me-2" /> Generate Prescription
      </div>
      {location.state ? (
        <InputForm passedData={location.state.data} />
      ) : (
        <InputForm />
      )}
    </div>
  );
}

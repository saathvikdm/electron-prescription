import React from 'react';
import Header from '../components/Header';
import InputForm from '../components/InputForm';

export default function Issue() {
  return (
    <div
      className="container justify-content-center flex-column mb-3"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <div className="alert alert-primary mb-4" role="alert">
        <i className="fas fa-marker me-2" /> Generate Report
      </div>
      <InputForm />
    </div>
  );
}

import React from 'react';
import Header from '../components/Header';
import InputForm from '../components/InputForm';
import GetDate from '../utils/GetDate';

export default function Issue() {
  const date = GetDate();
  console.log(`Date: ${date}`);

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

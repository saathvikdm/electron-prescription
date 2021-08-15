import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import BillingForm from '../components/BillingForm';

export default function Bill() {
  const location = useLocation();

  return (
    <div
      className="container justify-content-center flex-column mb-3"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <div className="alert billing-color mb-4" role="alert">
        <i className="fas fa-marker me-2 " /> Generate Bill
      </div>
      {location.state ? (
        <BillingForm passedData={location.state.data} />
      ) : (
        <BillingForm />
      )}
    </div>
  );
}

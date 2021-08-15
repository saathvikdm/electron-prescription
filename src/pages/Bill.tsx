import React from 'react';

import Header from '../components/Header';
import BillingForm from '../components/BillingForm';

export default function Bill() {
  return (
    <div
      className="container justify-content-center flex-column mb-3"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <div className="alert billing-color mb-4" role="alert">
        <i className="fas fa-marker me-2 " /> Generate Bill
      </div>
      <BillingForm />
    </div>
  );
}

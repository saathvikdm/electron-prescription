import React from 'react';

import Header from '../components/Header';
import CertificateForm from '../components/CertificateForm';

import GetDate from '../utils/GetDate';

export default function CertificatePage() {
  const date = GetDate();
  console.log(`Date: ${date}`);

  return (
    <div
      className="container justify-content-center flex-column mb-3"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <div className="alert certificate-color mb-4" role="alert">
        <i className="fas fa-marker me-2 " /> Generate Certificate
      </div>
      <CertificateForm />
    </div>
  );
}

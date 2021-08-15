import React from 'react';

import Header from '../components/Header';
import CertificateForm from '../components/CertificateForm';

export default function CertificatePage() {
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

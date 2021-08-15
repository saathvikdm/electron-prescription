import React from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import CertificateForm from '../components/CertificateForm';

export default function CertificatePage() {
  const location = useLocation();

  return (
    <div
      className="container justify-content-center flex-column mb-3"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <div className="alert certificate-color mb-4" role="alert">
        <i className="fas fa-marker me-2 " /> Generate Certificate
      </div>
      {location.state ? (
        <CertificateForm passedData={location.state.data} />
      ) : (
        <CertificateForm />
      )}
    </div>
  );
}

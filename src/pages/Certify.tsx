import React from 'react';
import Header from '../components/Header';

import Certificate from '../templates/Certificate';

import GetDate from '../utils/GetDate';

export default function Certify() {
  const date = GetDate();
  console.log(`Date: ${date}`);

  return (
    <div
      className="container justify-content-center flex-column mb-3"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <Certificate />
    </div>
  );
}

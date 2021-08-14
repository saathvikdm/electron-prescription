import React from 'react';
import drLogo from '../../assets/drlogo.png';
import clinicLogo from '../../assets/cliniclogo.png';

export default function PrintHeader() {
  return (
    <div className="d-flex justify-content-between p-3">
      <img src={drLogo} alt="" height="100px" width="auto" />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="text-center px-1" style={{ fontSize: '1rem' }}>
          <b>Vijayalaxmi Clinic, Diagnostics And Counseling Centre.</b>
        </p>
        <p className="text-center" style={{ fontSize: '0.6em' }}>
          Near Raghu Stickers, Dr.B.R.Ambedkar Road(Market Road),
          <br />
          Chikkamagaluru – 577101.
        </p>
      </div>
      <img
        src={clinicLogo}
        className="mt-2"
        height="70px"
        width="100px"
        alt=""
      />
    </div>
  );
}

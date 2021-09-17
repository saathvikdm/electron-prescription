import React from 'react';
import drLogo from '../../assets/drlogonew.png';

export default function Header() {
  return (
    <div
      className="d-flex justify-content-between bg-white shadow-sm p-3 mt-3 mb-2 rounded"
      id="hidden"
    >
      <img src={drLogo} height="100px" alt="" />
      <div className="d-flex flex-column justify-content-center align-items-center header-text mx-auto">
        <p className="h5 text-center px-1" style={{ fontSize: '1em' }}>
          <b>Vijayalaxmi Clinic, Diagnostics And Counseling Centre.</b>
        </p>
        <p className="h6 text-center" style={{ fontSize: '0.7em' }}>
          Near Raghu Stickers, Dr.B.R.Ambedkar Road(Market Road),
          <br />
          Chikkamagaluru – 577101.
        </p>
      </div>
    </div>
  );
}

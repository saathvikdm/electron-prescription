import React from 'react';
import drLogo from '../../assets/drlogo.png';

export default function Header() {
  return (
    <div className="d-flex justify-content-between bg-light shadow-sm p-3 mb-2 rounded">
      <img src={drLogo} alt="" />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="h5 text-center">
          Vijayalaxmi Clinic, Diagnostics And Counseling Centre.
        </p>
        <p className="h6 text-center">
          Near Raghu Stickers, Dr.B.R.Ambedkar Road(Market Road),
          <br />
          Chikkamagaluru – 577101.
        </p>
      </div>
      <img src={drLogo} alt="" />
    </div>
  );
}

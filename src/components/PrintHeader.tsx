import React from 'react';
import drLogo from '../../assets/drlogonew.png';
import clinicLogo from '../../assets/cliniclogo.png';

export default function PrintHeader() {
  return (
    <div
      style={{
        // padding: '3px',
        margin: '3px',
        padding: '1em',
        justifyContent: 'space-between',
        display: 'flex',
      }}
    >
      <img src={drLogo} alt="" height="100px" width="auto" />
      <div
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'column',
          marginRight: 'auto',
          marginLeft: 'auto',
        }}
      >
        <p
          style={{
            margin: '3px',
            fontSize: '1.4em',
            padding: '0 0.25em ',
            textAlign: 'center',
          }}
        >
          <b>Vijayalaxmi Clinic, Diagnostics And Counseling Centre.</b>
        </p>
        <p
          style={{
            padding: '3px',
            margin: '3px',
            fontSize: '1em',
            textAlign: 'center',
          }}
        >
          Near Raghu Stickers, Dr.B.R.Ambedkar Road(Market Road),
          <br />
          Chikkamagaluru – 577101.
        </p>
      </div>
      {/* <img
        src={clinicLogo}
        style={{ padding: '3px', margin: '3px', marginTop: '0.5em ' }}
        height="70px"
        width="100px"
        alt=""
      /> */}
    </div>
  );
}

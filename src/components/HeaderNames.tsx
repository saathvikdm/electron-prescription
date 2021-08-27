import React from 'react';

export default function HeaderNames() {
  return (
    <div
      style={{
        padding: '3px',
        margin: '3px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h6 style={{ padding: '3px', margin: '3px', fontSize: '1em' }}>
          <b>
            <i>
              Dr. CHETHAN NAIK <sub>M.B.B.S.,</sub>
            </i>
          </b>
        </h6>
        <p style={{ padding: '3px', margin: '3px', fontSize: '0.9em' }}>
          General Practitioner,
          <br />
          KMC Reg.No: 97237
          <br />
          E-mail: drchethannaik@gmail.com
        </p>
      </div>
      <div
        style={{
          border: '1px solid black',
          borderRadius: '10px',
          padding: '1em',
          height: 'fit-content',
        }}
      >
        <h6 style={{ padding: '3px', margin: '3px', fontSize: '0.9em' }}>
          <b>
            For Appointment: <br />
            +91-7899861448
          </b>
        </h6>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h6 style={{ padding: '3px', margin: '3px', fontSize: '1em' }}>
          <b>
            <i>
              ಡಾ. ಚೇತನ್ ನಾಯ್ಕ್ <sub>ಎಂ‌.ಬಿ.ಬಿ.ಎಸ್.,</sub>
            </i>
          </b>
        </h6>
        <p style={{ padding: '3px', margin: '3px', fontSize: '0.9em' }}>
          ಜನರಲ್ ಪ್ರಾಕ್ಟೀಷನರ್,
          <br />
          ಕೆ.ಎಂ.ಸಿ ರೆ.ಸಂ: 97237
          <br />
          E-mail: drchethannaik@gmail.com
        </p>
      </div>
    </div>
  );
}

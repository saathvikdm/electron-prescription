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
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h6 style={{ padding: '3px', margin: '3px', fontSize: '0.9rem' }}>
          <b>
            <i>
              ಡಾ. ಚೇತನ್ ನಾಯ್ಕ್ <sub>ಎಂ‌.ಬಿ.ಬಿ.ಎಸ್.,</sub>
            </i>
          </b>
        </h6>
        <p style={{ padding: '3px', margin: '3px', fontSize: '0.8rem' }}>
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

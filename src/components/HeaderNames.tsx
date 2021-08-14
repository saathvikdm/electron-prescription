import React from 'react';

export default function HeaderNames() {
  return (
    <div className="details d-flex justify-content-between px-3">
      <div className="d-flex-flex-column">
        <h6 style={{ fontSize: '0.9rem' }}>
          <b>
            <i>
              Dr. CHETHAN NAIK <sub>M.B.B.S.,</sub>
            </i>
          </b>
        </h6>
        <p style={{ fontSize: '0.8rem' }}>
          General Practitioner,
          <br />
          KMC Reg.No: 97237
          <br />
          E-mail: drchethannaik@gmail.com
        </p>
      </div>
      <div className="d-flex-flex-column">
        <h6 style={{ fontSize: '0.9rem' }}>
          <b>
            <i>
              ಡಾ. ಚೇತನ್ ನಾಯ್ಕ್ <sub>ಎಎಂ‌.ಬಿ.ಬಿ.ಎಸ್.,</sub>
            </i>
          </b>
        </h6>
        <p style={{ fontSize: '0.8rem' }}>
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

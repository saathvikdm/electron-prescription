import React from 'react';

import footerLogo from '../../assets/footerlogo.png';
import Sign from '../../assets/sign.png';

export default function Footer({ sign, facilities, mrgn }) {
  return (
    <div style={{ marginTop: `${mrgn}px` }}>
      <div className="page-footer">
        {sign ? (
          <div className="d-flex justify-content-end">
            <div className="flex-column">
              <img
                src={Sign}
                alt=""
                height="75px"
                width="auto"
                style={{ marginLeft: '2.5em' }}
              />
              <h6 style={{ fontSize: '0.9rem', marginRight: '1em' }}>
                <b>
                  Dr. CHETHAN NAIK <sub>M.B.B.S.,</sub>
                </b>
              </h6>
            </div>
          </div>
        ) : (
          ''
        )}
        <div
          className=" details d-flex text-center flex-column justify-content-between px-3 pt-1"
          style={{
            margin: '5px',
            border: '1px solid black',
            borderRadius: '8px',
          }}
        >
          <p className="mb-0  text-center" style={{ fontSize: '0.78rem' }}>
            Wish you a speedy recovery. Please bring this prescription during
            your clinic visit.
          </p>
          <p className="mb-0  text-center" style={{ fontSize: '0.8rem' }}>
            <b>In case of emergency, contact +91-9482000390.</b>
          </p>
          <div className="details d-flex justify-content-between px-3 pt-1">
            <div className="d-flex-flex-column">
              <h6 style={{ fontSize: '0.8rem' }}>
                <b className="border-bottom border-dark">Visiting time:</b>
              </h6>
              <p style={{ fontSize: '0.7rem' }}>
                Morning 10 AM to 2 PM
                <br />
                Evening 5 PM to 8 PM
              </p>
            </div>
            <div className="d-flex-flex-column">
              <h6 style={{ fontSize: '0.8rem' }}>
                <b className="border-bottom border-dark">For Appointment:</b>
              </h6>
              <p style={{ fontSize: '0.7rem' }}>+91-7899861448</p>
            </div>
            <div className="d-flex-flex-column">
              <h6 style={{ fontSize: '0.8rem' }}>
                <b className="border-bottom border-dark">ಭೇಟಿ ಸಮಯ: </b>
              </h6>
              <p style={{ fontSize: '0.7rem' }}>
                ಬೆಳಿಗ್ಗೆ <b>10:00</b> ರಿಂದ ಮಧ್ಯಾಹ್ನ <b>02:00</b>
                <br />
                ಸಂಜೆ <b>05:00</b> ರಿಂದ <b>08:00</b> ರವರೆಗೆ
              </p>
            </div>
          </div>
        </div>

        {!facilities ? (
          <div
            className="details d-flex text-center flex-column justify-content-between px-3 pt-1"
            style={{
              margin: '5px',
              border: '1px solid black',
              borderRadius: '8px',
              fontSize: '0.8rem',
            }}
          >
            <div className="row align-items-center">
              <div className="col-3" style={{ fontSize: '0.8rem' }}>
                <img src={footerLogo} height="100" width="125" alt="" />
              </div>
              <div className="col-9 text-center">
                <h6>
                  <b className="border-bottom border-dark">
                    Facilities Available
                  </b>
                </h6>
                <p>
                  Consultation & Counseling / ECG / Nebulization / Injections &
                  Drips / Minor Procedures & Wound Dressing / Day Care
                  treatment.
                </p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

import React from 'react';

import footerLogo from '../../assets/footerlogo.png';
import Sign from '../../assets/sign.png';

export default function Footer({ sign, facilities, recovery, mrgn }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: '1.2cm',
        left: '0.9cm',
        right: '0.9cm',
      }}
    >
      <div className="page-footer">
        {sign ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ flexDirection: 'column' }}>
              <img
                src={Sign}
                alt=""
                height="75px"
                width="auto"
                style={{
                  marginTop: '3px',
                  marginBottom: '3px',
                  paddingBottom: '3px',
                  paddingTop: '3px',
                  marginLeft: '2.5em',
                }}
              />
              <h6
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '0.9rem',
                  marginRight: '1em',
                }}
              >
                <b>
                  Dr. CHETHAN NAIK <sub>M.B.B.S.,</sub>
                </b>
              </h6>
            </div>
          </div>
        ) : (
          ''
        )}
        {!recovery ? (
          <div
            className="details"
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              paddingTop: '0.25rem',
              textAlign: 'center',
              margin: '5px',
              border: '1px solid black',
              borderRadius: '8px',
            }}
          >
            <p
              style={{
                padding: '3px',
                margin: '3px',
                marginBottom: '0',
                textAlign: 'center',
                fontSize: '0.78rem',
              }}
            >
              Wish you a speedy recovery. Please bring this prescription during
              your clinic visit.
            </p>
            <p
              style={{
                padding: '3px',
                margin: '3px',
                marginBottom: '0',
                textAlign: 'center',
                fontSize: '0.8rem',
              }}
            >
              <b>In case of emergency, contact +91-9482000390.</b>
            </p>
            <div
              className="details"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                paddingTop: '0.25rem',
              }}
            >
              <div>
                <h6
                  style={{ padding: '3px', margin: '3px', fontSize: '0.8rem' }}
                >
                  <b
                    style={{
                      borderBottom: '1px solid #212529',
                    }}
                  >
                    Visiting time:
                  </b>
                </h6>
                <p
                  style={{ padding: '3px', margin: '3px', fontSize: '0.7rem' }}
                >
                  Morning 10 AM to 2 PM
                  <br />
                  Evening 5 PM to 8 PM
                </p>
              </div>
              <div>
                <h6
                  style={{ padding: '3px', margin: '3px', fontSize: '0.8rem' }}
                >
                  <b
                    style={{
                      borderBottom: '1px solid #212529',
                    }}
                  >
                    For Appointment:
                  </b>
                </h6>
                <p
                  style={{ padding: '3px', margin: '3px', fontSize: '0.7rem' }}
                >
                  +91-7899861448
                </p>
              </div>
              <div>
                <h6
                  style={{ padding: '3px', margin: '3px', fontSize: '0.8rem' }}
                >
                  <b
                    style={{
                      padding: '3px',
                      margin: '3px',
                      borderBottom: '1px solid #212529',
                    }}
                  >
                    ಭೇಟಿ ಸಮಯ:{' '}
                  </b>
                </h6>
                <p
                  style={{ padding: '3px', margin: '3px', fontSize: '0.7rem' }}
                >
                  ಬೆಳಿಗ್ಗೆ <b>10:00</b> ರಿಂದ ಮಧ್ಯಾಹ್ನ <b>02:00</b>
                  <br />
                  ಸಂಜೆ <b>05:00</b> ರಿಂದ <b>08:00</b> ರವರೆಗೆ
                </p>
              </div>
            </div>
          </div>
        ) : (
          ''
        )}

        {!facilities ? (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              paddingTop: '0.25rem',
              textAlign: 'center',
              margin: '5px',
              border: '1px solid black',
              borderRadius: '8px',
              fontSize: '0.8rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <div
                style={{
                  flex: '0 0 auto',
                  width: '25%',
                }}
              >
                <img src={footerLogo} height="100" width="125" alt="" />
              </div>
              <div style={{ textAlign: 'center', width: '75%' }}>
                <h6 style={{ padding: '3px', margin: '3px', fontSize: '14pt' }}>
                  <b
                    style={{
                      borderBottom: '1px solid #212529',
                    }}
                  >
                    Facilities Available
                  </b>
                </h6>
                <p style={{ padding: '3px', margin: '3px', fontSize: '12pt' }}>
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

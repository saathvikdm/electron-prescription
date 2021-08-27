import React from 'react';

import footerLogo from '../../assets/footerlogo.png';

export default function Footer({ sign, facilities, recovery, mrgn }) {
  return (
    <div
      style={{
        position: 'absolute',
        top: '57cm',
        left: '0.9cm',
        right: '0.9cm',
      }}
    >
      <div className="page-footer">
        {sign ? (
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{ flexDirection: 'column' }}>
              {/* <img
                src={footerLogo}
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
              /> */}
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
        <p
          style={{
            padding: '3px',
            margin: '3px',
            marginBottom: '0',
            textAlign: 'center',
            fontSize: '9pt',
            fontWeight: 500,
          }}
        >
          <i>
            Wish you a speedy recovery. Please bring this prescription during
            your clinic visit. Emergency contact +91-9482000390.
          </i>
        </p>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            borderRadius: '8px',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            paddingTop: '0.25rem',
            textAlign: 'center',
            margin: '5px',
          }}
        >
          <h6 style={{ padding: '3px', margin: '3px', fontSize: '11pt' }}>
            <b>Facilities Available</b>
          </h6>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '9pt', margin: '2px' }}>
              Consultation & Counseling / ECG / Nebulization / Injections &
              Drips / Minor Procedures & Wound Dressing / Day Care treatment /
              Basic Laboratory.
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '8.5pt', fontWeight: 500, margin: '2px' }}>
              Visiting time: 10:00 AM to 02:00 PM & 05:00 PM to 08:00 PM. ಭೇಟಿ
              ಸಮಯ: ಬೆಳಿಗ್ಗೆ 10:00 ರಿಂದ ಮಧ್ಯಾಹ್ನ 02:00 ಮತ್ತು ಸಂಜೆ 05:00 ರಿಂದ
              08:00 ರವರೆಗೆ
            </p>
          </div>
        </div>
        {/* {!recovery ? (
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
                <h6 style={{ padding: '3px', margin: '3px', fontSize: '11pt' }}>
                  <b
                    style={{
                      borderBottom: '1px solid #212529',
                    }}
                  >
                    Visiting time:
                  </b>
                </h6>
                <p style={{ padding: '3px', margin: '3px', fontSize: '10pt' }}>
                  Morning 10 AM to 2 PM
                  <br />
                  Evening 5 PM to 8 PM
                </p>
              </div>
              <div>
                <h6 style={{ padding: '3px', margin: '3px', fontSize: '11pt' }}>
                  <b
                    style={{
                      borderBottom: '1px solid #212529',
                    }}
                  >
                    For Appointment:
                  </b>
                </h6>
                <p style={{ padding: '3px', margin: '3px', fontSize: '10pt' }}>
                  +91-7899861448
                </p>
              </div>
              <div>
                <h6 style={{ padding: '3px', margin: '3px', fontSize: '11pt' }}>
                  <b
                    style={{
                      padding: '3px',
                      margin: '3px',
                      borderBottom: '1px solid #212529',
                    }}
                  >
                    {' '}
                  </b>
                </h6>
                <p
                  style={{ padding: '3px', margin: '3px', fontSize: '10pt' }}
                ></p>
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
            </div>
          </div>
        ) : (
          ''
        )} */}
      </div>
    </div>
  );
}

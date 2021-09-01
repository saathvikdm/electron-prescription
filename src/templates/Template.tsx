import React, { useRef, useState, useEffect } from 'react';

import PrintHeader from '../components/PrintHeader';
import HeaderNames from '../components/HeaderNames';
import DynamicFormElement from '../components/DynamicFormElement';
import Footer from '../components/Footer';

import GetDate from '../utils/GetDate';
import Watermark from '../components/Watermark';

// const ref = React.createRef();

export default function Template({ data, back, saveData, followUp }) {
  const pageRef = useRef();

  const date = GetDate();

  const [pgHeight, setpgHeight] = useState(0);

  window.onafterprint = function () {
    saveData(data);
  };

  console.log(data);

  useEffect(() => {
    setpgHeight(pageRef.current.getBoundingClientRect().height);
  }, []);

  // console.log(pageRef.current);

  return data ? (
    <div className="container d-flex align-items-center flex-column mb-3">
      <div id="hidden">
        <button
          className="btn btn-dark mx-1 my-3 no-print"
          // onClick={(e) => e.preventDefault()}
          type="button"
          onClick={(e) => back()}
        >
          Go Back
        </button>

        <button
          className="btn btn-success mx-1 my-3 no-print"
          type="button"
          onClick={() => {
            window.print();
          }}
        >
          Print Prescription
        </button>

        <button
          className="btn btn-primary mx-1 my-3 no-print"
          type="button"
          onClick={(e) => followUp(data)}
        >
          Follow Up
        </button>
      </div>

      <div
        className="prescription-container bg-white"
        style={{
          padding: '2em',
          margin: '0',
          width: '21cm',
          // height: '30.5cm',
          position: 'relative',
          zIndex: -1,
        }}
      >
        {/* <ReactHeight onHeightReady={(height) => console.log(height)}>
          <div style={{ height: '19cm' }}></div>
        </ReactHeight> */}
        <div
          className="prescription"
          style={{
            // height: '60.5cm',
            height: '30.5cm',
            border: '2px solid black',
          }}
        >
          <div id="presContainer" ref={pageRef}>
            <PrintHeader />
            <HeaderNames />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '1rem',
                paddingRight: '3rem',
                paddingTop: '0.25em',
                margin: '5px',
                border: '1px solid black',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p
                  style={{
                    padding: '3px',
                    margin: '3px',
                    marginBottom: '10px',
                    fontSize: '12pt',
                  }}
                >
                  <b>Patient Name:</b>{' '}
                  {data.paitentName ? data.paitentName : 'Mr. Chethan'}
                  <br />
                  <b>ID No:</b> {data.idNumber ? data.idNumber : '20210801'}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p
                  style={{
                    padding: '3px',
                    margin: '3px',
                    marginBottom: '10px',
                    fontSize: '12pt',
                  }}
                >
                  <b>Age / Sex :</b>{' '}
                  {data.age && data.sex
                    ? `${data.age} ${data.ageType} / ${data.sex}`
                    : ''}
                  <br />
                  <b>Date:</b>{' '}
                  {date &&
                    `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(
                      4,
                      8
                    )}`}
                </p>
              </div>
            </div>
            <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <h5
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                }}
              >
                Clinical / Provisional / Differential Diagnosis:{' '}
              </h5>
              <p
                style={{
                  padding: '3px',
                  margin: '3px',
                }}
              >
                {data.diagnosis ? data.diagnosis : 'N/A'}
              </p>
            </div>

            <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <h5
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                }}
              >
                Co-Morbidities:
              </h5>
              <p
                style={{
                  padding: '3px',
                  margin: '3px',
                }}
              >
                {data.problems ? data.problems : 'N/A'}
              </p>
            </div>

            <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <h5
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                }}
              >
                Complaints:{' '}
              </h5>
              <p
                style={{
                  padding: '3px',
                  margin: '3px',
                }}
              >
                {data.complaints ? data.complaints : 'N/A'}
              </p>
            </div>

            <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <h5
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                }}
              >
                Vitals:{' '}
              </h5>
              <div
                className="vitals-block"
                style={{
                  padding: '3px',
                  margin: '3px',
                  display: 'flex',
                  flexWrap: 'wrap',
                  paddingLeft: '0.25rem',
                  paddingRight: '0.25rem',
                }}
              >
                <div
                  style={{
                    flex: '0 0 auto',
                    width: '20%',
                    fontSize: '11pt',
                  }}
                >
                  BP: {data.vitals ? data.vitals.bp : '50'} mmHg
                </div>
                <div
                  style={{
                    flex: '0 0 auto',
                    width: '20%',
                    fontSize: '11pt',
                  }}
                >
                  PR: {data.vitals ? data.vitals.pr : '50'} bpm
                </div>
                <div
                  style={{
                    flex: '0 0 auto',
                    width: '20%',
                    fontSize: '11pt',
                  }}
                >
                  SpO2: {data.vitals ? data.vitals.sp02 : '50'}%
                </div>
                <div
                  style={{
                    flex: '0 0 auto',
                    width: '20%',
                    fontSize: '11pt',
                  }}
                >
                  Temp: {data.vitals ? data.vitals.temp : '50'}&#8457;
                </div>
                <div
                  style={{
                    flex: '0 0 auto',
                    width: '20%',
                    fontSize: '11pt',
                  }}
                >
                  GRBS: {data.vitals ? data.vitals.temp : '50'} mg/dl
                </div>
              </div>
            </div>

            <DynamicFormElement inputName="Findings" data={data.findings} />

            <DynamicFormElement
              inputName="Treatment Given"
              data={data.treatment}
            />

            <div
              style={{
                marginRight: '0.5rem',
                marginLeft: '0.5rem',
              }}
            >
              <h5
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '12pt',
                  fontWeight: 700,
                  wordWrap: 'break-word',
                }}
              >
                Investigations Adviced:
              </h5>

              <p
                style={{
                  padding: '3px',
                  margin: '3px',
                  paddingLeft: '0.5rem',
                  fontSize: '12pt',
                }}
              >
                {data.investigations ? data.investigations : 'N/A'}
              </p>
            </div>

            {pgHeight > 990 ? (
              <>
                {' '}
                <div
                  style={{
                    position: 'absolute',
                    top: '33cm',
                  }}
                >
                  <DynamicFormElement inputName="Advice" data={data.advice} />
                </div>
                <h6 style={{ position: 'absolute', top: '60cm', right: '2cm' }}>
                  Doctor's Signature
                </h6>
              </>
            ) : (
              <>
                {' '}
                <DynamicFormElement inputName="Advice" data={data.advice} />
                <h6
                  style={{ position: 'absolute', top: '26.5cm', right: '2cm' }}
                >
                  Doctor's Signature
                </h6>{' '}
              </>
            )}
          </div>
          <div>
            {/* Footer with sign is of 337px Height */}
            <Footer mrgn={pgHeight} />
          </div>
          <Watermark />
        </div>

        {/*Page 2 */}
        {pgHeight > 990 ? (
          <div
            style={{
              padding: '1.25cm 0',
              margin: '0',
              height: '30.5cm',
              position: 'relative',
              zIndex: -1,
            }}
          >
            <div
              className="prescription"
              style={{
                // height: '60.5cm',
                height: '30.5cm',
                border: '2px solid black',
              }}
            >
              <span />
            </div>
            <Watermark />
          </div>
        ) : (
          ''
        )}

        {/*Follow up page */}
        {data.followUp ? (
          <div
            style={{
              padding: `${pgHeight > 990 ? '1.6cm 0' : '0.6cm 0'}`,
              margin: `${pgHeight > 990 ? '1.6cm 0' : '0.6cm 0'}`,
              height: '30.5cm',
              position: 'relative',
              zIndex: -1,
            }}
          >
            <div
              className="prescription"
              style={{
                // height: '60.5cm',
                height: '30.5cm',
                border: '2px solid black',
              }}
            >
              <div
                style={{
                  marginTop: '1rem',
                  marginRight: '0.5rem',
                  marginLeft: '0.5rem',
                }}
              >
                <h5
                  style={{
                    padding: '3px',
                    margin: '3px',
                    fontSize: '12pt',
                    fontWeight: 700,
                    wordWrap: 'break-word',
                  }}
                >
                  Follow Up:
                </h5>

                <p
                  style={{
                    padding: '3px',
                    margin: '3px',
                    paddingLeft: '0.5rem',
                    fontSize: '12pt',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {data.followUp ? data.followUp : 'Review after 3 days.'}
                </p>
                <h6
                  style={{
                    position: 'absolute',
                    bottom: '0.5cm',
                    right: '2cm',
                  }}
                >
                  Doctor's Signature
                </h6>
              </div>
            </div>
            <Watermark />
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  ) : (
    ''
  );
}

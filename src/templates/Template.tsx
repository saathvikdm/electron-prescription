import React, { useState } from 'react';

import ReactToPrint from 'react-to-print';
import { ReactHeight } from 'react-height';

import PrintHeader from '../components/PrintHeader';
import HeaderNames from '../components/HeaderNames';
import Footer from '../components/Footer';
import DynamicFormInput from '../components/DynamicFormInput';

import GetDate from '../utils/GetDate';

const ref = React.createRef();

export default function Template({ data, back, saveData }) {
  const DEFAULT_PAGE_HEIGHT = 717; // 19cm Page Height in pixels
  const FOOTER_HEIGHT = 337; //height of footer in px

  let pageHeight = 0;

  const date = GetDate();

  const [pgHeight, setpgHeight] = useState(330);

  // const printFunc = useReactToPrint({
  //   copyStyles: true,
  //   pageStyle: () => 'size: 14.8cm 21cm',
  //   content: () => ref.current,
  //   onAfterPrint: () => {
  //     saveData(data);
  //   },
  // });

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
        {/* <ReactToPrint
        trigger={() => (
          <button className="btn btn-success mx-1 my-3" type="button">
            Print Prescription
          </button>
        )}
        content={() => ref.current}
        onAfterPrint={() => saveData(data)}
      /> */}

        <button
          className="btn btn-success mx-1 my-3 no-print"
          type="button"
          onClick={() => window.print()}
        >
          Print Prescription
        </button>
      </div>

      <div
        className="prescription-container bg-white"
        ref={ref}
        style={{
          padding: '2em',
          margin: '0',
          width: '21cm',
          height: '62cm',
          position: 'relative',
          zIndex: -1,
        }}
      >
        {/* <ReactHeight onHeightReady={(height) => console.log(height)}>
          <div style={{ height: '19cm' }}></div>
        </ReactHeight> */}
        <div
          className="prescription"
          style={{ height: '61cm', border: '2px solid black' }}
        >
          <ReactHeight
            onHeightReady={(height) => {
              console.log('height', height);
              console.log('Calc', height - DEFAULT_PAGE_HEIGHT);
              pageHeight = height;
              let calc = (
                (height + FOOTER_HEIGHT) /
                DEFAULT_PAGE_HEIGHT
              ).toFixed(0);
              console.log('No. of pages: ', calc);

              setpgHeight(pgHeight - (height - DEFAULT_PAGE_HEIGHT));
              console.log(pgHeight - (pageHeight - DEFAULT_PAGE_HEIGHT));
            }}
          >
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
                    ? `${data.age}y/${data.sex}`
                    : '43 years / Male'}
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
                  textDecoration: 'underline',
                }}
              >
                Clinical / Provisional / Differential Diagnosis:{' '}
              </h5>
              <ol>
                {data.diagnosis ? (
                  data.diagnosis.map((diag, i) => {
                    return (
                      <li key={i} style={{ fontSize: '0.9em' }}>
                        {diag.diagnosis}
                      </li>
                    );
                  })
                ) : (
                  <p>N/A</p>
                )}
              </ol>
            </div>

            <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <h5
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '0.9rem',
                  textDecoration: 'underline',
                }}
              >
                Co-Morbidities:
              </h5>
              <ol>
                {data.problems ? (
                  data.problems.map((prob, i) => {
                    return (
                      <li key={i} style={{ fontSize: '0.9em' }}>
                        {prob.knownProblem}
                      </li>
                    );
                  })
                ) : (
                  <p>N/A</p>
                )}
              </ol>
            </div>

            <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <h5
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '0.9rem',
                  textDecoration: 'underline',
                }}
              >
                Complaints:{' '}
              </h5>
              <ol>
                {data.complaints ? (
                  data.complaints.map((complaint, i) => {
                    return (
                      <li key={i} style={{ fontSize: '0.9em' }}>
                        {complaint.chiefComplaints}
                      </li>
                    );
                  })
                ) : (
                  <p>N/A</p>
                )}
              </ol>
            </div>

            <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <h5
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '0.9rem',
                  textDecoration: 'underline',
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
                  SpO2: {data.vitals ? data.vitals.spo2 : '50'}%
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

            <DynamicFormInput inputName="Findings" data={data.treatment} />

            <DynamicFormInput
              inputName="Treatment Given"
              data={data.treatment}
            />

            <div style={{ marginLeft: '0.5rem', marginRight: '0.5rem' }}>
              <h5
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '12pt',
                  textDecoration: 'underline',
                }}
              >
                Investigations Adviced:
              </h5>
              <ol>
                {data.advice ? (
                  data.advice.map((adv, index) => {
                    return (
                      <li style={{ fontSize: '0.9em' }} key={index}>
                        {adv.treatmentAdviced}
                      </li>
                    );
                  })
                ) : (
                  <p>N/A</p>
                )}
              </ol>
            </div>

            <DynamicFormInput inputName="Advice" data={data.treatment} />

            <div
              style={{
                marginBottom: '3rem',
                marginRight: '0.5rem',
                marginLeft: '0.5rem',
                position: 'absolute',
                top: '31.5cm',
              }}
            >
              <h5
                style={{
                  padding: '3px',
                  margin: '3px',
                  fontSize: '12pt',
                  textDecoration: 'underline',
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
                }}
              >
                {data.followUp ? data.followUp : 'Review after 3 days.'}
              </p>
            </div>
          </ReactHeight>
          <div>
            {/* Footer with sign is of 337px Height */}
            <Footer mrgn={pgHeight} />
          </div>

          {/* <div className="credsfooter">Wishing you a speedy recovery!</div> */}
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

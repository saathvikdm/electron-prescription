import React from 'react';

import { useReactToPrint } from 'react-to-print';
import { ReactHeight } from 'react-height';

import PrintHeader from '../components/PrintHeader';
import HeaderNames from '../components/HeaderNames';
import Footer from '../components/Footer';

const ref = React.createRef();

/*
  .page-footer {
    padding-top: 5cm;
  }
*/

export default function Template({ data, back, saveData }) {
  const printFunc = useReactToPrint({
    pageStyle: () => 'size: 14.8cm 21cm',
    content: () => ref.current,
    onAfterPrint: () => {
      saveData(data);
    },
  });

  return data ? (
    <div className="container d-flex align-items-center flex-column mb-3">
      <button
        className="btn btn-dark mx-1 my-3"
        // onClick={(e) => e.preventDefault()}
        type="button"
        onClick={(e) => back()}
      >
        Go Back
      </button>
      <button
        className="btn btn-success mx-1 my-3"
        // onClick={(e) => e.preventDefault()}
        type="button"
        onClick={(e) => printFunc(e)}
      >
        Print Prescription
      </button>
      <div
        className="prescription-container bg-white "
        ref={ref}
        style={{
          border: '1px solid black',
          padding: '2em',
          margin: '0',
          width: '14.8cm',
        }}
      >
        {/* <ReactHeight onHeightReady={(height) => console.log(height)}>
          <div style={{ height: '19cm' }}></div>
        </ReactHeight> */}
        <div className="prescription" style={{ border: '2px solid black' }}>
          <ReactHeight onHeightReady={(height) => console.log(height)}>
            <PrintHeader />
            <HeaderNames />

            <div
              className="details d-flex justify-content-between px-3 pt-1 pe-5"
              style={{
                margin: '5px',
                border: '1px solid black',
                borderRadius: '8px',
              }}
            >
              <div className="d-flex-flex-column">
                <p className="mb-0" style={{ fontSize: '0.8rem' }}>
                  Patient Name:{' '}
                  {data.paitentName ? data.paitentName : 'Mr. Chethan'}
                  <br />
                  ID No: {data.idNumber ? data.idNumber : '20210801'}
                </p>
              </div>
              <div className="d-flex-flex-column">
                <p className="mb-0" style={{ fontSize: '0.8rem' }}>
                  Age / Sex :{' '}
                  {data.age && data.sex ? `${data.age}y/${data.sex}` : '43y/M'}
                  <br />
                  OP No.: {data.opNumber ? data.opNumber : '01'}
                </p>
              </div>
            </div>
            <div className="mx-2">
              <h5
                className="border-bottom border-dark"
                style={{ fontSize: '0.9rem' }}
              >
                Previous Known Problems:
              </h5>
              <ol>
                {data.problems ? (
                  data.problems.map((prob) => {
                    return (
                      <li style={{ fontSize: '0.8rem' }}>
                        {prob.knownProblem}
                      </li>
                    );
                  })
                ) : (
                  <p>N/A</p>
                )}
              </ol>
            </div>
            <div className="mx-2">
              <h5
                className="border-bottom border-dark"
                style={{ fontSize: '0.9rem' }}
              >
                Chief Complaints:{' '}
              </h5>
              <ol>
                {data.complaints ? (
                  data.complaints.map((complaint) => {
                    return (
                      <li style={{ fontSize: '0.8rem' }}>
                        {complaint.chiefComplaints}
                      </li>
                    );
                  })
                ) : (
                  <p>N/A</p>
                )}
              </ol>
            </div>
            <div className="mx-2">
              <h5
                className="border-bottom border-dark"
                style={{ fontSize: '0.9rem' }}
              >
                Clinical / Provisional / Differential Diagnosis:{' '}
              </h5>
              <ol>
                {data.diagnosis ? (
                  data.diagnosis.map((diag) => {
                    return (
                      <li style={{ fontSize: '0.8rem' }}>{diag.diagnosis}</li>
                    );
                  })
                ) : (
                  <p>N/A</p>
                )}
              </ol>
            </div>
            <div className="mx-2">
              <h4
                className="border-bottom border-dark"
                style={{ fontSize: '0.9rem' }}
              >
                Examination:{' '}
              </h4>
              <h5
                className="border-bottom border-dark"
                style={{ fontSize: '0.9rem' }}
              >
                Vitals:{' '}
              </h5>
              <div className="row ps-1 vitals-block">
                <div
                  className="col-3"
                  style={{ fontSize: '0.8rem' }}
                  style={{ fontSize: '0.8rem' }}
                >
                  BP: {data.vitals ? data.vitals.bp : '50'}mmHg
                </div>
                <div className="col-3" style={{ fontSize: '0.8rem' }}>
                  PR: {data.vitals ? data.vitals.pr : '50'}bpm
                </div>
                <div className="col-3" style={{ fontSize: '0.8rem' }}>
                  SpO2: {data.vitals ? data.vitals.spo2 : '50'}%
                </div>
                <div className="col-3" style={{ fontSize: '0.8rem' }}>
                  Temp: {data.vitals ? data.vitals.temp : '50'}&#8457;
                </div>
              </div>
              <p className="mb-0 ps-1" style={{ fontSize: '0.8rem' }}>
                GPE - {data.vitals ? data.vitals.gpe : '50'}
              </p>
              <p className="mb-0 ps-1" style={{ fontSize: '0.8rem' }}>
                CVS - {data.vitals ? data.vitals.cvs : '50'}
              </p>
              <p className="mb-0 ps-1" style={{ fontSize: '0.8rem' }}>
                RS - {data.vitals ? data.vitals.rs : '50'}
              </p>
              <p className="mb-0 ps-1" style={{ fontSize: '0.8rem' }}>
                P/A - {data.vitals ? data.vitals.pa : '50'}
              </p>
              <p className="mb-0 ps-1" style={{ fontSize: '0.8rem' }}>
                CNS - {data.vitals ? data.vitals.cns : '50'}
              </p>
              <p className="mb-0 ps-1" style={{ fontSize: '0.8rem' }}>
                L/E - {data.vitals ? data.vitals.le : '50'}
              </p>
            </div>

            <div className="mx-2">
              <h5
                className="border-bottom border-dark"
                style={{ fontSize: '0.8rem' }}
              >
                Treatment Given:
              </h5>

              <ol>
                {data.treatment ? (
                  data.treatment.map((treat, index) => {
                    return (
                      <li style={{ fontSize: '0.8rem' }} key={index}>
                        {treat.treatmentGiven}
                      </li>
                    );
                  })
                ) : (
                  <p>N/A</p>
                )}
              </ol>
            </div>
            <div className="mx-2">
              <h5
                className="border-bottom border-dark"
                style={{ fontSize: '0.9rem' }}
              >
                Treatment Adviced:
              </h5>
              <ol>
                {data.advice ? (
                  data.advice.map((adv, index) => {
                    return (
                      <li style={{ fontSize: '0.8rem' }} key={index}>
                        {adv.treatmentAdviced}
                      </li>
                    );
                  })
                ) : (
                  <p>N/A</p>
                )}
              </ol>
            </div>
            <div className="mx-2 mb-5">
              <h5
                className="border-bottom border-dark"
                style={{ fontSize: '0.8rem' }}
              >
                Follow Up:
              </h5>

              <p className="ps-1" style={{ fontSize: '0.8rem' }}>
                {data.followUp ? data.followUp : 'Review after 3 days.'}
              </p>
            </div>

            <Footer sign />
            {/* <div className="credsfooter">Wishing you a speedy recovery!</div> */}
          </ReactHeight>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

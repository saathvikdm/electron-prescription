import React from 'react';
import { useReactToPrint } from 'react-to-print';

import footerLogo from '../../assets/footerlogo.png';
import drLogo from '../../assets/drlogo.png';
import clinicLogo from '../../assets/cliniclogo.png';

const ref = React.createRef();

export default function Template({ data, back }) {
  const printFunc = useReactToPrint({
    pageStyle: () => 'size: 14.8cm 21cm',
    content: () => ref.current,
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
        <div className="prescription" style={{ border: '2px solid black' }}>
          <div className="d-flex justify-content-between p-3">
            <img src={drLogo} alt="" height="100px" width="auto" />
            <div className="d-flex flex-column justify-content-center align-items-center">
              <p className="text-center px-1" style={{ fontSize: '1rem' }}>
                <b>Vijayalaxmi Clinic, Diagnostics And Counseling Centre.</b>
              </p>
              <p className="text-center" style={{ fontSize: '0.6em' }}>
                Near Raghu Stickers, Dr.B.R.Ambedkar Road(Market Road),
                <br />
                Chikkamagaluru – 577101.
              </p>
            </div>
            <img
              src={clinicLogo}
              className="mt-2"
              height="70px"
              width="100px"
              alt=""
            />
          </div>
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
                    <li style={{ fontSize: '0.8rem' }}>{prob.knownProblem}</li>
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
          <div className="page-footer">
            <div
              className=" details d-flex text-center flex-column justify-content-between px-3 pt-1"
              style={{
                margin: '5px',
                border: '1px solid black',
                borderRadius: '8px',
              }}
            >
              <p className="mb-0  text-center" style={{ fontSize: '0.78rem' }}>
                Wish you a speedy recovery. Please bring this prescription
                during your clinic visit.
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
                    <b className="border-bottom border-dark">
                      For Appointment:
                    </b>
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
                    Consultation & Counseling / ECG / Nebulization / Injections
                    & Drips / Minor Procedures & Wound Dressing / Day Care
                    treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

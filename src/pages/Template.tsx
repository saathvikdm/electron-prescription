import React from 'react';
import Pdf from 'react-to-pdf';
import Header from '../components/Header';
import footerLogo from '../../assets/footerlogo.png';

const ref = React.createRef();

export default function Template({ data }) {
  console.log(data);
  return data ? (
    <div className="container d-flex align-items-center flex-column mb-3">
      <Pdf targetRef={ref} filename={`${Date.now()}`}>
        {({ toPdf }) => (
          <button
            className="btn btn-success mx-1 my-3"
            // onClick={(e) => e.preventDefault()}
            type="button"
            onClick={toPdf}
          >
            Download PDF
          </button>
        )}
      </Pdf>
      <div
        ref={ref}
        className="prescription-container"
        style={{ width: '21cm', border: '1px solid black', padding: '2em' }}
      >
        <div className="prescription" style={{ border: '2px solid black' }}>
          <Header />
          <div className="details d-flex justify-content-between px-3 pt-1">
            <div className="d-flex-flex-column">
              <h5>
                <b>
                  <i>
                    Dr. CHETHAN NAIK <sub>M.B.B.S.,</sub>
                  </i>
                </b>
              </h5>
              <p>
                General Practitioner,
                <br />
                KMC Reg.No: 97237
                <br />
                E-mail: drchethannaik@gmail.com
              </p>
            </div>
            <div className="d-flex-flex-column">
              <h5>
                <b>
                  <i>
                    ಡಾ. ಚೇತನ್ ನಾಯ್ಕ್ <sub>ಎಎಂ‌.ಬಿ.ಬಿ.ಎಸ್.,</sub>
                  </i>
                </b>
              </h5>
              <p>
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
              <p className="mb-0">
                Patient Name:{' '}
                {data.paitentName ? data.paitentName : 'Mr. Chethan'}
                <br />
                ID No: {data.idNumber ? data.idNumber : '20210801'}
              </p>
            </div>
            <div className="d-flex-flex-column">
              <p className="mb-0">
                Age / Sex :{' '}
                {data.age && data.sex ? `${data.age}y/${data.sex}` : '43y/M'}
                <br />
                OP No.: {data.opNumber ? data.opNumber : '01'}
              </p>
            </div>
          </div>
          <div className="m-2 pt-2">
            <h5 className="border-bottom border-dark">
              Previous Known Problems:
            </h5>
            <ol>
              {data.problems ? (
                data.problems.map((prob) => {
                  return <li>{prob.knownProblem}</li>;
                })
              ) : (
                <p>N/A</p>
              )}
            </ol>
          </div>
          <div className="m-2 pt-2">
            <h5 className="border-bottom border-dark">Chief Complaints: </h5>
            <ol>
              {data.complaints ? (
                data.complaints.map((complaint) => {
                  return <li>{complaint.chiefComplaints}</li>;
                })
              ) : (
                <p>N/A</p>
              )}
            </ol>
          </div>
          <div className="m-2 pt-2">
            <h5 className="border-bottom border-dark">
              Clinical / Provisional / Differential Diagnosis:{' '}
            </h5>
            <ol>
              {data.diagnosis ? (
                data.diagnosis.map((diag) => {
                  return <li>{diag.diagnosis}</li>;
                })
              ) : (
                <p>N/A</p>
              )}
            </ol>
          </div>
          <div className="m-2 pt-2">
            <h4 className="border-bottom border-dark">Examination: </h4>
            <h5 className="border-bottom border-dark">Vitals: </h5>
            <div className="row ps-1">
              <div className="col-3">
                BP: {data.vitals ? data.vitals.bp : '50'}mmHg
              </div>
              <div className="col-3">
                PR: {data.vitals ? data.vitals.pr : '50'}bpm
              </div>
              <div className="col-3">
                SpO2: {data.vitals ? data.vitals.spo2 : '50'}%
              </div>
              <div className="col-3">
                Temp: {data.vitals ? data.vitals.temp : '50'}&#8457;
              </div>
            </div>
            <p className="mb-0 ps-1">
              GPE - {data.vitals ? data.vitals.gpe : '50'}
            </p>
            <p className="mb-0 ps-1">
              CVS - {data.vitals ? data.vitals.cvs : '50'}
            </p>
            <p className="mb-0 ps-1">
              RS - {data.vitals ? data.vitals.rs : '50'}
            </p>
            <p className="mb-0 ps-1">
              P/A - {data.vitals ? data.vitals.pa : '50'}
            </p>
            <p className="mb-0 ps-1">
              CNS - {data.vitals ? data.vitals.cns : '50'}
            </p>
            <p className="mb-0 ps-1">
              L/E - {data.vitals ? data.vitals.le : '50'}
            </p>
          </div>
          <div className="m-2 pt-2">
            <h5 className="border-bottom border-dark">Treatment Given:</h5>

            <ol>
              {data.treatment ? (
                data.treatment.map((treat) => {
                  return <li>{treat.treatmentGiven}</li>;
                })
              ) : (
                <p>N/A</p>
              )}
            </ol>
          </div>
          <div className="m-2 pt-2">
            <h5 className="border-bottom border-dark">Treatment Adviced:</h5>

            <ol>
              {data.advice ? (
                data.advice.map((adv) => {
                  return <li>{adv.treatmentAdviced}</li>;
                })
              ) : (
                <p>N/A</p>
              )}
            </ol>
          </div>
          <div className="m-2 pt-2 mb-5">
            <h5 className="border-bottom border-dark">Follow Up:</h5>

            <p className="ps-1">
              {data.followUp ? data.followUp : 'Review after 3 days.'}
            </p>
          </div>
          <div
            className="details d-flex text-center flex-column justify-content-between px-3 pt-1"
            style={{
              margin: '5px',
              border: '1px solid black',
              borderRadius: '8px',
            }}
          >
            <p className="mb-0  text-center">
              Wish you a speedy recovery. Please bring this prescription during
              your clinic visit.
            </p>
            <p className="mb-0  text-center">
              In case of emergency, contact +91-9482000390.
            </p>
            <div className="details d-flex justify-content-between px-3 pt-1">
              <div className="d-flex-flex-column">
                <h6>
                  <b className="border-bottom border-dark">Visiting time:</b>
                </h6>
                <p>
                  Morning 10 AM to 2 PM
                  <br />
                  Evening 5 PM to 8 PM
                </p>
              </div>
              <div className="d-flex-flex-column">
                <h6>
                  <b className="border-bottom border-dark">For Appointment:</b>
                </h6>
                <p>+91-7899861448</p>
              </div>
              <div className="d-flex-flex-column">
                <h6>
                  <b className="border-bottom border-dark">ಭೇಟಿ ಸಮಯ: </b>
                </h6>
                <p>
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
            }}
          >
            <div className="row align-items-center">
              <div className="col-3">
                <img src={footerLogo} height="125" width="150" alt="" />
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
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

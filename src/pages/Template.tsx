import React from 'react';
import Header from '../components/Header';
import footerLogo from '../../assets/footerlogo.png';
export default function Template({
  paitentName,
  idNumber,
  age,
  sex,
  opNumber,
  problems,
  complaints,
  diagnosis,
  vitals,
  treatment,
  advice,
  followUp,
}) {
  return (
    <div
      className="container d-flex align-items-center flex-column mb-3"
      style={{ paddingLeft: '200px' }}
    >
      <div
        className="prescription-container"
        style={{ width: '21cm', border: '1px solid black', padding: '2em' }}
      >
        <div className="prescription" style={{ border: '2px solid black' }}>
          <Header />
          <div className="details d-flex justify-content-between px-3 pt-1">
            <div className="d-flex-flex-column">
              <h6>
                <b>Dr. CHETHAN NAIK (M.B.B.S.,)</b>
              </h6>
              <p>
                General Practitioner,
                <br />
                KMC Reg.No: 97237
                <br />
                E-mail: drchethannaik@gmail.com
              </p>
            </div>
            <div className="d-flex-flex-column">
              <h6>
                <b>ಡಾ. ಚೇತನ್ ನಾಯ್ಕ್ (ಎಮ್‌.ಬಿ.ಬಿ.ಎಸ್.,)</b>
              </h6>
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
                Patient Name: {paitentName ? paitentname : 'Mr. Chethan'}
                <br />
                ID No: {idNumber ? idNumber : '20210801'}
              </p>
            </div>
            <div className="d-flex-flex-column">
              <p className="mb-0">
                Age / Sex : {age && sex ? `${age}y/${sex}` : '43y/M'}
                <br />
                OP No.: {opNumber ? opNumber : '01'}
              </p>
            </div>
          </div>
          <div className="m-2 pt-2">
            <h5 className="border-bottom border-dark">
              Previous Known Problems:
            </h5>
            <ol>
              {problems ? (
                problems.map((prob) => {
                  return <li>{prob.problems}</li>;
                })
              ) : (
                <p>N/A</p>
              )}
            </ol>
          </div>
          <div className="m-2 pt-2">
            <h5 className="border-bottom border-dark">Chief Complaints: </h5>
            <ol>
              {complaints ? (
                complaints.map((complaint) => {
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
              {diagnosis ? (
                diagnosis.map((diag) => {
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
              <div className="col-3">BP: {vitals ? vitals.bp : '50'}mmHg</div>
              <div className="col-3">PR: {vitals ? vitals.pr : '50'}bpm</div>
              <div className="col-3">SpO2: {vitals ? vitals.spo2 : '50'}%</div>
              <div className="col-3">
                Temp: {vitals ? vitals.temp : '50'}&#8457;
              </div>
            </div>
            <p className="mb-0 ps-1">GPE - {vitals ? vitals.gpe : '50'}</p>
            <p className="mb-0 ps-1">CVS - {vitals ? vitals.cvs : '50'}</p>
            <p className="mb-0 ps-1">RS - {vitals ? vitals.rs : '50'}</p>
            <p className="mb-0 ps-1">P/A - {vitals ? vitals.pa : '50'}</p>
            <p className="mb-0 ps-1">CNS - {vitals ? vitals.cns : '50'}</p>
            <p className="mb-0 ps-1">L/E - {vitals ? vitals.le : '50'}</p>
          </div>
          <div className="m-2 pt-2">
            <h5 className="border-bottom border-dark">Treatment Given:</h5>

            <ol>
              {treatment ? (
                treatment.map((treat) => {
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
              {advice ? (
                advice.map((adv) => {
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
              {followUp ? followUp : 'Review after 3 days.'}
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
  );
}

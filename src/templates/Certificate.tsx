import React from 'react';
import { useReactToPrint } from 'react-to-print';

import Footer from '../components/Footer';
import PrintHeader from '../components/PrintHeader';
import HeaderNames from '../components/HeaderNames';

const ref = React.createRef();

export default function Certificate({ data, back, saveData }) {
  const printFunc = useReactToPrint({
    pageStyle: () => 'size: 14.8cm 21cm',
    content: () => ref.current,
    onAfterPrint: () => {
      saveData(data);
    },
  });

  return (
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
        className="prescription-container bg-white"
        ref={ref}
        style={{
          border: '1px solid black',
          padding: '2em',
          margin: '0',
          width: '14.8cm',
        }}
      >
        <div className="prescription" style={{ border: '2px solid black' }}>
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
                Patient Name:Mr. Chethan
                <br />
                ID No: 20210801
              </p>
            </div>
            <div className="d-flex-flex-column">
              <p className="mb-0" style={{ fontSize: '0.8rem' }}>
                Age / Sex :43y/M
                <br />
                OP No.: 01
              </p>
            </div>
          </div>
          <h1>Certificate</h1>
          <Footer />
        </div>
      </div>
    </div>
  );
}

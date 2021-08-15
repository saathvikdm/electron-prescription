import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ReactHeight } from 'react-height';

import PrintHeader from '../components/PrintHeader';
import Footer from '../components/Footer';

const ref = React.createRef();

export default function Billing({ data, back, saveData }) {
  const DEFAULT_PAGE_HEIGHT = 717; // 19cm Page Height in pixels
  const FOOTER_HEIGHT = 200; //height of footer in px

  const [pgHeight, setpgHeight] = useState(330);

  const printFunc = useReactToPrint({
    pageStyle: () => 'size: 14.8cm 21cm',
    content: () => ref.current,
    onAfterPrint: () => {
      saveData(data);
    },
  });

  console.log(data);

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
        Print Bill
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
          <ReactHeight
            onHeightReady={(height) => {
              setpgHeight(DEFAULT_PAGE_HEIGHT - (height + FOOTER_HEIGHT) - 40);
            }}
          >
            <PrintHeader />

            <div
              className="details d-flex justify-content-between px-3 pe-5"
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
            <table className="table table-bordered mt-1">
              <thead>
                <tr>
                  <th scope="col" style={{ fontSize: '0.8em' }}>
                    Sl. No
                  </th>
                  <th scope="col" style={{ fontSize: '0.8em' }} colSpan="2">
                    Particulars
                  </th>
                  <th scope="col" style={{ fontSize: '0.8em' }}>
                    Q No.
                  </th>
                  <th scope="col" style={{ fontSize: '0.8em' }}>
                    Rate
                  </th>
                  <th scope="col" style={{ fontSize: '0.8em' }}>
                    Total (₹)
                  </th>
                </tr>
              </thead>
              <tbody>
                {data
                  ? data.medicine.map((med, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row" style={{ fontSize: '0.8em' }}>
                            {index + 1}
                          </th>
                          <td colSpan="2" style={{ fontSize: '0.8em' }}>
                            {med.med}
                          </td>
                          <td style={{ fontSize: '0.8em' }}>{med.quantity}</td>
                          <td style={{ fontSize: '0.8em' }}>₹ {med.rate}/-</td>
                          <td style={{ fontSize: '0.8em' }}>₹ {med.total}/-</td>
                        </tr>
                      );
                    })
                  : ''}

                <tr>
                  <th
                    scope="row"
                    colSpan="5"
                    style={{ textAlign: 'end', fontSize: '0.8em' }}
                  >
                    Grand Total
                  </th>
                  <td style={{ fontSize: '0.8em' }}>₹ {data.grandTotal}/-</td>
                </tr>
              </tbody>
            </table>
          </ReactHeight>
          <Footer sign facilities mrgn={pgHeight} />
        </div>
      </div>
    </div>
  );
}
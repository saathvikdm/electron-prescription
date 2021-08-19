import React, { useState } from 'react';
import ReactToPrint from 'react-to-print';
import { ReactHeight } from 'react-height';

import PrintHeader from '../components/PrintHeader';
import Footer from '../components/Footer';

const ref = React.createRef();

export default function Billing({ data, back, saveData }) {
  const DEFAULT_PAGE_HEIGHT = 717; // 19cm Page Height in pixels
  const FOOTER_HEIGHT = 100; //height of footer in px

  const [pgHeight, setpgHeight] = useState(330);

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
      <ReactToPrint
        trigger={() => (
          <button className="btn btn-success mx-1 my-3" type="button">
            Print Bill
          </button>
        )}
        content={() => ref.current}
        onAfterPrint={() => saveData(data)}
      />
      <div
        className="prescription-container bg-white"
        ref={ref}
        style={{
          padding: '2em',
          margin: '0',
          width: '14.8cm',
          height: '21cm',
          position: 'relative',
        }}
      >
        <div
          className="prescription"
          style={{ height: '20.5cm', border: '2px solid black' }}
        >
          <ReactHeight
            onHeightReady={(height) => {
              setpgHeight(DEFAULT_PAGE_HEIGHT - (height + FOOTER_HEIGHT) - 40);
            }}
          >
            <PrintHeader />

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                paddingLeft: '1em',
                paddingRight: '3em',
                paddingTop: '0.1em',
                paddingBottom: '0.1em',
                margin: '5px',
                border: '1px solid black',
                borderRadius: '8px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ marginBottom: '0', fontSize: '12pt' }}>
                  Patient Name:{' '}
                  {data.paitentName ? data.paitentName : 'Mr. Chethan'}
                  <br />
                  ID No: {data.idNumber ? data.idNumber : '20210801'}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ marginBottom: '0', fontSize: '12pt' }}>
                  Age / Sex :{' '}
                  {data.age && data.sex ? `${data.age}y/${data.sex}` : '43y/M'}
                  <br />
                  OP No.: {data.opNumber ? data.opNumber : '01'}
                </p>
              </div>
            </div>
            <table
              style={{
                border: '1px solid black',
                margin: '1em 0',
                width: '100%',
                color: '#212529',
                verticalAlign: 'top',
                borderColor: '#dee2e6',
                textAlign: 'center',
                captionSide: 'bottom',
                borderCollapse: 'collapse',
              }}
            >
              <thead style={{ border: '1px solid black' }}>
                <tr>
                  <th
                    scope="col"
                    style={{
                      padding: '0.5em',
                      border: '1px solid black',
                      fontSize: '1em',
                    }}
                  >
                    Sl. No
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: '0.5em',
                      border: '1px solid black',
                      fontSize: '1em',
                    }}
                    colSpan="2"
                  >
                    Particulars
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: '0.5em',
                      border: '1px solid black',
                      fontSize: '1em',
                    }}
                  >
                    Q No.
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: '0.5em',
                      border: '1px solid black',
                      fontSize: '1em',
                    }}
                  >
                    Rate
                  </th>
                  <th
                    scope="col"
                    style={{
                      padding: '0.5em',
                      border: '1px solid black',
                      fontSize: '1em',
                    }}
                  >
                    Total (₹)
                  </th>
                </tr>
              </thead>
              <tbody>
                {data
                  ? data.medicine.map((med, index) => {
                      return (
                        <tr
                          key={index}
                          style={{
                            padding: '0.5em',
                            border: '1px solid black',
                          }}
                        >
                          <th
                            scope="row"
                            style={{
                              padding: '0.5em',
                              border: '1px solid black',
                              fontSize: '1em',
                            }}
                          >
                            {index + 1}
                          </th>
                          <td
                            colSpan="2"
                            style={{
                              padding: '0.5em',
                              border: '1px solid black',
                              fontSize: '1em',
                            }}
                          >
                            {med.med}
                          </td>
                          <td
                            style={{
                              padding: '0.5em',
                              border: '1px solid black',
                              fontSize: '1em',
                            }}
                          >
                            {med.quantity}
                          </td>
                          <td
                            style={{
                              padding: '0.5em',
                              border: '1px solid black',
                              fontSize: '1em',
                            }}
                          >
                            ₹ {med.rate}/-
                          </td>
                          <td
                            style={{
                              padding: '0.5em',
                              border: '1px solid black',
                              fontSize: '1em',
                            }}
                          >
                            ₹ {med.total}/-
                          </td>
                        </tr>
                      );
                    })
                  : ''}

                <tr>
                  <th
                    scope="row"
                    colSpan="5"
                    style={{
                      padding: '0.5em',
                      border: '1px solid black',
                      textAlign: 'end',
                      fontSize: '1em',
                    }}
                  >
                    Grand Total
                  </th>
                  <td
                    style={{
                      padding: '0.5em',
                      border: '1px solid black',
                      fontSize: '1em',
                    }}
                  >
                    ₹ {data.grandTotal}/-
                  </td>
                </tr>
              </tbody>
            </table>
          </ReactHeight>
          <Footer facilities recovery mrgn={pgHeight} />
        </div>
      </div>
    </div>
  );
}

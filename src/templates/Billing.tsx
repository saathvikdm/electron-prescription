import React, { useState } from 'react';

import PrintHeader from '../components/PrintHeader';
import Footer from '../components/Footer';
import GetDate from '../utils/GetDate';

export default function Billing({ data, back, saveData }) {
  const date = GetDate();

  window.onafterprint = function () {
    saveData(data);
  };

  return (
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
          Print Bill
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
        <div
          className="prescription"
          style={{
            // height: '60.5cm',
            height: '30.5cm',
            border: '2px solid black',
          }}
        >
          <PrintHeader />

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
                <b>Patient Name:</b> {data.paitentName ? data.paitentName : ''}
                <br />
                <b>ID No:</b> {data.idNumber ? data.idNumber : ''}
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
                  `${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4, 8)}`}
              </p>
            </div>
          </div>
          <table
            style={{
              border: '1px solid black',
              margin: '1em auto',
              width: '97%',
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
          <Footer facilities recovery />
        </div>
      </div>
    </div>
  );
}

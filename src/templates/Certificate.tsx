import React, { useState } from 'react';

import Footer from '../components/Footer';
import PrintHeader from '../components/PrintHeader';
import GetDate from '../utils/GetDate';

export default function Certificate({ data, back, saveData }) {
  window.onafterprint = function () {
    saveData(data);
  };

  const date = GetDate();

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
          Print Certificate
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
                <b>Ref. No.:</b> {data ? `${date}_${data.refNo}` : date}
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
                <b>Date:</b>{' '}
                {`${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(4, 8)}`}
                {/* <br />
                  Paitent Name: {data.paitentName ? data.paitentName : 'name'} */}
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h1
              style={{
                fontSize: '1.2rem',
                marginTop: '1.5em',
                marginBottom: '1.5em',
              }}
            >
              {data.title ? data.title : ''}
            </h1>
            <p
              style={{
                margin: '1.5em 1em',
                fontSize: '12pt',
                textAlign: 'justify',
                whiteSpace: 'pre-wrap',
              }}
            >
              {data.content ? data.content : 'Certificate content here'}
            </p>
          </div>
          <h6 style={{ position: 'absolute', top: '24.5cm', right: '3cm' }}>
            Doctor's Signature
          </h6>
          <Footer recovery />
        </div>
      </div>
    </div>
  );
}

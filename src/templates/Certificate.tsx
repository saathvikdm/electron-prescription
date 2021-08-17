import React, { useState } from 'react';
import ReactToPrint from 'react-to-print';
import { ReactHeight } from 'react-height';

import Footer from '../components/Footer';
import PrintHeader from '../components/PrintHeader';
import GetDate from '../utils/GetDate';

const ref = React.createRef();

export default function Certificate({ data, back, saveData }) {
  const DEFAULT_PAGE_HEIGHT = 717; // 19cm Page Height in pixels
  const FOOTER_HEIGHT = 140; //height of footer in px

  let pageHeight = 0;

  const [pgHeight, setpgHeight] = useState(330);

  const date = GetDate();

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
            Print Certificate
          </button>
        )}
        content={() => ref.current}
        onAfterPrint={() => saveData(data)}
      />

      <div
        className="prescription-container bg-white"
        ref={ref}
        style={{
          border: '1px solid black',
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
              console.log('height', height);
              console.log('Calc', DEFAULT_PAGE_HEIGHT - height);
              pageHeight = height;

              setpgHeight(DEFAULT_PAGE_HEIGHT - (height + FOOTER_HEIGHT) - 15);
              console.log(DEFAULT_PAGE_HEIGHT - (height + FOOTER_HEIGHT));
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
                <p style={{ marginBottom: '0.5em', fontSize: '0.8rem' }}>
                  Ref. No.: {data ? `${date}_${data.refNo}` : date}
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <p style={{ marginBottom: '0.5em', fontSize: '0.8rem' }}>
                  Date:{' '}
                  {`${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(
                    4,
                    8
                  )}`}
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
                }}
              >
                {data.content ? data.content : 'Certificate content here'}
              </p>
            </div>
          </ReactHeight>
          <Footer recovery mrgn={pgHeight} />
        </div>
      </div>
    </div>
  );
}

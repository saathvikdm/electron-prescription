import React, { useState } from 'react';
import { useReactToPrint } from 'react-to-print';
import { ReactHeight } from 'react-height';

import Footer from '../components/Footer';
import PrintHeader from '../components/PrintHeader';
import GetDate from '../utils/GetDate';

const ref = React.createRef();

export default function Certificate({ data, back, saveData }) {
  const DEFAULT_PAGE_HEIGHT = 717; // 19cm Page Height in pixels
  const FOOTER_HEIGHT = 250; //height of footer in px

  let pageHeight = 0;

  const [pgHeight, setpgHeight] = useState(330);

  const printFunc = useReactToPrint({
    pageStyle: () => 'size: 14.8cm 21cm',
    content: () => ref.current,
    onAfterPrint: () => {
      saveData(data);
    },
  });

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
      <button
        className="btn btn-success mx-1 my-3"
        // onClick={(e) => e.preventDefault()}
        type="button"
        onClick={(e) => printFunc(e)}
      >
        Print Certificate
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
              console.log('height', height);
              console.log('Calc', DEFAULT_PAGE_HEIGHT - height);
              pageHeight = height;

              setpgHeight(DEFAULT_PAGE_HEIGHT - (height + FOOTER_HEIGHT) - 15);
              console.log(DEFAULT_PAGE_HEIGHT - (height + FOOTER_HEIGHT));
            }}
          >
            <PrintHeader />

            <div
              className="details d-flex justify-content-between px-3 pt-1 pe-5"
              style={{
                margin: '5px',
                border: '1px solid black',
                borderRadius: '8px',
              }}
            >
              <div className="d-flex-flex-column">
                <p className="mb-1" style={{ fontSize: '0.8rem' }}>
                  Date:{' '}
                  {`${date.slice(0, 2)}/${date.slice(2, 4)}/${date.slice(
                    4,
                    8
                  )}`}
                  <br />
                  Paitent Name: {data.paitentName ? data.paitentName : 'name'}
                </p>
              </div>
              <div className="d-flex-flex-column">
                <p className="mb-1" style={{ fontSize: '0.8rem' }}>
                  Ref. No.: {data ? `${date}_${data.refNo}` : date}
                </p>
              </div>
            </div>
            <div className="text-center">
              <h1 className="my-4 " style={{ fontSize: '1.2rem' }}>
                {data.title ? data.title : 'Medical Certificate'}
              </h1>
              <p
                className="my-4 mx-3"
                style={{ fontSize: '12pt', textAlign: 'justify' }}
              >
                {data.content ? data.content : 'Certificate content here'}
              </p>
            </div>
          </ReactHeight>
          <Footer mrgn={pgHeight} />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';

import Certificate from '../templates/Certificate';

import GetDate from '../utils/GetDate';

const storage = require('electron-json-storage');
const path = require('path');

const CertificateForm = ({ passedData }) => {
  storage.setDataPath();
  // console.log(storage.getDefaultDataPath());

  const date = GetDate();

  const saveData = (inputData) => {
    storage.set(
      `${Date.now()}_${date}_${refNo}_certificate`,
      { inputData },
      function (error) {
        if (error) throw error;
      }
    );
  };

  const [paitentName, setname] = useState('');
  const [title, setTitle] = useState('');
  const [refNo, setrefNo] = useState('');
  const [content, setcontent] = useState('');

  const [data, setData] = useState();

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (passedData) {
      setToggle(!toggle);
      setData(passedData.inputData);
    }
  }, [passedData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      title,
      refNo,
      content,
      paitentName,
    };

    setData(inputData);

    // saveData(inputData);
    setToggle(!toggle);
    // console.log(inputData);
  };

  function handleGoBack() {
    setToggle(!toggle);
  }

  return toggle ? (
    <Certificate data={data} back={handleGoBack} saveData={saveData} />
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="row g-3 mb-2">
        <div className="col-md-12">
          <label
            htmlFor="Certificate Title"
            className="form-label mx-1"
            style={{ width: '100%' }}
          >
            Certificate Title
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
        </div>
        <div className="col-md-10">
          <label htmlFor="Paitent Name" className="form-label mx-1 col-md-10">
            Paitent Name
            <input
              type="text"
              className="form-control"
              value={paitentName}
              onChange={(e) => setname(e.target.value)}
            />
          </label>
        </div>
        <div className="col-md-2">
          <label htmlFor="opNumber" className="form-label mx-1">
            Ref. No.
            <input
              type="number"
              className="form-control"
              value={refNo}
              onChange={(e) => setrefNo(e.target.value)}
            />
          </label>
        </div>
        <div className="input-group">
          <label htmlFor="opNumber" className="col-md-12 form-label">
            Certificate content
            <textarea
              className="form-control"
              aria-label="With textarea"
              value={content}
              placeholder="Fill details here"
              onChange={(e) => setcontent(e.target.value)}
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="btn btn-primary my-3 mx-1"
        onClick={handleSubmit}
      >
        Generate Certificate
      </button>
    </form>
  );
};

export default CertificateForm;

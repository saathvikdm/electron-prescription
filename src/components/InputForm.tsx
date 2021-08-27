import React, { useState, useEffect } from 'react';

import Template from '../templates/Template';
import GetDate from '../utils/GetDate';

const storage = require('electron-json-storage');
const path = require('path');

const InputForm = ({ passedData }) => {
  storage.setDataPath();

  const date = GetDate();

  const saveData = (inputData) => {
    storage.set(`${date}_${opNumber}_prescription`, { inputData }, function (
      error
    ) {
      if (error) throw error;
    });
  };

  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [sex, setSex] = useState('M');
  const [opNumber, setOpNumber] = useState();
  const [diagnosis, setDiagnosis] = useState('');
  const [morbidities, setMorbidities] = useState('');
  const [complaints, setComplaints] = useState('');
  const [investigations, setInvestigations] = useState('');

  const [treatmentGiven, setTreatmentGiven] = useState([
    { treatmentGiven: '' },
  ]);

  const [treatmentAdviced, setTreatmentAdviced] = useState([
    { treatmentAdviced: '' },
  ]);

  const [vitals, setVitals] = useState({
    bp: '',
    pr: '',
    sp02: '',
    temp: '',
    grbs: '',
  });

  const [followUp, setFollowUp] = useState('');

  const [data, setData] = useState();

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (passedData) {
      setToggle(!toggle);
      setData(passedData.inputData);
    }
  }, [passedData]);

  // handling treatment given field

  const handleTreatmentGivenChange = (index, event) => {
    const values = [...treatmentGiven];
    if (event.target.name === 'treatmentGiven') {
      values[index].treatmentGiven = event.target.value;
    }
    setTreatmentGiven(values);
  };

  const handleAddTreatmentGiven = () => {
    const values = [...treatmentGiven];
    values.push({ treatmentGiven: '' });
    setTreatmentGiven(values);
  };

  const handleRemoveTreatmentGiven = (index) => {
    const values = [...treatmentGiven];
    values.splice(index, 1);
    setTreatmentGiven(values);
  };

  // handling treatment adviced

  const handletreatmentAdvicedChange = (index, event) => {
    const values = [...treatmentAdviced];
    if (event.target.name === 'treatmentAdviced') {
      values[index].treatmentAdviced = event.target.value;
    }
    setTreatmentAdviced(values);
  };

  const handleAddtreatmentAdviced = () => {
    const values = [...treatmentAdviced];
    values.push({ treatmentAdviced: '' });
    setTreatmentAdviced(values);
  };

  const handleRemovetreatmentAdviced = (index) => {
    const values = [...treatmentAdviced];
    values.splice(index, 1);
    setTreatmentAdviced(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      paitentName: name,
      age,
      sex,
      opNumber,
      problems: morbidities,
      complaints,
      diagnosis,
      vitals,
      treatment: treatmentGiven,
      advice: treatmentAdviced,
      followUp,
      idNumber: `${date}_${opNumber}`,
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
    <Template data={data} back={handleGoBack} saveData={saveData} />
  ) : (
    <form onSubmit={handleSubmit}>
      <div className="row g-3 mb-2">
        <div className="col-md-6">
          <label
            htmlFor="PaitentName"
            className="form-label mx-1"
            style={{ width: '100%' }}
          >
            Paitent Name
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="col-md-2">
          <label htmlFor="PaitentAge" className="form-label mx-1">
            Age
            <input
              type="number"
              className="form-control"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>

        <div className="col-md-2">
          <label htmlFor="PaitentSex" className="form-label mx-1">
            Sex
            <select
              className="form-select"
              id="inputGroupSelect01"
              value={sex}
              onChange={(e) => setSex(e.target.value)}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="T">Trans</option>
            </select>
          </label>
        </div>

        <div className="col-md-2">
          <label htmlFor="opNumber" className="form-label mx-1">
            OP No.
            <input
              type="number"
              className="form-control"
              value={opNumber}
              onChange={(e) => setOpNumber(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="mb-2 mx-1">
        <p className="pt-2 mb-0">
          Clinical / Provisional / Differential Diagnosis:{' '}
        </p>
        <div className="mb-2">
          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control "
                id="problemsField"
                name="problemsField"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2 mx-1">
        <p className="pt-2 mb-0">Co-Morbidities:</p>
        <div className="mb-2">
          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control "
                id="morbidities"
                name="morbidities"
                value={morbidities}
                onChange={(e) => setMorbidities(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mb-2 mx-1">
        <p className="pt-2 mb-0">Complaints:</p>
        <div className="mb-2">
          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control "
                id="complaints"
                name="complaints"
                value={complaints}
                onChange={(e) => setComplaints(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <h4 className="pt-2 mx-1">Vitals</h4>
      <div className="row ps-1">
        <div className="col-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="BP"
              aria-label="Paitents BP"
              aria-describedby="basic-addon2"
              value={vitals.bp}
              onChange={(e) => setVitals({ ...vitals, bp: e.target.value })}
            />
            <span className="input-group-text" id="basic-addon2">
              mmHg
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="PR"
              aria-label="Paitents PR"
              aria-describedby="basic-addon2"
              value={vitals.pr}
              onChange={(e) => setVitals({ ...vitals, pr: e.target.value })}
            />
            <span className="input-group-text" id="basic-addon2">
              bpm
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="SpO2"
              aria-label="Paitents SpO2"
              aria-describedby="basic-addon2"
              value={vitals.sp02}
              onChange={(e) => setVitals({ ...vitals, sp02: e.target.value })}
            />
            <span className="input-group-text" id="basic-addon2">
              %
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Temp"
              aria-label="Paitents Temp"
              aria-describedby="basic-addon2"
              value={vitals.temp}
              onChange={(e) => setVitals({ ...vitals, temp: e.target.value })}
            />
            <span className="input-group-text" id="basic-addon2">
              &#8457;
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="GRBS"
              aria-label="Paitents GRBS"
              aria-describedby="basic-addon2"
              value={vitals.grbs}
              onChange={(e) => setVitals({ ...vitals, grbs: e.target.value })}
            />
            <span className="input-group-text" id="basic-addon2">
              mg/dl
            </span>
          </div>
        </div>

        <p className="pt-2 mb-0">Treatment Given:</p>
        {treatmentGiven.map((given, index) => (
          <div key={`${index}-${given}`} className="mb-2">
            <div className="row form-group">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control "
                  id="treatmentGiven"
                  name="treatmentGiven"
                  value={given.treatmentGiven}
                  onChange={(event) => handleTreatmentGivenChange(index, event)}
                />
              </div>
              <div className="col-md-4 d-flex align-items-end">
                {treatmentGiven.length > 1 ? (
                  <>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleAddTreatmentGiven()}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleRemoveTreatmentGiven(index)}
                    >
                      -
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-outline-secondary btn-sm m-1"
                    type="button"
                    onClick={() => handleAddTreatmentGiven()}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        <p className="pt-2 mb-0">Investigations adviced:</p>
        <div className="mb-2">
          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control "
                id="investigations"
                name="investigations"
                value={investigations}
                onChange={(e) => setInvestigations(e.target.value)}
              />
            </div>
          </div>
        </div>

        <p className="pt-2 mb-0">Advice:</p>
        {treatmentAdviced.map((advice, index) => (
          <div key={`${index}-${advice}`} className="mb-2">
            <div className="row form-group">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control "
                  id="treatmentAdviced"
                  name="treatmentAdviced"
                  value={advice.treatmentAdviced}
                  onChange={(event) =>
                    handletreatmentAdvicedChange(index, event)
                  }
                />
              </div>
              <div className="col-md-4 d-flex align-items-end">
                {treatmentAdviced.length > 1 ? (
                  <>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleAddtreatmentAdviced()}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleRemovetreatmentAdviced(index)}
                    >
                      -
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-outline-secondary btn-sm m-1"
                    type="button"
                    onClick={() => handleAddtreatmentAdviced()}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="col-md-12 my-1">
        <label
          htmlFor="FollowUp"
          className="form-label mx-1"
          style={{ width: '100%' }}
        >
          Follow Up:
          <input
            type="text"
            className="form-control"
            placeholder="Dr.'s Recomendation"
            value={followUp}
            onChange={(e) => setFollowUp(e.target.value)}
          />
        </label>
      </div> */}
      <div className="input-group" style={{ maxWidth: '100%' }}>
        <label htmlFor="FollowUp" className="col-md-12 form-label">
          Follow Up:
          <textarea
            className="form-control"
            aria-label="With textarea"
            value={followUp}
            placeholder="Dr.'s Recomendation"
            onChange={(e) => setFollowUp(e.target.value)}
          />
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary my-3 mx-1"
        onClick={handleSubmit}
      >
        Generate Prescription
      </button>
    </form>
  );
};

export default InputForm;

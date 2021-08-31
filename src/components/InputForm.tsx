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

  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [ageType, setAgeType] = useState('Years');
  const [sex, setSex] = useState('Male');
  const [opNumber, setOpNumber] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [morbidities, setMorbidities] = useState('');
  const [complaints, setComplaints] = useState('');
  const [investigations, setInvestigations] = useState('');

  const [treatmentGiven, setTreatmentGiven] = useState([
    { item: '', type: '' },
  ]);

  const [treatmentAdviced, setTreatmentAdviced] = useState([
    { item: '', type: '', freq: '', when: false, interval: '' },
  ]);

  const [findings, setFindings] = useState([{ item: '' }]);

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
    storage.keys(function (error, keys) {
      if (error) throw error;
      let count = 1;
      keys.forEach((key) => {
        if (key.split('_')[0] === date) {
          count += 1;
        }
      });
      setOpNumber(count);
    });
  }, []);

  useEffect(() => {
    if (passedData) {
      setToggle(!toggle);
      setData(passedData.inputData);
    }
  }, [passedData]);

  // handling findings

  const handleFindingsChange = (index, event) => {
    const values = [...findings];
    if (event.target.name === 'findings') {
      values[index].item = event.target.value;
    }
    setFindings(values);
  };

  const handleAddFindings = () => {
    const values = [...findings];
    values.push({ item: '' });
    setFindings(values);
  };

  const handleRemoveFindings = (index) => {
    const values = [...findings];
    values.splice(index, 1);
    setFindings(values);
  };

  // handling treatment given field

  const handleTreatmentGivenChange = (index, event) => {
    const values = [...treatmentGiven];
    if (event.target.name === 'treatmentGiven') {
      values[index].item = event.target.value;
    }

    if (event.target.name === 'givenType') {
      values[index].type = event.target.value;
    }

    setTreatmentGiven(values);
  };

  const handleAddTreatmentGiven = () => {
    const values = [...treatmentGiven];
    values.push({ item: '', type: '' });
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
      values[index].item = event.target.value;
    }

    if (event.target.name === 'adviceType') {
      values[index].type = event.target.value;
    }

    if (event.target.name === 'adviceFreq') {
      values[index].freq = event.target.value;
    }

    if (event.target.name === 'adviceWhen') {
      values[index].when = event.target.checked;
    }

    if (event.target.name === 'advicedInterval') {
      values[index].interval = event.target.value;
    }

    setTreatmentAdviced(values);
  };

  const handleAddtreatmentAdviced = () => {
    const values = [...treatmentAdviced];
    values.push({ item: '', type: '', freq: '', when: false, interval: '' });
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
      paitentName: `${title} ${name}`,
      age,
      ageType,
      sex,
      opNumber,
      problems: morbidities,
      complaints,
      diagnosis,
      investigations,
      vitals,
      treatment: treatmentGiven,
      advice: treatmentAdviced,
      followUp,
      findings,
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
        <div className="col-md-2">
          <label htmlFor="PaitentSex" className="form-label mx-1">
            Title
            <select
              className="form-select"
              id="inputGroupSelect01"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            >
              <option value="Mr.">Mr.</option>
              <option value="Mrs.">Mrs.</option>
              <option value="Miss.">Miss.</option>
              <option value="Master.">Master.</option>
            </select>
          </label>
        </div>

        <div className="col-md-4">
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
          <label htmlFor="inputGroupSelect01" className="form-label mx-1">
            Y/M/D
            <select
              className="form-select"
              id="inputGroupSelect01"
              value={ageType}
              onChange={(e) => {
                setAgeType(e.target.value);
              }}
            >
              <option value="Years">Years</option>
              <option value="Months">Months</option>
              <option value="Days">Days</option>
            </select>
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
              <option value="T">TG</option>
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

        <p className="pt-2 mb-0">Findings:</p>
        {findings.map((item, index) => (
          <div key={`${index}-${item}`} className="mb-2">
            <div className="row form-group">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control "
                  id="findings"
                  name="findings"
                  value={item.item}
                  onChange={(event) => handleFindingsChange(index, event)}
                />
              </div>
              <div className="col-md-4 d-flex align-items-end">
                {findings.length > 1 ? (
                  <>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleAddFindings()}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleRemoveFindings(index)}
                    >
                      -
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-outline-secondary btn-sm m-1"
                    type="button"
                    onClick={() => handleAddFindings()}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}

        <p className="pt-2 mb-0">Treatment Given:</p>
        {treatmentGiven.map((given, index) => (
          <div key={`${index}-${given}`} className="mb-2">
            <div className="row form-group">
              <div className="col-md-2">
                <select
                  className="form-select"
                  id="givenType"
                  name="givenType"
                  value={given.type}
                  onChange={(event) => handleTreatmentGivenChange(index, event)}
                >
                  <option value="">Type</option>
                  <option value="Inj">Injection</option>
                  <option value="Tab">Tablet</option>
                  <option value="Cap">Capsule</option>
                  <option value="Syrup">Syrup</option>
                </select>
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control "
                  id="treatmentGiven"
                  name="treatmentGiven"
                  value={given.item}
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
              <div className="col-md-2">
                <select
                  className="form-select"
                  id="adviceType"
                  name="adviceType"
                  value={advice.type}
                  onChange={(event) =>
                    handletreatmentAdvicedChange(index, event)
                  }
                >
                  <option value="">Type</option>
                  <option value="Inj">Injection</option>
                  <option value="Tab">Tablet</option>
                  <option value="Cap">Capsule</option>
                  <option value="Syrup">Syrup</option>
                </select>
              </div>
              <div className="col-md-4">
                <input
                  type="text"
                  className="form-control "
                  id="treatmentAdviced"
                  name="treatmentAdviced"
                  value={advice.item}
                  onChange={(event) =>
                    handletreatmentAdvicedChange(index, event)
                  }
                />
              </div>
              <div className="col-md-2">
                <select
                  className="form-select"
                  id="adviceFreq"
                  name="adviceFreq"
                  value={advice.freq}
                  onChange={(event) =>
                    handletreatmentAdvicedChange(index, event)
                  }
                >
                  <option value="">Freq</option>
                  <option value="1-0-1">1-0-1</option>
                  <option value="1-0-0">1-0-0</option>
                  <option value="1-1-1">1-1-1</option>
                  <option value="0-0-1">0-0-1</option>
                  <option value="0-1-0">0-1-0</option>
                </select>
              </div>
              <div className="col-md-2">
                <input
                  type="number"
                  className="form-control "
                  id="advicedInterval"
                  name="advicedInterval"
                  placeholder="For (in days)"
                  value={advice.interval}
                  onChange={(event) =>
                    handletreatmentAdvicedChange(index, event)
                  }
                />
              </div>
              <div className="col-md-2 my-auto">
                <div className="form-check">
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Before?
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="adviceWhen"
                      onChange={(event) =>
                        handletreatmentAdvicedChange(index, event)
                      }
                      id="flexCheckDefault"
                    />
                  </label>
                </div>
              </div>

              <div className="col-md-2 d-flex align-items-end">
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

import React, { useState } from 'react';
// import ReactPDF from '@react-pdf/renderer';
// import Pdf from 'react-to-pdf';
// import Issued from '../Pages/Issued';

const InputForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [sex, setSex] = useState('M');
  const [opNumber, setOpNumber] = useState();
  const [inputFields, setInputFields] = useState([{ diagnosis: '' }]);
  const [problemsFields, setProblemsFields] = useState([{ knownProblem: '' }]);
  const [chiefComplaints, setChiefComplaints] = useState([
    { chiefComplaints: '' },
  ]);

  const [data, setData] = useState();

  // Handling Diagnosis form inputs

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'diagnosis') {
      values[index].diagnosis = event.target.value;
    }
    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ diagnosis: '' });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  // Handling Chief Complaints form inputs

  const handleComplaintsChange = (index, event) => {
    const values = [...chiefComplaints];
    if (event.target.name === 'chiefComplaints') {
      values[index].chiefComplaints = event.target.value;
    }
    setChiefComplaints(values);
  };

  const handleAddComplaints = () => {
    const values = [...chiefComplaints];
    values.push({ chiefComplaints: '' });
    setChiefComplaints(values);
  };

  const handleRemoveComplaintsFields = (index) => {
    const values = [...chiefComplaints];
    values.splice(index, 1);
    setChiefComplaints(values);
  };

  // handling problems fields

  const handleProblemsChange = (index, event) => {
    const values = [...problemsFields];
    if (event.target.name === 'problemsField') {
      values[index].knownProblem = event.target.value;
    }
    setProblemsFields(values);
  };

  const handleAddProblems = () => {
    const values = [...problemsFields];
    values.push({ knownProblem: '' });
    setProblemsFields(values);
  };

  const handleRemoveProblemsFields = (index) => {
    const values = [...problemsFields];
    values.splice(index, 1);
    setProblemsFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      name,
      age,
      sex,
      opNumber,
      problemsFields,
      chiefComplaints,
      inputFields,
    };

    setData(inputData);
    console.log(inputData);
  };

  return (
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
              <option value="M">Male</option>
              <option value="F">Female</option>
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
        <p className="pt-2 mb-0">Previous Known Problems:</p>
        {problemsFields.map((problemsField, index) => (
          <div key={index} className="mb-2">
            <div className="row form-group">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control "
                  id="problemsField"
                  name="problemsField"
                  value={problemsField.knownProblem}
                  onChange={(event) => handleProblemsChange(index, event)}
                />
              </div>

              <div className="col-md-4 d-flex align-items-end">
                {problemsFields.length > 1 ? (
                  <>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleRemoveProblemsFields(index)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleAddProblems()}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-outline-secondary btn-sm m-1"
                    type="button"
                    onClick={() => handleAddProblems()}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-2 mx-1">
        <p className="pt-2 mb-0">Chief Complaints:</p>
        {chiefComplaints.map((complaint, index) => (
          <div key={`${index}-${complaint}`} className="mb-2">
            <div className="row form-group">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control "
                  id="chiefComplaints"
                  name="chiefComplaints"
                  value={complaint.chiefComplaints}
                  onChange={(event) => handleComplaintsChange(index, event)}
                />
              </div>
              <div className="col-md-4 d-flex align-items-end">
                {chiefComplaints.length > 1 ? (
                  <>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleRemoveComplaintsFields(index)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleAddComplaints()}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-outline-secondary btn-sm m-1"
                    type="button"
                    onClick={() => handleAddComplaints()}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mb-2 mx-1">
        <p className="pt-2 mb-0">
          Clinical / Provisional / Differential Diagnosis:
        </p>
        {inputFields.map((inputField, index) => (
          <div key={`${index}-${inputField}`} className="mb-2">
            <div className="row form-group">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control "
                  id="diagnosis"
                  name="diagnosis"
                  value={inputField.diagnosis}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="col-md-4 d-flex align-items-end">
                {inputFields.length > 1 ? (
                  <>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleRemoveFields(index)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleAddFields()}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-outline-secondary btn-sm m-1"
                    type="button"
                    onClick={() => handleAddFields()}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
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
            />
            <span className="input-group-text" id="basic-addon2">
              &#8457;
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 my-1">
          <label
            htmlFor="PaitentAge"
            className="form-label mx-1"
            style={{ width: '100%' }}
          >
            GPE
            <input
              type="text"
              className="form-control"
              // value={age}
              // onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div className="col-md-6 my-1">
          <label
            htmlFor="PaitentAge"
            className="form-label mx-1"
            style={{ width: '100%' }}
          >
            CVS
            <input
              type="text"
              className="form-control"
              // value={age}
              // onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div className="col-md-6 my-1">
          <label
            htmlFor="PaitentAge"
            className="form-label mx-1"
            style={{ width: '100%' }}
          >
            RS
            <input
              type="text"
              className="form-control"
              // value={age}
              // onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div className="col-md-6 my-1">
          <label
            htmlFor="PaitentAge"
            className="form-label mx-1"
            style={{ width: '100%' }}
          >
            P/A
            <input
              type="text"
              className="form-control"
              // value={age}
              // onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div className="col-md-6 my-1">
          <label
            htmlFor="PaitentAge"
            className="form-label mx-1"
            style={{ width: '100%' }}
          >
            CNS
            <input
              type="text"
              className="form-control"
              // value={age}
              // onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div className="col-md-6 my-1">
          <label
            htmlFor="PaitentAge"
            className="form-label mx-1"
            style={{ width: '100%' }}
          >
            L/E
            <input
              type="text"
              className="form-control"
              // value={age}
              // onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary my-3 mx-1"
        onClick={handleSubmit}
      >
        Generate Prescription
      </button>

      {/* <Issued data={data} /> */}
    </form>
  );
};

export default InputForm;

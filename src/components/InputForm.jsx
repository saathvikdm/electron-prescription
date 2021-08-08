import React, { useState } from 'react';
// import ReactPDF from '@react-pdf/renderer';
// import Pdf from 'react-to-pdf';
// import Issued from '../Pages/Issued';

const InputForm = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [sex, setSex] = useState('M');
  const [inputFields, setInputFields] = useState([
    { medicineName: '', dosage: '' },
  ]);

  const [data, setData] = useState();

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'medicineName') {
      values[index].medicineName = event.target.value;
    } else {
      values[index].dosage = event.target.value;
    }

    setInputFields(values);
  };

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ medicineName: '', dosage: '' });
    setInputFields(values);
  };

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputData = {
      name,
      age,
      sex,
      inputFields,
    };

    setData(inputData);
    // console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3 mb-2">
        <div className="col-md-6">
          <label htmlFor="PaitentName" className="form-label mx-1">
            Paitent Name
          </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="col-md-2">
          <label htmlFor="PaitentAge" className="form-label mx-1">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <label htmlFor="PaitentSex" className="form-label mx-1">
            Sex
          </label>
          <select
            className="form-select"
            id="inputGroupSelect01"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div className="col-md-2">
          <label htmlFor="PaitentAge" className="form-label mx-1">
            OP No.
          </label>
          <input
            type="number"
            className="form-control"
            // value={age}
            // onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
      <div className="mb-2">
        <label htmlFor="medicineName" className="mx-1">
          Previous Known Problems:
        </label>
        {inputFields.map((inputField, index) => (
          <div key={`${index}-${inputField}`} className="mb-2">
            <div className="row form-group">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control "
                  id="medicineName"
                  name="medicineName"
                  value={inputField.medicineName}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              {/* <div className="col-md-4">
                <label htmlFor="dosage" className="mx-1">
                  Dosage
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dosage"
                  name="dosage"
                  value={inputField.dosage}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div> */}

              <div className="col-md-4 d-flex align-items-end">
                {inputFields.length > 1 ? (
                  <>
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => handleRemoveFields(index)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => handleAddFields()}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-link"
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
      <div className="mb-2">
        <label htmlFor="medicineName" className="mx-1">
          Chief Complaints:
        </label>
        {inputFields.map((inputField, index) => (
          <div key={`${index}-${inputField}`} className="mb-2">
            <div className="row form-group">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control "
                  id="medicineName"
                  name="medicineName"
                  value={inputField.medicineName}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              {/* <div className="col-md-4">
                <label htmlFor="dosage" className="mx-1">
                  Dosage
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dosage"
                  name="dosage"
                  value={inputField.dosage}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div> */}

              <div className="col-md-4 d-flex align-items-end">
                {inputFields.length > 1 ? (
                  <>
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => handleRemoveFields(index)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => handleAddFields()}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-link"
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
      <div className="mb-2">
        <label htmlFor="medicineName" className="mx-1">
          Clinical / Provisional / Differential Diagnosis:
        </label>
        {inputFields.map((inputField, index) => (
          <div key={`${index}-${inputField}`} className="mb-2">
            <div className="row form-group">
              <div className="col-md-8">
                <input
                  type="text"
                  className="form-control "
                  id="medicineName"
                  name="medicineName"
                  value={inputField.medicineName}
                  onChange={(event) => handleInputChange(index, event)}
                />
              </div>
              <div className="col-md-4 d-flex align-items-end">
                {inputFields.length > 1 ? (
                  <>
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => handleRemoveFields(index)}
                    >
                      -
                    </button>
                    <button
                      className="btn btn-link"
                      type="button"
                      onClick={() => handleAddFields()}
                    >
                      +
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-link"
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

      <label htmlFor="medicineName" className="my-3 mx-1">
        Vitals
      </label>
      <div className="row">
        <div className="col-md-3">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="BP"
              aria-label="Paitents BP"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              mmHg
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="PR"
              aria-label="Paitents PR"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              bpm
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="SpO2"
              aria-label="Paitents SpO2"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              %
            </span>
          </div>
        </div>
        <div className="col-md-3">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Temp"
              aria-label="Paitents Temp"
              aria-describedby="basic-addon2"
            />
            <span class="input-group-text" id="basic-addon2">
              &#8457;
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 my-1">
          <label htmlFor="PaitentAge" className="form-label mx-1">
            GPE
          </label>
          <input
            type="text"
            className="form-control"
            // value={age}
            // onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="col-md-6 my-1">
          <label htmlFor="PaitentAge" className="form-label mx-1">
            CVS
          </label>
          <input
            type="text"
            className="form-control"
            // value={age}
            // onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="col-md-6 my-1">
          <label htmlFor="PaitentAge" className="form-label mx-1">
            RS
          </label>
          <input
            type="text"
            className="form-control"
            // value={age}
            // onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="col-md-6 my-1">
          <label htmlFor="PaitentAge" className="form-label mx-1">
            P/A
          </label>
          <input
            type="text"
            className="form-control"
            // value={age}
            // onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="col-md-6 my-1">
          <label htmlFor="PaitentAge" className="form-label mx-1">
            CNS
          </label>
          <input
            type="text"
            className="form-control"
            // value={age}
            // onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="col-md-6 my-1">
          <label htmlFor="PaitentAge" className="form-label mx-1">
            L/E
          </label>
          <input
            type="text"
            className="form-control"
            // value={age}
            // onChange={(e) => setAge(e.target.value)}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary my-3"
        onClick={handleSubmit}
      >
        Generate Prescription
      </button>

      {/* <Issued data={data} /> */}
    </form>
  );
};

export default InputForm;

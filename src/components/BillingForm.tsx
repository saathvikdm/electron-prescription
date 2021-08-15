import React, { useState } from 'react';

import Billing from '../templates/Billing';

import GetDate from '../utils/GetDate';

const path = require('path');
const storage = require('electron-json-storage');

const BillingForm = () => {
  storage.setDataPath(path.join(__dirname, 'temp'));

  const date = GetDate();

  const saveData = (inputData) => {
    storage.set(`${date}_${opNumber}_bill`, { inputData }, function (error) {
      if (error) throw error;
    });
  };

  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [sex, setSex] = useState('M');
  const [opNumber, setOpNumber] = useState();
  const [medicine, setMedicine] = useState([
    { med: '', quantity: null, rate: null, total: 0 },
  ]);
  const [grandTotal, setGrandTotal] = useState(0);

  const [data, setData] = useState();

  const [toggle, setToggle] = useState(false);

  // handling medicine fields

  const handleMedicineChange = (index, event) => {
    const values = [...medicine];
    if (event.target.name === 'med') {
      values[index].med = event.target.value;
    }

    if (event.target.name === 'quantity') {
      values[index].quantity = event.target.value;
    }

    if (event.target.name === 'rate') {
      values[index].rate = event.target.value;
    }

    const total = event.target.value * values[index].quantity;

    values[index].total = total;

    setMedicine(values);
  };

  const handleAddMedicine = () => {
    const values = [...medicine];
    values.push({ med: '', quantity: null, rate: null, total: 0 });
    setMedicine(values);
  };

  const handleRemoveMedicine = (index) => {
    const values = [...medicine];
    values.splice(index, 1);
    setMedicine(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const meds = [...medicine];
    let total = 0;
    meds.forEach((med) => {
      total += med.total;
    });

    const inputData = {
      paitentName: name,
      age,
      sex,
      opNumber,
      medicine,
      grandTotal: total,
      idNumber: `${date}_${opNumber}`,
    };

    setData(inputData);
    setGrandTotal(total);

    // saveData(inputData);
    setToggle(!toggle);
    // console.log(inputData);
  };

  function handleGoBack() {
    setToggle(!toggle);
  }

  return toggle ? (
    <Billing data={data} back={handleGoBack} saveData={saveData} />
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
        <p className="pt-2 mb-0">Enter Medicine:</p>
        {medicine.map((med, index) => (
          <div key={index} className="mb-2">
            <div className="row g-3 mb-2 form-group">
              <div className="col-md-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Medicine Name"
                  id="med"
                  name="med"
                  value={med.med}
                  onChange={(event) => handleMedicineChange(index, event)}
                />
              </div>

              <div className="col-md-2">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control "
                    id="quantity"
                    placeholder="Quantity"
                    name="quantity"
                    value={med.quantity}
                    onChange={(event) => handleMedicineChange(index, event)}
                  />
                </div>
              </div>

              <div className="col-md-3">
                <div className="input-group">
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Rate"
                    id="rate"
                    name="rate"
                    value={med.rate}
                    onChange={(event) => handleMedicineChange(index, event)}
                  />
                  <span className="input-group-text" id="basic-addon2">
                    ₹
                  </span>
                </div>
              </div>

              <div className="col-md-2 d-flex align-items-end">
                {Object.keys(medicine).length > 1 ? (
                  <>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleAddMedicine()}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-sm m-1"
                      type="button"
                      onClick={() => handleRemoveMedicine(index)}
                    >
                      -
                    </button>
                  </>
                ) : (
                  <button
                    className="btn btn-outline-secondary btn-sm m-1"
                    type="button"
                    onClick={() => handleAddMedicine()}
                  >
                    +
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        type="submit"
        className="btn btn-primary my-3 mx-1"
        onClick={handleSubmit}
      >
        Generate Bill
      </button>
    </form>
  );
};

export default BillingForm;

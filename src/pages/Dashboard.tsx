import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DashboardTile from '../components/DashboardTile';
import Header from '../components/Header';

import GetDate from '../utils/GetDate';

const path = require('path');
const storage = require('electron-json-storage');

const Dashboard = () => {
  const [totalIssued, settotalIssued] = useState(0);
  const [issuedToday, setissuedToday] = useState(0);
  const [data, setData] = useState([]);
  const [listData, setlistData] = useState();
  const date = GetDate();

  storage.setDataPath(path.join(__dirname, 'temp'));

  storage.keys(function (error, keys) {
    if (error) throw error;
    settotalIssued(keys.length);
  });

  useEffect(() => {
    storage.keys(function (error, keys) {
      if (error) throw error;
      let count = 0;
      keys.forEach((key) => {
        if (key.split('_')[0] === date) {
          count += 1;
        }
      });
      setissuedToday(count);
    });
  }, []);

  const separateObject = (obj) => {
    const res = [];
    const keys = Object.keys(obj);
    keys.forEach((key) => {
      let subKeys = key.split('_');
      res.push({
        date: `${subKeys[0].slice(0, 2)}/${subKeys[0].slice(
          2,
          4
        )}/${subKeys[0].slice(4, 8)}`,
        type: subKeys[2],
        data: obj[key],
      });
    });
    return res;
  };

  useEffect(() => {
    storage.getAll(function (error, data) {
      if (error) throw error;
      setData(data);
    });
  }, [issuedToday]);

  useEffect(() => {
    let list = [...separateObject(data)];
    setlistData(list.sort().reverse().slice(0, 4));
  }, [data]);

  return (
    <div
      className="container justify-content-center flex-column"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <div className="row my-5">
        <DashboardTile
          bgCol="#0d6efd"
          tileText="Issued today"
          tileNumber={issuedToday}
          tileIcon="fas fa-file"
        />
        <DashboardTile
          bgCol="#dc3545"
          tileText="Issued Reports"
          tileNumber={totalIssued}
          tileIcon="far fa-copy"
        />
        <DashboardTile
          bgCol="#198754"
          tileText="Issue Prescription"
          tileBtnText="Generate Prescription"
          tileType
          tileIcon="fas fa-marker"
          tileLink="/issue"
        />
        <DashboardTile
          bgCol="#219ebc"
          tileText="Issue Bill"
          tileBtnText="Generate Bill"
          tileType
          tileLink="/billing"
        />
        <DashboardTile
          bgCol="#023047"
          tileText="Issue Medical Certificate"
          tileBtnText="Generate MC"
          tileType
          tileLink="/certificate"
        />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3>Recently Issued Reports</h3>
            </div>
            <div className="col-6">
              <input
                type="search"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Search Records"
              />
            </div>
          </div>
          <hr />
          <table className="table table-striped ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Paitent Name</th>
                <th scope="col">Issue Date</th>
                <th scope="col">Type</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {listData &&
                listData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>{item.data.inputData.paitentName}</td>
                      <td>{item.date}</td>
                      <td>
                        <span className={`badge bg-${item.type}`}>
                          {item.type}
                        </span>
                      </td>
                      <td>
                        <Link
                          to={{
                            pathname: '/issue',
                            state: { data: item.data },
                          }}
                        >
                          <button
                            type="button"
                            className="btn btn-sm btn-primary"
                          >
                            View
                          </button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <Link to="/issued">
          <button type="button" className="btn btn-primary">
            View All Reports
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;

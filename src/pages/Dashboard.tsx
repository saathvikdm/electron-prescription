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
  const [data, setData] = useState();
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
  });

  useEffect(() => {
    storage.getAll(function (error, data) {
      if (error) throw error;
      setData(data);
    });
  }, [totalIssued]);

  useEffect(() => {
    if (data) {
      Object.keys(data).forEach((key) => {
        console.log(data[key]);
      });
    }
    console.log(data);
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
                class="form-control"
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
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td colSpan="2">Larry Page</td>
                <td>@Google</td>
              </tr>
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

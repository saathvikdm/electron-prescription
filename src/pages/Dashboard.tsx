import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DashboardTile from '../components/DashboardTile';
import Header from '../components/Header';
import TableRow from '../components/TableRow';

import GetDate from '../utils/GetDate';
import separateObject from '../utils/SeperateObject';

const path = require('path');
const storage = require('electron-json-storage');

const Dashboard = () => {
  const [totalIssued, settotalIssued] = useState(0);
  const [issuedToday, setissuedToday] = useState(0);
  const [data, setData] = useState([]);
  const [listData, setlistData] = useState();
  const [search, setsearch] = useState('');
  const date = GetDate();

  let setFilteredList;

  storage.setDataPath();

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

  useEffect(() => {
    storage.getAll(function (error, data) {
      if (error) throw error;
      setData(data);
    });
  }, [issuedToday]);

  useEffect(() => {
    const list = [...separateObject(data)];
    setlistData(list.reverse().slice(0, 4));
  }, [data]);

  if (listData && search !== '') {
    const list = [...separateObject(data)];
    const re = new RegExp(search, 'i');
    const filtered = list.filter((entry) =>
      Object.values(entry).some(
        (val) => typeof val === 'string' && val.match(re)
      )
    );
    setFilteredList = filtered;
  }

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
                value={search}
                onChange={(e) => setsearch(e.target.value)}
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
              {setFilteredList === undefined
                ? listData &&
                  listData.map((item, index) => {
                    return <TableRow key={index} item={item} index={index} />;
                  })
                : setFilteredList.map((item, index) => {
                    return <TableRow key={index} item={item} index={index} />;
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

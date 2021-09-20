import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TableRow from '../components/TableRow';

import separateObject from '../utils/SeperateObject';

const path = require('path');
const storage = require('electron-json-storage');

export default function Issue() {
  const [data, setData] = useState([]);
  const [listData, setlistData] = useState();
  const [search, setsearch] = useState('');

  let setFilteredList;

  storage.setDataPath();

  useEffect(() => {
    storage.getAll(function (error, data) {
      if (error) throw error;
      setData(data);
    });
  }, []);

  useEffect(() => {
    let list = [...separateObject(data)];

    setlistData(list.sort().reverse().slice(0, 25));
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
      <input
        type="search"
        className="form-control my-4"
        id="exampleFormControlInput1"
        placeholder="Search Records"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Paitent Name</th>
            <th scope="col">Issue Date</th>
            <th scope="col">Time</th>
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
  );
}

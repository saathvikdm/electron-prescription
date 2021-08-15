import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

import separateObject from '../utils/SeperateObject';
import getPath from '../utils/GetPath';

const path = require('path');
const storage = require('electron-json-storage');

export default function Issue() {
  const [data, setData] = useState([]);
  const [listData, setlistData] = useState();

  storage.setDataPath(path.join(__dirname, 'temp'));

  useEffect(() => {
    storage.getAll(function (error, data) {
      if (error) throw error;
      setData(data);
    });
  }, []);

  useEffect(() => {
    let list = [...separateObject(data)];
    setlistData(list.sort().reverse());
  }, [data]);

  console.log(data);

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
      />
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
              console.log(item);
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.data.inputData.paitentName}</td>
                  <td>{item.date}</td>
                  <td>
                    <span className={`badge bg-${item.type}`}>{item.type}</span>
                  </td>
                  <td>
                    <Link
                      to={{
                        pathname: getPath(item),
                        state: { data: item.data },
                      }}
                    >
                      <button type="button" className="btn btn-sm btn-primary">
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
  );
}

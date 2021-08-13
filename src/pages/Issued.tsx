import React from 'react';
import Header from '../components/Header';

const storage = require('electron-json-storage');

export default function Issue() {
  function getAll() {
    //13082021_01
    storage.get('13082021_01', function (error, data) {
      if (error) throw error;

      console.log(data);
    });
  }

  getAll();

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
        </tbody>
      </table>
    </div>
  );
}

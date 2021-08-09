import React from 'react';
import { Link } from 'react-router-dom';
import DashboardTile from '../components/DashboardTile';
import Header from '../components/Header';

const Dashboard = () => {
  // bgCol, tileText, tileNumber

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
          tileNumber="4"
          tileIcon="fas fa-file"
        />
        <DashboardTile
          bgCol="#dc3545"
          tileText="Issued Reports"
          tileNumber="69"
          tileIcon="far fa-copy"
        />
        <DashboardTile
          bgCol="#198754"
          tileText="Issue New Report"
          // tileNumber="96"
          tileType
          tileIcon="fas fa-marker"
        />
        <div className="container">
          <h3>Recently Issued Reports</h3> <hr />
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

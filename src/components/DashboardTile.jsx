import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardTile({
  bgCol,
  tileText,
  tileNumber,
  tileIcon,
  tileType,
}) {
  return (
    <div className="col-md-4 col-xl-3">
      <div
        className="bg-c-blue order-card"
        style={{
          padding: '25px',
          color: '#fff',
          background: `${bgCol}`,
          borderRadius: '5px',
          boxShadow: '0 1px 2.94px 0.06px rgba(4, 26, 55, 0.16)',
          border: 'none',
          marginBottom: '30px',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <div className="card-block">
          <h6 className="m-b-20">{tileText}</h6>
          <h2 className="text-right">
            {tileType ? (
              <Link to="/issue">
                <button className="btn btn-light btn-sm" type="button">
                  Generate Report
                </button>
              </Link>
            ) : (
              <div>
                <i
                  className={`${tileIcon} f-left`}
                  style={{ fontSize: '26px', marginRight: '1em' }}
                />
                <span>{tileNumber}</span>
              </div>
            )}
          </h2>
        </div>
      </div>
    </div>
  );
}

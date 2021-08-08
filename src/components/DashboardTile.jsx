import React from 'react';

export default function DashboardTile({ bgCol, tileText, tileNumber }) {
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
            <i
              className="fa fa-cart-plus f-left "
              style={{ fontSize: '26px', marginRight: '1em' }}
            />
            <span>{tileNumber}</span>
          </h2>
        </div>
      </div>
    </div>
  );
}

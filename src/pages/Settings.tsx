import React from 'react';
import Header from '../components/Header';

export default function Settings() {
  return (
    <div
      className="container justify-content-center flex-column"
      style={{ paddingLeft: '200px' }}
    >
      <Header />
      <div className="my-5">
        <h4 className="text-center">Contact Developer For Help</h4>
        <p className="text-center">EMAIL: saathvikdm@outlook.com</p>
      </div>
    </div>
  );
}

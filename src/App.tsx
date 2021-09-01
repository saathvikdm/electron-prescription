import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar';

import Dashboard from './pages/Dashboard';
import Issue from './pages/Issue';
import Issued from './pages/Issued';
import Settings from './pages/Settings';
import Bill from './pages/Bill';
import CertificatePage from './pages/Certificate';

import './App.global.css';

export default function App() {
  return (
    <div className="d-flex flex-row">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/certificate" component={CertificatePage} />
          <Route path="/billing" component={Bill} />
          <Route path="/issue" component={Issue} />
          <Route path="/issued" component={Issued} />
          <Route path="/settings" component={Settings} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

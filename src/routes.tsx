import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Navbar } from 'components';

import { Home } from 'pages';

const AllRoutes = () => {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<h1>OIOIOIOIOI</h1>} />
        </Routes>
      </React.Fragment>
    </Router>
  );
};

export { AllRoutes };

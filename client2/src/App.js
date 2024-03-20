// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserTypeSelection from '../src/Components/UserTypeSelection';
import SellerPage from '../src/Components/SellerPage';
import SuccessPage from '../src/Components/SuccessPage'; 
import BuyerPage from '../src/Components/BuyerPage'; 
// import AdminPage from '../src/Components/AdminPage'; // Import the AdminPage component
import LoginPage from '../src/Components/LoginPage';
import SignupPage from '../src/Components/SignupPage';
import SellerPageRoute from '../src/Components/SellerPageRoute';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserTypeSelection />} />
        <Route path="/seller/login" element={<LoginPage />} />
        <Route path="/seller/signup" element={<SignupPage />} />
        <Route path="/buyer" element={<BuyerPage />} />
        {/* <Route path="/admin" element={<AdminPage />} /> Add route for AdminPage */}
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/seller" element={<SellerPageRoute />} />

      </Routes>
    </Router>
  );
};

export default App;

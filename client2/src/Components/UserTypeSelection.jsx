// UserTypeSelection.jsx

import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const UserTypeSelectionWrapper = styled.div`
  text-align: center;
  margin-top: 50px;

  .user-type-buttons {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .user-type-buttons button {
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }

  .user-type-buttons button:hover {
    background-color: #0056b3;
  }
`;

const UserTypeSelection = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleUserTypeSelection = (userType) => {
    navigate(`/${userType}`); // Navigate to '/seller', '/buyer', or '/admin'
  };

  return (
    <UserTypeSelectionWrapper>
      <h2>Welcome to Coupon Portal</h2>
      <p>Please select your role:</p>
      <div className="user-type-buttons">
        <button onClick={() => handleUserTypeSelection('seller/login')}>Seller</button>
        <button onClick={() => handleUserTypeSelection('buyer')}>Buyer</button>
        <button onClick={() => handleUserTypeSelection('admin')}>Admin</button> {/* Add admin button */}
      </div>
    </UserTypeSelectionWrapper>
  );
};

export default UserTypeSelection;

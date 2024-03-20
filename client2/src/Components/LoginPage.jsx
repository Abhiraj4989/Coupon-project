// loginPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });
      console.log('Logged in successfully:', response.data);
      // You can redirect the user to another page or perform other actions upon successful login
    } catch (error) {
      console.error('Login failed:', error.response.data.message);
      // Handle login failure, such as displaying an error message to the user
    }
  };


  const navigate = useNavigate();

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => {navigate('/seller/signup')}}>Sign Up</button>
    </div>
  );
};

export default LoginPage;

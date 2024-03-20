// signupPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook




const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
        const response = await axios.post('http://localhost:5000/signup', { name, email, password });
        console.log('Signed up successfully:', response.data);
        
        const userId = response.data.user._id; // Extract userId from response data
        
        navigate(`/seller?userId=${userId}`);  // Navigate to seller page with userId
        
        // You can redirect the user to another page or perform other actions upon successful signup
    } catch (error) {
        console.error('Signup failed:', error.response.data.message);
        // Handle signup failure, such as displaying an error message to the user
    }
};


  
const navigate = useNavigate() ;

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <button onClick={handleSignup}>Signup</button>
      <button onClick={() => {navigate('/sellerPage')}}>Free Login</button>
    </div>
  );
};

export default SignupPage;

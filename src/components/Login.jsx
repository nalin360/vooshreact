import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

import '../assets/CSS/loginForm.css';

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Perform login logic here
    const url = import.meta.env.VITE_LOCALHOST_URL ;
    const body = {
      phoneNumber,
      password,
    };
   
    try {
      const response = await fetch(`${url}/api/login-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (response.ok) {
        // If login is successful, navigate to the Product page
        navigate('/product');
      } else {
        console.error('Login failed:', data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          placeholder='Phone Number'
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div>
        <input
          type="password"
          id="password"
          value={password}
          placeholder='Password'
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>

      <div>
        Don't have an account? <Link to="/signup">Register here</Link>
      </div>
    </form>
  );
};

export default LoginForm;

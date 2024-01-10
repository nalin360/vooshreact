import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/CSS/loginForm.css';
const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Phone Number:', phoneNumber);
    console.log('Password:', password);
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
      {/* Add Link to navigate to Register */}
      <div>
        Don't have an account? <Link to="/signup">Register here</Link>
      </div>
    </form>
  );
};

export default LoginForm;

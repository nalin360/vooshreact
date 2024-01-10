import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import createUser from '../api/createuser';

function Register() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    // console.log('Name:', name);
    // console.log('Phone Number:', phoneNumber);
    // console.log('Password:', password);
    const user = createUser(name,phoneNumber,password)

    // console.log(user);

};

  return (
    <div className='container '>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label>
         
          <input type="text" value={name} onChange={handleNameChange} placeholder='Name'/>
        </label>
        <br />
        <label>
          
          <input type="text" 
          value={phoneNumber} 
          onChange={handlePhoneNumberChange} 
          placeholder='Phone Number'
          />
        </label>
        <br />
        <label>
       
          <input type="password" value={password} onChange={handlePasswordChange} 
          placeholder='Password'
          />
        </label>
        <br />
        <button type="submit">Register</button>
         {/* Add Link to navigate back to Login */}
         <div>
          Already have an account? <Link to="/">Login here</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;

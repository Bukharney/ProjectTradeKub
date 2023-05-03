<<<<<<< HEAD
import React, { useState } from 'react';
import './Styles.css';
import Box from './Box.svg';
import Mockup from './Mockup.svg';
import Logo from './LogoForLogIn.svg'; 
import EyeOff from './EyeOff.svg';
import EyeOn from './EyeOn.svg';


function LoginPage() {

  const [brokerId, setBrokerId] = useState('Select Broker ID');
  const [accountId, setAccountId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  //const history = useHistory();
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    console.log(`Broker ID: ${brokerId}, Account ID: ${accountId}, Password: ${password}`);
    //push('/Dashboard');
  };

  return (
    <div className="Box">
      
      <img 
        src={Box}
        alt="Box"
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '1297px',
          height: '750px',
          left: '310px',
          top: '177px'
        }}
      />
    
      <div className="Mockup">
        <img 
          src={Mockup} 
          alt="Mockup" 
          style={{
            position: 'absolute',
            width: '668.32px',
            height: '398.92px',
            left: '784px',
            top: '350px',
          }}
        />
      </div>

      <div className="Logo">
        <img
          src={Logo}
          alt="Logo"
          style={{
            position: 'absolute',
            width: '278px',
            height: '85px',
            left: '378px',
            top: '231px',
          }}
        />
      </div>

      <div className="WelcomeBack" style={{
            position: 'absolute',
            width: '243px',
            height: '48px',
            left: '470px',
            top: '369px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '48px',
            color: '#FFFFFF',
          }}>
        Welcome Back
      </div>

      <div>
        <text
          style={{
            position: 'absolute',
            width: '200px',
            height: '24px',
            left: '492px',
            top: '417px',

            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#4E4F51',
          }}
        >
          Please enter your details.
        </text>
      </div>

      <div className="Line1">
        <hr
          style={{
            position: 'absolute',
            width: '254px',
            height: '0px',
            left: '465px',
            top: '539px',
            border: '1px solid #4E4F51',
          }}
        />
      </div>

      <div className="Line2">
        <hr
          style={{
            position: 'absolute',
            width: '254px',
            height: '0px',
            left: '465px',
            top: '594px',
            border: '1px solid #4E4F51',
          }}
        />
      </div>

      <div className="Line3">
        <hr
          style={{
            position: 'absolute',
            width: '254px',
            height: '0px',
            left: '465px',
            top: '649px',
            border: '1px solid #4E4F51',
          }}
        />
      </div>
      
      <div className="BrokerId">
        <select
          placeholder='Broker ID'
          value={brokerId}
          onChange={(e) => setBrokerId(e.target.value)}
          style={{
            position: 'absolute',
            width: '254px',
            height: '24px',
            left: '465px',
            top: '508px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FFFFFF',
            background: 'transparent',
            border: 'none',
            outline: 'none',
          }}
        >
          <option value="">Select Brok ID</option>
          <option value="broker1">Broker 1</option>
          <option value="broker2">Broker 2</option>
          <option value="broker3">Broker 3</option>
        </select>
      </div>
      
      <div className="AccountId">
        <input
          type="text"
          placeholder="Account ID"
          value={accountId}
          onChange={e => setAccountId(e.target.value)}
          style={{
            position: 'absolute',
            width: '254px',
            height: '24px',
            left: '465px',
            top: '563px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FFFFFF',
            background: 'transparent',
            border: 'none',
            outline: 'none',
          }}
        />
      </div>

      <div className="Password">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          style={{
            position: 'absolute',
            width: '254px',
            height: '24px',
            left: '465px',
            top: '618px',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '24px',
            color: '#FFFFFF',
            background: 'transparent',
            border: 'none',
            outline: 'none',
          }}
        />

        <div style={{ position: 'relative' }}>
          {password && (
            <img
              src={showPassword ? EyeOff : EyeOn}
              alt="Toggle Password Visibility"
              onClick={handleTogglePassword}
              style={{
                position: 'absolute',
                width: '21px',
                height: '21px',
                left: '698px',
                top: '619px',
                cursor: 'pointer',
              }}
            />
          )}
          </div>
        </div>

        <div className="Button">
        <button
          style={{
            position: 'absolute',
            width: '250px',
            height: '50px',
            left: '469px',
            top: '704px',
            background: '#4E4F51',
            borderRadius: '29.5px',

            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '20px',
            lineHeight: '30px',
            color: '#FFFFFF',
          }}
          onClick={handleLogin}
        >
          Log in
        </button>
      </div>
    </div>
  );
}
export default LoginPage;
=======
import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Add your login logic here
  }

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
>>>>>>> 4d1a727f1ad88924272d1e8d8727b91369930458

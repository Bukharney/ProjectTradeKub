import React from 'react';
import './Styles.css';
import Box from './Box.svg';
import Mockup from './Mockup.svg';
import Logo from './LogoForLogIn.svg'; 
function LoginPage() {
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
    </div>
  );
}
export default LoginPage;
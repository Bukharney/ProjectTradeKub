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
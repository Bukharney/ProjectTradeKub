import React, { useState } from 'react';
import './StyleforLogin.css';
import Box from './SVG/Box.svg';
import Mockup from './SVG/Mockup.svg';
import Logo from './SVG/LogoForLogIn.svg'; 
import EyeOff from './SVG/EyeOff.svg';
import EyeOn from './SVG/EyeOn.svg';

function LoginPage() {

    const [brokerId, setBrokerId] = useState('');
    const [accountId, setAccountId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };


    function handleLogin() {
        if (brokerId == "broker2" & accountId == "BigZlnwza" & password == "1234") 
        {
            console.log(`Broker ID: ${brokerId}, Account ID: ${accountId}, Password: ${password}`);
            alert("Login Success");
            setBrokerId("");
            setAccountId("");
            setPassword("");
            setShowPassword(false);
            setErrorMessage("");
        } 
        else 
        {
            setErrorMessage("Please check your information again");
        }
    }

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
                top: '520px',
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
                top: '575px',
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
                top: '630px',
                border: '1px solid #4E4F51',
            }}
            />
        </div>
        
        <div className="BrokerId">
            <select 
            value={brokerId}
            onChange={(e) => setBrokerId(e.target.value)}
            style={{
                position: 'absolute',
                width: '254px',
                height: '24px',
                left: '465px',
                top: '489px',
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
            <option value="">Select Broker</option>
            <option value="broker1">Bigboss</option>
            <option value="broker2">BigZ</option>
            <option value="broker3">Peerapat</option>
            <option value="broker3">OckZa</option>
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
                top: '544px',
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
                top: '600px',
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
                    top: '603px',
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
            {errorMessage && (
            <div
                style={{
                    position: 'absolute',
                    width: '293px',
                    height: '24px',
                    left: '445px',
                    top: '668px',

                    fontFamily: 'Poppins',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: '#CD3D42' 
                }}
            >
            {errorMessage}
            </div>
        )}
        </div>
    </div>
    );
}export default LoginPage;
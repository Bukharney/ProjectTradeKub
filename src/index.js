import React from 'react';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
import SelectAcc from './component/Page/SelectAccount/SelectAcc';
import Register from './component/Page/Register/Register';
const root = createRoot(document.getElementById('root'));
root.render(<SelectAcc />);
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './GovernmentView.css'
import Table from './Table';
import { tablesColumns, tablesRows } from './databaseTables';
 
  let index = 0;

  
export const GovernmentView = () => {
  const [click, setClick] = useState(false);

  const handleClick = (i) => {
    index = i;
    setClick(!click);
   };

 
  return (
    <div>
      <button className='Box' onClick={() => handleClick(1)}>User</button>
      {(index===1) && <Table columns={tablesColumns[0]} rows={tablesRows[0]}/>} 
      
      <button className='Box' onClick={() => handleClick(2)}>Account</button>
      {(index===2) && <Table columns={tablesColumns[1]} rows={tablesRows[1]}/>} 

      <button className='Box' onClick={() => handleClick(3)}>Broker</button>
      {(index===3) && <Table columns={tablesColumns[2]} rows={tablesRows[2]}/>} 

      <button className='Box' onClick={() => handleClick(4)}>Bank Transaction</button>
      {(index===4) && <Table columns={tablesColumns[3]} rows={tablesRows[3]}/>} 

      <button className='Box' onClick={() => handleClick(5)}>Stock Order</button>
      {(index===5) && <Table columns={tablesColumns[4]} rows={tablesRows[4]}/>} 

      <button className='Box' onClick={() => handleClick(6)}>Stock Transaction</button>
      {(index===6) && <Table columns={tablesColumns[5]} rows={tablesRows[5]}/>} 

      <button className='Box' onClick={() => handleClick(7)}>Login&Logout Record</button>
      {(index===7) && <Table columns={tablesColumns[6]} rows={tablesRows[6]}/>} 

      <button className='Box' onClick={() => handleClick(8)}>Company Details</button>
      {(index===8) && <Table columns={tablesColumns[7]} rows={tablesRows[7]}/>} 

      <button className='Box' onClick={() => handleClick(9)}>Turnover</button>
      {(index===9) && <Table columns={tablesColumns[8]} rows={tablesRows[8]}/>} 

      <button className='Box' onClick={() => handleClick(10)}>Divident</button>
      {(index===10) && <Table columns={tablesColumns[9]} rows={tablesRows[9]}/>} 

      <button className='Box' onClick={() => handleClick(11)}>News</button>
      {(index===11) && <Table columns={tablesColumns[10]} rows={tablesRows[10]}/>} 

      </div>
  );
};

export default GovernmentView;
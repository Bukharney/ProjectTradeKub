import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './AnalyticPage.css'
import TableWithBlankRow from './TableWithBlankRow';
import TableWithoutBlankRow from './TableWithoutBlankRow';
import { tablesColumns, tablesRows } from './AnalyticData';
 
  let index = 0;
  
  
export const AnalyticPage = () => {
  const [click, setClick] = useState(false);

  const handleClick = (i) => {
    index = i;
    setClick(!click);
   };

 
  return (
    <div>
      <button className='Box' onClick={() => handleClick(1)}>Most Volume Sum by Company</button>
      {(index===1) && <TableWithBlankRow columns={tablesColumns[0]} rows={tablesRows[0]}/>} 
      
      <button className='Box' onClick={() => handleClick(2)}>Most new Contract by Broker Company</button>
      {(index===2) && <TableWithoutBlankRow columns={tablesColumns[1]} rows={tablesRows[1]}/>} 

      <button className='Box' onClick={() => handleClick(3)}>Most closed stock value by date</button>
      {(index===3) && <TableWithoutBlankRow columns={tablesColumns[2]} rows={tablesRows[2]}/>} 

      <button className='Box' onClick={() => handleClick(4)}>Most Cancel Ratio by date</button>
      {(index===4) && <TableWithoutBlankRow columns={tablesColumns[3]} rows={tablesRows[3]}/>} 


      </div>
  );
};

export default AnalyticPage;



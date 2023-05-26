import axios from "axios";
import './AnalyticPage.css'
import AuthContext from "../../../Context/AuthContext";
import TokenContext from "../../../Context/TokenContext";
import Cookies from "js-cookie";
import React, { useState, useContext } from "react";


  

/*
SELECT c.company_name, c.stock_symbol, 
       SUM(t.volume) AS Volume_Sum,
       COUNT(DISTINCT o.order_id) AS total_number_of_orders,
       SUM(CASE WHEN o.order_type = 'BUY' THEN 1 ELSE 0 END) AS total_buying_orders,
       SUM(CASE WHEN o.order_type = 'SELL' THEN 1 ELSE 0 END) AS total_selling_orders
FROM COMPANY_DETAIL_TABLE c
     JOIN STOCK_ORDER_TABLE o ON c.stock_symbol = o.stock_symbol
     JOIN STOCK_TRANSCATION_TABLE t ON o.order_id = t.order_id
WHERE o.order_date >= '1990-01-10' AND o.order_date <= '1990-01-15'
GROUP BY c.company_name, c.stock_symbol
ORDER BY Volume_Sum DESC
;

*/
const Most_Volume_Sum_by_Company = [
  { Company: 'A', Volume_Sum: 500,Avg_Price:40,total_buying_orders: 200 ,total_selling_orders:200},
  { Company: 'A', Volume_Sum: 500,Avg_Price:40,total_buying_orders: 200 ,total_selling_orders:200},
  { Company: 'A', Volume_Sum: 500,Avg_Price:40,total_buying_orders: 200 ,total_selling_orders:200},
  { Company: 'A', Volume_Sum: 500,Avg_Price:40,total_buying_orders: 200 ,total_selling_orders:200},
  { Company: 'B', Volume_Sum: 500,Avg_Price:40,total_buying_orders: 200 ,total_selling_orders:200},
  { Company: 'B', Volume_Sum: 500,Avg_Price:40,total_buying_orders: 200 ,total_selling_orders:200},
  { Company: 'B', Volume_Sum: 500,Avg_Price:40,total_buying_orders: 200 ,total_selling_orders:200},
  { Company: 'B', Volume_Sum: 500,Avg_Price:40,total_buying_orders: 200 ,total_selling_orders:200},
 

];

const Most_New_Contract_by_Broker_Company = [
  { Broker: 'CPE',
    Total_Account_Contract_Before_The_Time_Range: 7602, 
    TotalNewAccount: 2212,
    Total_Deleted_Account: 3, 
    Total_Account:9811,
    Percentage_New_Per_PreviosTotal: 1111,
    Total_Active_Account_: 1041
  },
  { Broker: 'A',
  Total_Account_Contract_Before_The_Time_Range: 7602, 
  TotalNewAccount: 2212,
  Total_Deleted_Account: 3, 
  Total_Account:9811,
  Percentage_New_Per_PreviosTotal: 1111,
  Total_Active_Account_: 1041
},
{ Broker: 'B',
Total_Account_Contract_Before_The_Time_Range: 7602, 
TotalNewAccount: 2212,
Total_Deleted_Account: 3, 
Total_Account:9811,
Percentage_New_Per_PreviosTotal: 1111,
Total_Active_Account_: 1041
},
 ];

const Most_Close_Stock_Value_By_Date = [
  { Company: 'Company-A', Stock_Symbol: "KM",Volume: 2345435, Date: '1990-01-28',Value:14705877.45,TotalUserHolder:7545},
  { Company: 'Company-B', Stock_Symbol: "UTT",Volume: 2345435, Date: '1990-01-29',Value:14705877.45,TotalUserHolder:7545},
  { Company: 'Company-C', Stock_Symbol: "IS",Volume: 2345435, Date: '1990-01-30',Value:14705877.45,TotalUserHolder:7545},


];

const BankTransition = [
  {
   Company: 'Company-A', 
   Canceled_Stock_Symbol: "KM",
   Date: '1990-01-28',
   Avg_Cancel_Price: 6.97,
   Closed_Price: 6.27,
   Percentage:0.9,
   Cancel_Rate: 0.05
  },
  {
    Company: 'Company-B', 
    Canceled_Stock_Symbol: "KM",
    Date: '1990-01-29',
    Avg_Cancel_Price: 6.97,
    Closed_Price: 6.27,
    Percentage:0.9,
    Cancel_Rate: 0.05
   },
   {
    Company: 'Company-C', 
    Canceled_Stock_Symbol: "KM",
    Date: '1990-01-30',
    Avg_Cancel_Price: 6.97,
    Closed_Price: 6.27,
    Percentage:0.9,
    Cancel_Rate: 0.05
   },
  
  
  
 ];


const Most_Volume_Sum_by_Company_Columns = Object.keys(Most_Volume_Sum_by_Company[0]);
const Most_New_Contract_by_Broker_Company_Columns = Object.keys(Most_New_Contract_by_Broker_Company[0]);
const Most_Close_Stock_Value_By_Date_Columns = Object.keys(Most_Close_Stock_Value_By_Date[0]);
const bankTransitionColumns = Object.keys(BankTransition[0]);


const tablesColumns = [
  Most_Volume_Sum_by_Company_Columns,
  Most_New_Contract_by_Broker_Company_Columns,
  Most_Close_Stock_Value_By_Date_Columns,
  bankTransitionColumns,

];

export { tablesColumns };

const Most_Volume_Sum_by_Company_Rows = Most_Volume_Sum_by_Company.map(document => Object.values(document));
const Most_New_Contract_by_Broker_Company_Rows = Most_New_Contract_by_Broker_Company.map(document => Object.values(document));
const Most_Close_Stock_Value_By_Date_Rows = Most_Close_Stock_Value_By_Date.map(document => Object.values(document));
const bankTransitionRows = BankTransition.map(document => Object.values(document));


const tablesRows = [
  Most_Volume_Sum_by_Company_Rows,
  Most_New_Contract_by_Broker_Company_Rows,
  Most_Close_Stock_Value_By_Date_Rows,
  bankTransitionRows,
];

export { tablesRows };

 
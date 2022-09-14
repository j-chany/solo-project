import React from 'react';
import  { useState, useEffect } from 'react';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Expense from './expense.jsx';


function ExpenseLog({user}) {
  const [allData, setAllData] = useState('')

  // function to submit Get request
  const getData = () => {
    const userData = []; 
    // submit a get request and recive all user data
    fetch (`http://localhost:3000/dashboard/expense/?id=${user}`)
      .then ((response) => response.json())
      .then ((data) => {
        data.forEach(expense => userData.push(expense))
        setAllData(userData)
      })
      .catch((e) => console.log('Error is', e))
  }
  // invoke function to get update 
  getData(); 

  // function that will generate array of expenses according to length of the expense log
  const generateRows = (data) => {
    const dataArr = []; 
     for (let i = 0; i< data.length; i++) {
      dataArr.push(<Expense key={i} Expid={data[i]._id}name={data[i].name} amount={data[i].amount} categories={data[i].categories} data={data[i].date} />)
    }
    return dataArr;
  }

    return  (
      <div>
        <span>All expenseess </span>
        {generateRows(allData)}
      </div>
    )
  }
  
  
  
  export default ExpenseLog;
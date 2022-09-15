import React from 'react';
import  { useState, useEffect } from 'react';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Expense from './expense.jsx';


function ExpenseLog({user, allData, setAllData, setDoneGrabbing}) {

  // function to submit Get request
  useEffect(() =>{
    const userData = []; 
    // submit a get request and recive all user data
    fetch (`http://localhost:3000/dashboard/expense/?id=${user}`)
      .then ((response) => response.json())
      .then ((data) => {
        data.forEach(expense => userData.push(expense))
        setAllData(userData)
        setDoneGrabbing(true)
      })
      .catch((e) => console.log('Error is', e))
  }, [allData])
  // invoke function to get update 
  // getData(); 

  // function that will generate array of expenses according to length of the expense log
  const generateRows = (data) => {
    const dataArr = []; 
     for (let i = 0; i< data.length; i++) {
      dataArr.push(<Expense date={data[i].date} user={user} key={i} Expid={data[i]._id}name={data[i].name} amount={data[i].amount} categories={data[i].categories} data={data[i].date} />)
    }
    return dataArr;
  }

    return  (
      <div>
        <h2>All expenseess </h2>

        {generateRows(allData)}
      </div>
    )
  }
  
  
  
  export default ExpenseLog;
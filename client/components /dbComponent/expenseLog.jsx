import React from 'react';
import  { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { Chart } from "react-google-charts";


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import Expense from './expense.jsx';


function ExpenseLog({user, allData, setAllData, setDoneGrabbing, budget, doneGrabbing}) {

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

  const clearAll = (e) => {
    e.preventDefault();

    const body = {user: user}
    const deleteAll = window.confirm(`Delete All Expense?`)
    if (deleteAll) {
      fetch('http://localhost:3000/dashboard/expense/clearall',{

      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(body)
    })
      .then((response) => response.json())
      .then(data => console.log(data))
      .catch((e) => console.log(`ERROR ! ERROR message: ${e}`))
   
    }
  }
  const amount = (data) => {
    if (doneGrabbing) {
    let total = 0; 
    allData.forEach((expense) => total+= expense.amount)
    return total;
    }
  }
  const totalExpense = amount(allData)
  let remaining = budget - totalExpense; 
  if (remaining < 0 ) remaining = 0 
  const chartdata = [
    ["Type", "dollars"],
    ["Total Spent",totalExpense ],
    ["Remaining", remaining],
  ];
  const chartOptions = {
    title: "Current Budget Left",
    is3D: true,
    backgroundColor: { fill:'transparent' }
  };
    // if set, then do update
  //   useEffect((allData) => {

    return  (
      <div className='middleContent'>
        <h2>Your expenses: </h2>
        <Button type="button" onClick={clearAll} color="error" variant="outlined"> Clear All</Button>

        {generateRows(allData)}
        {/* chart */}
        <Chart
        chartType="PieChart"
        data={chartdata}
        options={chartOptions}
        width={"550px"}
        height={"400px"}
    />
      </div>
    )
  }
  
  
  
  export default ExpenseLog;
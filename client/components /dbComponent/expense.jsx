import React from 'react';
import  { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Expense({user,name,amount,categories,Expid,date}) {
  
  // onclick to submit delete request
  const handleClick = (e) => {
    e.preventDefault();

    const body = {id: Expid}
    const confirm = window.confirm(`Delete expense: ${name} ?`)
    // backend is looking for 
    // submit delete request 
    if (confirm)
    fetch('/api/dashboard/expense',{

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

  // function to turn date into nice format
  function formatDate (date) {
    const newdate = date.substr(0,10)
    return newdate
  }
  const newDate = formatDate(date)

  return  (
      <div className='indvExpense'>
        <span>{name}:</span><br></br>
        <span> ${amount}</span><br></br>
        <span>Categories: {categories}</span><br></br>
        <span>Date: {newDate}</span><br></br>

        <button onClick={handleClick}><FaTimes /> </button> 
      </div>
    )
  }
  
  
  
  export default Expense;
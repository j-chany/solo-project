import React, { Component } from 'react';
import  { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Budget ({allData, doneGrabbing, user}) {
  const [budget, setBudget] = useState(0)

// useeffect to grab current budget, if doesnt exisit then use the original 0
  useEffect(() => {
    if (budget !== 0){
    fetch(`http://localhost:3000/budget/?user=${user}`)
      .then(response => response.json())
      .then((data) => setBudget(data))
      .catch((e) => console.log('Error is', e))
  }
  })
  // handle submit
  const amount = (data) => {
    if (doneGrabbing) {
    let total = 0; 
    allData.forEach((expense) => total+= expense.amount)
    return total;
    }
  }
    // if set, then do update
  //   useEffect((allData) => {
  const totalAmount = amount(allData)
 
  // handle onclick
  function handleClick (e) {
    // update request 
    e.preventDefault();
    // ask user to input an amount
    const newBudget = prompt("Please tell us your budget") 
    setBudget(newBudget); 
    console.log(newBudget)
      // set state of budget to new budget
    
    const body = {user: user, budget:newBudget}
    console.log('BODY IS', body)
    if (budget === 0) {
      fetch('http://localhost:3000/budget/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then(response => response.json())
        .then(data => console.log('Initial Budget Set'))
        .catch((e) => console.log('Error is', e))
    }
    else {fetch('http://localhost:3000/budget/', 
      {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('UPDATED')
          console.log(data)
        })
      .catch((e) => console.log('Error is', e))
    }
    }

  return (

    <div className='budgetContainer'>
     
      <span>Budget: ${budget}</span>
      <span> Total Spending: ${totalAmount}  </span>  <br></br>  
      <span> Total Remaining: ${budget-totalAmount}   </span>  <br></br>  

      <Button onClick={handleClick} type="text" variant="contained">Update here!</Button>
    </div>

  )
}

export default Budget;
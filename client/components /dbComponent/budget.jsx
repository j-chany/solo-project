import React, { Component } from 'react';
import  { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Budget ({allData, doneGrabbing, user, setBudget, budget}) {
  const [fromCurr, setfromCurr] =useState('');
  const [toCurr, setToCurr] = useState(''); 
  const [currAmount, setAmount] = useState(''); 
// useeffect to grab current budget, if doesnt exisit then use the original 0
  useEffect(() => {
    
    fetch(`/budget/?user=${user}`)
      .then(response => response.json())
      .then((data) => setBudget(data))
      .catch((e) => console.log('Error is', e))
  
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

    function handleConvert (e) {
      e.preventDefault();

      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '6410d20a69msh62b961c027a9feap1ba2eajsnc81a1014ddff',
          'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
        }
      };
      
      fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${fromCurr}&want=${toCurr}&amount=${currAmount}`, options)
        .then(response => response.json())
        .then(response => {
          console.log(response.new_amount);
          window.alert(`$${currAmount} ${fromCurr} is $${response.new_amount} ${toCurr}`)
        
        })
        .catch(err => console.error(err));



    }

  return (
    <div className='rightContainer'>
    <div className='budgetContainer'>
     
      <span>Budget: ${budget}</span>
      <span> Total Spending: ${totalAmount}  </span>  <br></br>  
      <span> Total Remaining: ${budget-totalAmount}   </span>  <br></br>  

      <Button onClick={handleClick} type="text" variant="contained">Update Budget</Button>
    </div>



    <div className='currencyConverter'>
    {/* converter */}
    <span>Try Our Currency Converter </span>
    <Button  onClick={handleConvert} type="text" variant="text">Convert </Button>
    
    <TextField 
      margin='normal'
      required 
      name='Convert From' 
      type='Convert From' 
      id="Convert From" 
      label="Convert From:" 
      variant="outlined" 
      
      autoComplete="Convert From" 
      autoFocus
      onChange={(newValue) => setfromCurr(newValue.target.value)}
    /> 

  <TextField 
      margin='normal' 
      required name='Convert To' 
      type='Convert To' 
      id="Convert To" 
      label="Convert To:" 
      variant="outlined" 
      autoComplete="Convert To"
      onChange={(newValue) => setToCurr(newValue.target.value)}
  />
    <TextField 
      margin='normal' 
      required name='Amount' 
      type='Amount' 
      id="Amount" 
      label="Amount:" 
      variant="outlined" 
      autoComplete="Amount"
      onChange={(newValue) => setAmount(newValue.target.value)}
  />
  

    </div>
    </div>

  )
}

export default Budget;
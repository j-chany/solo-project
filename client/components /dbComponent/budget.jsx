import React, { Component } from 'react';
import  { useState, useEffect } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Budget ({allData, doneGrabbing}) {
  const [budget, setBudget] = useState('')
  // handle submit
  const amount = (data) => {
    if (doneGrabbing) {
    let total = 0; 
    allData.forEach((expense) => total+= expense.amount)
    return total;
    }
  }
    // if budget state is not set, then create call
    // if set, then do update
  //   useEffect((allData) => {
  const totalAmount = amount(allData)
 

  return (

    <div className='budgetContainer'>
      <h4>Budget here</h4>
      <Box component="form" onSubmit={()=> console.log('hi')} noValidate sx={{ mt: 1 }}> 
      <TextField 
        margin='normal'
        required 
        name='Budget' 
        type='Budget' 
        id="Budget" 
        label="Budget:" 
        variant="outlined" 
        fullWidth
        autoComplete="Budget" 
        autoFocus
        onChange={(newValue) => setBudget(newValue.target.value)}
      /> 
    
      </Box>
      <span> Total Spending: ${totalAmount}  </span>
      {/* Total left */}
    </div>

  )
}

export default Budget;
import React from "react";


import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import  { useState, useEffect } from 'react';

function NewExpenseCreator({user, name}) {
  // get state 
  const [expenseName,setExpenseName] = useState('')
  const [categories,setCategories] = useState('')
  const [amount,setAmount] = useState('')
  const [date,setDate] = useState('')

  // onsubmit, do a post request to add expense to user expense log 
  const handleSubmit = (e) => {
    e.preventDefault();
    // clear input field after submit
    const expenseInput = document.getElementById('Expense Name');
    const categoriesInput = document.getElementById('Categories');
    const amountInput = document.getElementById('Amount');
    const dateInput = document.getElementById('Date');

    expenseInput.value = ''
    categoriesInput.value = ''
    amountInput.value = ''
    dateInput.value = ''

    const body = { 
      name: expenseName, 
      categories: categories,
      amount: amount,
      date: date,
      user: user,
    }
    console.log(date)

    // fetch post request
    fetch('/dashboard/expense',{

      method: 'POST',
      headers: {
        // 'Accept': 'object',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      // clear state for future expense input
      setExpenseName('')
      setCategories('')
      setAmount('')
      setDate('')
      })
      .catch((e) => console.log(e))

  }
    return  (
      <div className="NewExpenseContainer">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}> 
        <h4>Create New Expense</h4>
        <TextField 
          margin="normal" 
          name="Expense Name" 
          type="Expense Name" 
          id="Expense Name" 
          label="Expense Name:" 
          variant="standard" 
          
          autoFocus
          onChange={(newValue) => setExpenseName(newValue.target.value)}
        /> 
          <br></br>

          <TextField 
          margin="normal" 
          name="Categories" 
          type="Categories" 
          id="Categories" 
          label="Categories" 
          variant="standard" 
          
          autoFocus
          onChange={(newValue) => setCategories(newValue.target.value)}
        /> 
          <br></br>

          <TextField 
          margin="normal" 
          name="Amount" 
          type="Amount" 
          id="Amount" 
          label="Amount" 
          variant="standard" 
          
          autoFocus
          onChange={(newValue) => setAmount(newValue.target.value)}
        /> 
          <br></br>

        
          <TextField 
          margin="normal" 
          name="Date"
          type="Date" 
          id="Date" 
          variant="standard" 
          autoFocus
          onChange={(newValue) => setDate(newValue.target.value)}
        /> 
        <br></br>
        <Button variant="contained" type="submit">Create Expense</Button>
      </Box>
    </div>
    )
  }
  
  
  
  export default NewExpenseCreator;
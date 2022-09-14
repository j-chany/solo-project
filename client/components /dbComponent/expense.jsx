import React from 'react';
import  { useState, useEffect } from 'react';


import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function Expense({name,amount,categories,Expid,date}) {


  return  (
      <div className='indvExpense'>
        <span>Reason: {name}</span><br></br>
        <span>Amount: ${amount}</span><br></br>
        <span>Categories: {categories}</span><br></br>
      </div>
    )
  }
  
  
  
  export default Expense;
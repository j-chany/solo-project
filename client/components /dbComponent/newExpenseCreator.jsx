import React from "react";


import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";


function NewExpenseCreator({user, name}) {
  // get state 

  
    return  (
      <div className="NewExpenseContainer">
      <Box component="form" onSubmit={()=>console.log("hi")} noValidate sx={{ mt: 1 }}> 
        <h4>Create New Expense</h4>
        <TextField 
          margin="normal" 
          name="Expense Name" 
          type="Expense Name" 
          id="Expense Name" 
          label="Expense Name:" 
          variant="standard" 
          
          autoComplete="name" 
          autoFocus
          onChange={(newValue) => setName(newValue.target.value)}
        /> 
          <br></br>

          <TextField 
          margin="normal" 
          name="Categories" 
          type="Categories" 
          id="Categories" 
          label="Categories" 
          variant="standard" 
          
          autoComplete="name" 
          autoFocus
          onChange={(newValue) => setName(newValue.target.value)}
        /> 
          <br></br>

          <TextField 
          margin="normal" 
          name="Amount" 
          type="Amount" 
          id="Amount" 
          label="Amount" 
          variant="standard" 
          
          autoComplete="Amount" 
          autoFocus
          onChange={(newValue) => setName(newValue.target.value)}
        /> 
          <br></br>

        
          <TextField 
          margin="normal" 
          name="Date"
          type="Date" 
          id="Date" 
          variant="standard" 
          autoComplete="Date" 
          autoFocus
          onChange={(newValue) => setName(newValue.target.value)}
        /> 
        <br></br>
        <Button variant="text" type="submit">Create Expense"</Button>
      </Box>
    </div>
    )
  }
  
  
  
  export default NewExpenseCreator;
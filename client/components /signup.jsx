import React, { Component } from 'react';
import { render } from 'react-dom';
import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import signup1 from '../assets /signup1.gif'


function SignUp({setUser,setName, name}) {
    const [username, setUsername] = useState('')
    const [password, setPassWord] = useState('')
    // when user click sign in button
    const handleSignUp = (e) => {
      e.preventDefault();
    
    // setting username and password to state when user log in

    const body = { username: username, password: password, name: name }

    //   submit post request to sign up
      fetch('/signup',{
  
        method: 'POST',
        headers: {
          // 'Accept': 'object',
          'Content-Type': 'application/json',
          },
        body: JSON.stringify(body)
      })
      .then((response) => response.json())
      .then((data) => {
        setUser(data._id);
        navigateToDashBoard();
        })
        .catch((e) => console.log(e))
    }
    const navigate = useNavigate(); 

    const navigateToDashBoard= () => {
      navigate('/dashboard')
    }
 
  
    return (
   
   <div className='signUpContainer'>
    <Box component="form" onSubmit={handleSignUp} noValidate sx={{ mt: 1 }}> 
      <img src={signup1} alt="signup"/>
      <div></div>
      {/* Input for name */}
      <TextField 
        margin='normal' 
        name='name' 
        type='name' 
        id="name" 
        label="name:" 
        variant="outlined" 
        
        autoComplete="name" 
        autoFocus
        onChange={(newValue) => setName(newValue.target.value)}
      /> 
      <br></br>

      {/* input for username */}
      <TextField 
        margin='normal'
         
        name='username' 
        type='username' 
        id="username" 
        label="username:" 
        variant="outlined" 
        
        autoComplete="username" 
        autoFocus
        onChange={(newValue) => setUsername(newValue.target.value)}
      /> 
      <br></br>

      {/* input for username */}
      <TextField 
        margin='normal' 
        name='password' 
        type='password' id="password" 
        label="password:" 
        variant="outlined" 
        
        autoComplete="password"
        onChange={(newValue) => setPassWord(newValue.target.value)}
      />
      <br></br>

      <Button type="submit" variant="text"> Start my tracking journey</Button>

    </Box>
  </div>
    )
  }
  
    {/* <label for="username">Username:</label> <br></br> */}
    {/* <input type="text" id="username" name="username"></input><br></br> */}
    {/* <label for="password">Password:</label> <br></br> */}
    {/* <input type="text" id="password" name="password"></input><br></br> */}
  


export default SignUp;
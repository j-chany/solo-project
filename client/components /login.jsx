import React, {useState}  from 'react';
import { useNavigate } from 'react-router-dom';


import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../assets /logo.png'

import SignUp from './signup.jsx';


function Login ({setUser, setName}) {

  const [username, setUsername] = useState('')
  const [password, setPassWord] = useState('')
  const [loginStatus, setLoginStatus] = useState(false)
  // when user click sign in button
  const handleSignin = (e) => {
    e.preventDefault();

    const body = { username: username, password: password }

    // submit post request to sign in
    fetch('/api/login',{

      method: 'POST',
      headers: {
        // 'Accept': 'object',
          'Content-Type': 'application/json',
        },
      body: JSON.stringify(body)
    })
    .then((response) => response.json())
    .then((data) => {
      // only proceed if response has name(right pw)
      if (data.hasOwnProperty('username')) {
      setLoginStatus(true);
      setUser(data._id);
      setName(data.name); 
      navigateToDashBoard();
      }
      else {window.alert('Incorrect username or password! Try again. ')}
      })
      .catch((e) => console.log(e))
  }

  // if user click create account
  const navigate = useNavigate(); 
  
  const navigateToSignUp = () => {
    navigate('/signup')
  }

  const navigateToDashBoard= () => {
    navigate('/dashboard')
  }


  return (
 
  <div className='loginContainer'>
  <Box component="form" onSubmit={handleSignin} noValidate sx={{ mt: 1 }}> 
  
  <div id='Loginheader'> </div>
  <img src={logo} alt="Logo"/>
  <TextField 
  margin='normal'
  required 
  name='username' 
  type='username' 
  id="username" 
  label="username:" 
  variant="outlined" 
  fullWidth
  autoComplete="username" 
  autoFocus
  onChange={(newValue) => setUsername(newValue.target.value)}
  /> <br></br>
  {/* <label for="password">Password:</label> <br></br> */}
  {/* <input type="text" id="password" name="password"></input><br></br> */}
  <TextField 
  margin='normal' 
  required name='password' 
  type='password' id="password" 
  label="password:" 
  variant="outlined" 
  fullWidth
  autoComplete="password"
  onChange={(newValue) => setPassWord(newValue.target.value)}
  /><br></br>
  <Button type="submit" variant="text">Login</Button>
  <Button type="button" onClick={navigateToSignUp} variant="text"> Create Account</Button>
  <p>
    <a href="/" target="_blank">Privacy Policy   </a> 
    | 
    <a href="/" target="_blank">   Contact Us</a>
  </p>
  </Box>

  </div>
  )
}

  {/* <label for="username">Username:</label> <br></br> */}
  {/* <input type="text" id="username" name="username"></input><br></br> */}
  {/* <label for="password">Password:</label> <br></br> */}
  {/* <input type="text" id="password" name="password"></input><br></br> */}
export default Login;

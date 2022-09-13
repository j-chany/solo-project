import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Routes} from 'react-router-dom';
import Login from './login.jsx';
import SignUp from './signup.jsx';


function App() {
 
  return  (
    <Routes>
      <Route path='/' element= {<Login /> } />
      <Route path='/dashboard' element= {<h1> dashBoardddddd </h1>} />
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
  )
}

// export component
export default App;

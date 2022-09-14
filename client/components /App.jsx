import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Routes} from 'react-router-dom';
import Login from './login.jsx';
import SignUp from './signup.jsx';
import DashBoard from './dashboard.jsx';
import  { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState('')
  const [name, setName] = useState('')
  return  (
    <div className="App"> 
    <Routes>
      <Route path='/' element= {<Login setUser={setUser} setName={setName}/> } />
      <Route path='/dashboard' element= {<DashBoard user={user} name={name} />} />
      <Route path='/signup' element={<SignUp />}/>
    </Routes>
    </div>
  )
}

// export component
export default App;

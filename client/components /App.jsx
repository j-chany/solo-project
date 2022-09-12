import React, { Component } from 'react';
import { render } from 'react-dom';
import { Route, Routes} from 'react-router-dom';
import Login from './login.jsx';


function App() {
 
  return  (
    <Routes>
      <Route path='/' element= {<Login /> } />
      <Route path='/login' element= {<h1> hello </h1>} />

    </Routes>
  )
}

// export component
export default App;

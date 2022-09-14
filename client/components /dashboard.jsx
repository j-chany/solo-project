import React, { Component } from 'react';
import { render } from 'react-dom';
import  { useState, useEffect } from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom';
import MainContainer from './dbComponent/mainContainer.jsx'

function DashBoard({user,name}) {
// get state 
useEffect(()=> {
  
})

  return  (
  <div>
      <MainContainer user={user} name={name} />
      
  </div>
  )
}



export default DashBoard;
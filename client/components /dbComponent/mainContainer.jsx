import React, { Component } from 'react';
import { render } from 'react-dom';
import  { useState, useEffect } from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom';

import NewExpenseCreator from './newExpenseCreator.jsx';
import ExpenseLog from './expenseLog.jsx';
import Budget from './budget.jsx';

function MainContainer ({user, name}) {
  // set state here so budget also has access to data to calculate how much left to spend 
  const [allData, setAllData] = useState('')
  const [doneGrabbing, setDoneGrabbing] = useState(false)
  return (
    <div className='mainContainer'>
      <div className='expenseHeader'>
      <div>Bread Tracker 1.0</div>
      <div>Welcome to Bread Tracker {name} </div>
      </div>
      <div className='expenseContent'> 
      <NewExpenseCreator user={user} />
      <ExpenseLog user={user} setDoneGrabbing={setDoneGrabbing} allData={allData} setAllData={setAllData} />
      <Budget allData={allData} user={user} doneGrabbing={doneGrabbing}/>
      </div>
    </div>
  )
}

export default MainContainer;
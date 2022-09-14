import React, { Component } from 'react';
import { render } from 'react-dom';
import  { useState, useEffect } from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom';

import NewExpenseCreator from './newExpenseCreator.jsx';
import ExpenseLog from './expenseLog.jsx';

function MainContainer ({user, name}) {

  return (
    <div className='mainContainer'>
      <div className='expenseHeader'>
      <div>Bread Tracker 1.0</div>
      <div>Welcome to Bread Tracker {name} </div>
      </div>
      <div className='expenseContent'> 
      <NewExpenseCreator user={user} />
      <ExpenseLog user={user} />
      </div>
    </div>
  )
}

export default MainContainer;
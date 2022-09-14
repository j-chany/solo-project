import React, { Component } from 'react';
import { render } from 'react-dom';
import  { useState, useEffect } from 'react'
import { Route, Routes, useNavigate} from 'react-router-dom';

import NewExpenseCreator from './newExpenseCreator.jsx';
import ExpenseLog from './expenseLog.jsx';

function MainContainer ({user, name}) {

  return (
    <div className='mainContainer'>
      <h1>Welcome to Bread Tracker {name} </h1>
      <NewExpenseCreator user={user} />
      <ExpenseLog user={user} />
    </div>
  )
}

export default MainContainer;
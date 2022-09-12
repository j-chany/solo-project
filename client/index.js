import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './components /App.jsx';

// Import our custom CSS
import './css/login.scss';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
<BrowserRouter> 
  <App />
</BrowserRouter>
);

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// import { Button } from 'reactstrap';

import Main from './Main'
import registerServiceWorker from './registerServiceWorker'
import './includes/css/generic_style.scss'

import 'bootstrap/dist/css/bootstrap.min.css'
import { IsBrowserOnDarkMode } from './tools/ThemeSwitches'

/**
 * JS Meter for CPU, RAM,
 * and Javascript Heap Code
 */
// const jm = require('js-meter');
// const isPrint = true;
// const isKb = true;
// const isMs = false;
// const m = new jm({isPrint, isKb, isMs})
// for(var i=0; i<10000; i++) { Math.random(); }
// const meter = m.stop()
// console.log('meter: ', meter);

/**
 * Refresh this website for every set interval
 */
// var http = require("http");
// setInterval(() =>
// {
//     http.get("http://ferickandrew-react.herokuapp.com");
// }, 1799900); //run for every 30 minutes

/**
 * Set default Dark Mode to off on Local Storage
 * in case if it's not found or loaded on first time
 */
if (localStorage.getItem('Dark Mode') === null)
  localStorage.setItem('Dark Mode', false)

localStorage.setItem('Dark Mode', IsBrowserOnDarkMode)

ReactDOM.render(
  <Router>
    <Main />
  </Router>,
  document.getElementById('root')
)

registerServiceWorker()

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollToTop from "./ScrollToTop.js";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router >
    <ScrollToTop />
    <App />
  </Router>, document.getElementById('root'));

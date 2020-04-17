import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ScrollToTop from "./ScrollToTop.js";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router onUpdate={() => window.scrollTo(0,0)}>
    <ScrollToTop />
    <App />
  </Router>, document.getElementById('root'));

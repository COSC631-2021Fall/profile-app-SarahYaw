import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components';
//import {education, skills, projects, prevWork} from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);
//ReactDOM.render(
//  <React.StrictMode>
//    <Footer />
//  </React.StrictMode>,
//  document.getElementById('footer')
//);


import './index.css';
import App from './App';
import React from 'react';
import Buy from './components/Buy';
import Sell from './components/Sell';
import Login from './components/Login';
import Contact from './components/Contact';
import Signup from './components/Signup';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { firebaseConfig } from './components/firebase'; // Import your Firebase configuration
import { initializeApp } from 'firebase/app';


const firebaseApp = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<App/>}></Route>
        <Route path='/login' element = {<Login/>}></Route>
        <Route path='/sell' element = {<Sell/>}></Route>
        <Route path='/buy' element = {<Buy/>}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
        <Route path='/signup' element = {<Signup/>}></Route>
        <Route path='/account' element = {<Account/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
);

reportWebVitals();

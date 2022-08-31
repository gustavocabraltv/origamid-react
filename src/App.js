import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login/Login'
import  './App.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginForm from './components/Login/LoginForm';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
         <Route path='/login/*' element={<Login/>}/> 

      </Routes>
     

      <Footer/>
    </Router>
    
  );
}

export default App;

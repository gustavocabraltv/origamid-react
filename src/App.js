import React from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login/Login'
import  './App.css'
import {UserStorage } from './UserContext'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
      <UserStorage> 
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
         <Route path='/login/*' element={<Login/>}/> 

      </Routes>
     

      <Footer/>
      </UserStorage>
    </Router>
    
  );
}

export default App;

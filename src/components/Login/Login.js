import React from 'react'
import {Routes, Route} from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'

const Login = () => {
    return(
    <div className='container'>
        <Routes>    
            <Route path='/' element={<LoginForm/>}/>
            <Route path='criar' element={<LoginCreate/>}/>
        </Routes>
        <p>LOGINS</p>
    </div>)
}

export default Login
import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import LoginCreate from './LoginCreate'
import LoginForm from './LoginForm'
import {UserContext} from '../../UserContext'
import styles from './Login.module.css'

const Login = () => {
    const {login} = React.useContext(UserContext)
    if(login === true) return <Navigate to='/conta'/>

    return(
    <div className={styles.login}>
     <aside><p>teste</p></aside>
      <div className={styles.forms}>
        <Routes>    
                <Route path='/' element={<LoginForm/>}/>
                <Route path='criar' element={<LoginCreate/>}/>
            </Routes>
      </div>

    </div>)
}

export default Login
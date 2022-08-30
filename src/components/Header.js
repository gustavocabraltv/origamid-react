import React from 'react'
import {Link} from 'react-router-dom' 
import styles from './Header.module.css'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'

const Header = () => {
    return(
    <div className={styles.header}>
        <nav className='container'>
        <Link className={styles.logo} to='/' arial-label='Dogs - Home'>
            <Dogs/>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>

        </nav>
    </div>)
}

export default Header
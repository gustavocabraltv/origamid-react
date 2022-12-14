import React from 'react'
import {Link} from 'react-router-dom' 
import styles from './Header.module.css'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'
import { UserContext } from '../UserContext'
//import Dogs from '../Assets/dogs.svg';

const Header = () => {
    const {data, userLogout} = React.useContext(UserContext)


    return(
    <div className={styles.header}>
        <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to='/' arial-label='Dogs - Home'>
            <Dogs/>
        </Link>
       {data 
       ? (<Link className={styles.login} to="/conta">{data.nome}<button onClick={userLogout}>Sair</button></Link>)
       : (<Link className={styles.login} to="/login">Login | Criar</Link>)
       }
       

        </nav>
    </div>)
}

export default Header
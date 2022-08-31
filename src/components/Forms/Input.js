import React from 'react'
import styles from './Input.module.css'

const Input = ({label, type, name, ...props}) => {
    return(
        <div className={styles.wrapper}>
             <label htmlFor='' className={styles.label}>{label}</label>
             <input id={name} name={name} type={type} className={styles.input} {...props}/>
             <p className={styles.error}>Error</p>
        </div>
    )
}

export default Input;
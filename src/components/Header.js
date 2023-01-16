import React from "react";
import styles from './Header.module.css';

const Header = () =>{
    return (
        <div className={styles.headerContainer}>
            <h1 className={ styles.Header }>Movies</h1>
        </div>
    )
} 

export default Header
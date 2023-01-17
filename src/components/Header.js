
import styles from './Header.module.css';

export default function Header() {
    return (
        <div className={styles.headerContainer}>
            <h1 className={ styles.Header }>Movies</h1>
        </div>
    )
}
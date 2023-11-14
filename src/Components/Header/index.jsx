import { Link } from "react-router-dom";
import styles from './styles.module.css'
import {ReactComponent as Dogs} from '../../assets/dogs.svg'

export function Header(){
    return(
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to="/" aria-label="Dogs - Home" className={styles.logo}> <Dogs /> </Link>
                <Link to="/login" className={styles.login}>Sign In / Sign Up</Link>
            </nav>
        </header>
    )
}
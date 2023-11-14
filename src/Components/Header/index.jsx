import { Link } from "react-router-dom";
import styles from './styles.modules.css'

export function Header(){
    return(
        <div>
            <nav className="container">
                <Link to="/">Home</Link>
                <Link to="/login">Sign In / Sign Up</Link>
            </nav>
        </div>
    )
}
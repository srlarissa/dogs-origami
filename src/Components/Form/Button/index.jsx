import styles from './style.module.css'
export function Button({children, ...props}){
    return <button {...props} className={styles.button}>{children}</button>
}
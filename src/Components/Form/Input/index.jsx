import styles from './style.module.css'

export function Input({label, name, type}){
    return(
        <div className={styles.wrapper}>
            <label htmlFor={name}>
                {label} 
                <input className={styles.input} type={type} name={name} /> 
                <p className={styles.error}>Erro</p>
            </label>
             
        </div>
    )
}
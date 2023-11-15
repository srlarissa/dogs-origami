import styles from './style.module.css'

export function Input({label, name, type, value, onChange}){
    return(
        <div className={styles.wrapper}>
            <label htmlFor={name}>
                {label} 
                <input className={styles.input} type={type} name={name} value={value} onChange={onChange} /> 
                <p className={styles.error}>Erro</p>
            </label>
             
        </div>
    )
}
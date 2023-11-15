import styles from './style.module.css'

export function Input({label, name, type, value, onChange, error, onBlur}){
    return(
        <div className={styles.wrapper}>
            <label htmlFor={name}>
                {label} 
                <input className={styles.input} type={type} name={name} value={value} onChange={onChange} onBlur={onBlur} /> 
                {error && <p className={styles.error}>{error}</p>}
            </label>   
        </div>
    )
}
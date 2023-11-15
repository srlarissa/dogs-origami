import styles from './style.module.css'

export function Input({label, name, type}){
    return(
        <div>
            <label htmlFor={name}>
                {label} 
                <input style={styles.input} type={type} name={name} /> 
            </label>
             
        </div>
    )
}
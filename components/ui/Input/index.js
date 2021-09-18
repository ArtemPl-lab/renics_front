import styles from './Input.module.css';

export const Input = props => {
    return <input {...props} className={`${styles.input} ${props.className}`}/>
}
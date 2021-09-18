import styles from './Textarea.module.css';
export const Textarea = props => <textarea {...props} className={`${styles.textarea} ${props.className}`} />
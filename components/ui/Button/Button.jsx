import styles from './Button.module.css'
import { useRouter } from 'next/router';

export const Button = (props) => {
    const router = useRouter();
    const sizeClass = ( props.size ? styles[props.size] : "sm" );
    const colorClass = styles[props.color] || styles.default;
    const handleClick = e => {
        e.preventDefault();
        if(props.href){
            router.push(props.href);
        }
        props.onClick && props.onClick();
    }
    return <a {...props} className={`${styles.button} ${sizeClass} ${colorClass} ${props.className} ${props.active ? styles.active : ''}`} onClick={handleClick}/>
}
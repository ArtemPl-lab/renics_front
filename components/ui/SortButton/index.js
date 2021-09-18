import styles from './SortButton.module.css';

export const SortButton = ({ title = '', value = '', onChange = ()=>{}, className = '' }) => {
    const handleChange = () => {
        switch(value){
            case 'ASC':
                onChange('DESC');
                break;
            case 'DESC':
                onChange(null);
                break;
            default:
                onChange('ASC');
                break;
        }
    }
    return(
        <div className={`${styles.wrapper} ${styles[value]} ${className}`} onClick={handleChange}>
            { title }
            <div className={styles.arrow}>↑</div>
        </div>
    );
}
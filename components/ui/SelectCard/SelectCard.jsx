import styles from './SelectCard.module.css'

export const SelectCard = ({name, title, subtitle, description, selected}) => {
    const id = Math.random();

    return (
        <div className={styles.card}>
            <input type="radio" id={id} className={styles.radio} name={name} defaultChecked={selected} />
            <label htmlFor={id} className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
                <div className={styles.description}>{description}</div>
            </label>
        </div>
    )
}
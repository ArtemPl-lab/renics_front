import styles from './NewsCard.module.css'
import Image from 'next/image'

export const NewsCard = (props) => {
    return (
        <div {...props} className={`${styles.card} ${props.className}`}/>
    )
}

export const NewsImage = ({src}) => {
    return (
        <Image src={src} width={380} height={260}/>
    )
}

export const NewsTitle = (props) => {
    return (
        <h3 {...props}/>
    )
}

export const NewsCategory = (props) => {
    return (
        <div {...props} className={`${styles.category} ${props.className}`} />
    )
}

export const NewsDate = ({ date }) => {
    return (
        <p className={styles.date}>{date}</p>
    )
}
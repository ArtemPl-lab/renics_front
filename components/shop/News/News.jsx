import styles from './News.module.css'
import Link from 'next/link'
import { NewsCard, NewsImage, NewsTitle, NewsCategory, NewsDate } from "./NewsCard/NewsCard"

export const News = ({ data }) => {
    return (
        <div className={styles.grid}>
            {data.map((news) => {
                return (
                    <Link href={`/blog/${news.url}`}>
                        <NewsCard>
                            <NewsImage src={`/images/${news.image}`}/>
                            <NewsCategory>{news.category}</NewsCategory>
                            <NewsTitle>{news.title}</NewsTitle>
                            <NewsDate date={news.date} />
                        </NewsCard>
                    </Link>
                )
            })}
        </div>
    )
}

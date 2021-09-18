import styles from './PopularArticles.module.css';

export const PopularArticles = ({items}) => {
  return(
    <div className={styles.wrapper}>
      <h3 className={styles.header}>Популярные статьи</h3>
      <ul className={styles.list}>
        {items.map(({name,comments,views})=>(
          <li className={styles.item} key={name}>
            <span className={styles.name}>{name}</span>
            <div className={styles.data}>
              <img className={styles.comments} src='/images/comments.svg'></img>
              <span className={styles.comments_count}>{comments}</span>
              <img className={styles.view} src='/images/view.svg'></img>
              <span className={styles.view_count}>{views}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ); 
}
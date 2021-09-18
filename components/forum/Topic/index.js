import styles from './Topic.module.css';
import { Tag } from '../';

export const Topic = ({name,description,tags,time,author,replies}) => {
  return(
    <li className={styles.card}>
      <h2 className={styles.header}>{name}</h2>
      <p className={styles.description}>{description}</p>
      <ul className={styles.tags}>
        {tags.map((item)=>(
          <Tag href="#" key={item}>
            {item}
          </Tag>
        ))}
      </ul>
      <ul className={styles.info}>
        <li>Задан {time} назад</li>
        <li>
          <label>Автор:</label>
          <a className={styles.link} href=''>{author}</a>
        </li>
        <li>
          <label>Ответов:</label>
          <a className={styles.link} href=''>{replies}</a>
        </li>
      </ul>
    </li>
  ); 
}
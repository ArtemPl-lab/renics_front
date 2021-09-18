import { Tag } from '../';
import styles from './PopularTags.module.css';

export const PopularTags = ({items}) => {
  return(
    <div className={styles.wrapper}>
      <h3 className={styles.header}>Популярные теги</h3>
      <ul className={styles.list}>
        {items.map(({name,amount})=>(
          <li className={styles.item}>
            <Tag href="">{name}</Tag>
            <span className={styles.amount}>x {amount}</span>
          </li>
        ))}
      </ul>
      <a className={styles.link} href=''>Все теги</a>
    </div>
  ); 
}
import styles from './Banner.module.css';
import { Button } from "../../ui";

export const Banner = () => {
  return(
    <div className={styles.banner}>
      <h2 className={styles.questions}>Хотите поделиться своими достижениями?</h2>
      <Button href="/blog/create">Написать статью</Button>
    </div>
  ); 
}
import styles from './Banner.module.css';
import { Button } from "../../ui";

export const Banner = () => {
  return(
    <div className={styles.banner}>
      <h2 className={styles.questions}>20 652 вопроса</h2>
      <Button>Задать вопрос</Button>
    </div>
  ); 
}
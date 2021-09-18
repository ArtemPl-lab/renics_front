import { useRouter } from 'next/router';
import styles from './ArticleCard.module.css';
import Image from 'next/image';
import { Button } from "../../ui/Button/Button";

export const ArticleCard = ({title,category,content,thumbnail,date,comments = 0,views}) => {
  const router = useRouter();
  date = new Date(date);
  const description = 
    content[router.locale] ?
    content[router.locale]
      .replace(/<pre.*?<\/pre>/gs, '') //remove code examples
      .replace(/&[\w.]+;/ig, '') //remove &nbsp; and more html chars
      .replace(/(<([^>]+)>)/ig, '[caps]') //replace tags(<h1> and others) to [caps]
      .split("[caps]") //split string from tags(output array)
      .filter(x => x != "") //remove empty tags
      .join('') :
    '';
  return(
    <li className={styles.card}>
      <h2 className={styles.header}>{title[router.locale]}</h2>
      <h3 className={styles.category}>Категория статьи</h3>
      <Image className={styles.picture} src={thumbnail} width={788} height={396}/>
      <p className={styles.description}>
        {description.slice(0, 300)}
        {
          description.length > 300 ? '...' : ''
        }
      </p>
      <Button 
        className={styles.button_1} 
        color="gray"
        href={`/blog/lol`}
      >
        Читать дальше
      </Button>
      <div className={styles.info}>
        <span className={styles.date}>
          {`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}
        </span>
        <div className={styles.data}>
          <img className={styles.comments} src='/images/comments.svg'></img>
          <span className={styles.comments_count}>{comments}</span>
          <img className={styles.view} src='/images/view.svg'></img>
          <span className={styles.view_count}>{views}</span>
        </div>
      </div>
    </li>
  ); 
}
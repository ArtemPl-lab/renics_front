import styles from './File.module.css';
import Link from 'next/link';
export const File = ({ url, name }) => {
  return(
    <Link href={url} passHref>
      <a className={styles.document}>
        <img src='/images/document.svg'></img>
        <span className={styles.text}>{name}</span>
      </a>
    </Link>
  ); 
}
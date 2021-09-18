import Link from 'next/link';
import styles from './Tag.module.css';

export const Tag = (props) => {
  return(
    <Link href={props.href} passHref>
      <a className={styles.tagItem}>
        {props.children}
      </a>
    </Link>
  ); 
}
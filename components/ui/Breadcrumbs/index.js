import styles from './Breadcrumbs.module.css';
import Link from 'next/link';
export const Breadcrumbs = ({ items = [] }) => {
    return(
        <div className={styles.wrapper}>
            {
                items.map((item, index) => {
                    if(index === items.length - 1){
                        return(
                            <div className={styles.current}>
                                {item.title}
                            </div>
                        );
                    }
                    return(
                        <>
                            <Link href={item.link} passHref>
                                <a className={styles.item}>
                                    {item.title}
                                </a>
                            </Link>
                            <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.delemeter}>
                                <path d="M0.999999 0.999999L5 5L0.999999 9" stroke="#E90B54" stroke-width="2"/>
                            </svg>
                        </>
                    );
                })
            }
        </div>
    );
}
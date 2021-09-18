import Link from 'next/link';
import { useTranslations } from 'next-intl';
import styles from './Menu.module.css';

const Menu = ({ items }) => {
    const t = useTranslations();
    return(
        <nav>
            {
                items.map((item, index) => {
                    return(
                        <Link href={item.link} passHref key={index}>
                            <a className={styles.link}>
                                {t(item.text)}
                            </a>
                        </Link>
                    )
                })
            }
        </nav>
    );
}

export default Menu;

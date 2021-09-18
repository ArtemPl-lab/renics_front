import Link from 'next/link';
import { Logo } from '../../ui';
import styles from './Footer.module.css';

const menuList = [
    {
        text: 'Доставка',
        link: '/delivery'
    },
    {
        text: 'Оплата',
        link: '/pay'
    },
    {
        text: 'Купоны и скидки',
        link: '/coupons'
    },
    {
        text: 'Избранное',
        link: '/love'
    },
    {
        text: 'Заказы',
        link: '/orders'
    },
    {
        text: 'Предзаказы',
        link: '/preorders'
    },
    {
        text: 'Возвраты',
        link: '/preorders'
    },
    {
        text: 'Каталог',
        link: '/catalog'
    }
]

export const Footer = () => {
    return(
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.nav_wrapper}>
                    <Logo />
                    <nav className={styles.nav}>
                        <ul className={styles.menu}>
                            {menuList.map(item => {
                                return(
                                    <li className={styles.menuItem}>
                                        <Link href={item.link} passHref>
                                            <a>
                                                {item.text}
                                            </a>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <div className={styles.copyright}>
                    © ООО “Реникс”, 2021
                </div>
                <Link href="/terms-of-use" passHref>
                    <a className={styles.terms}>
                        Пользовательское соглашение
                    </a>
                </Link>
            </div>
        </footer>
    );
}
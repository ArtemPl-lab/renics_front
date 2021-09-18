import Account from '../../Account/Account';
import Menu from '../../Menu/Menu';
import styles from './Blog.module.css';

const items = [
    {
        link: '/delivery',
        text: 'Лучшие авторы'
    },
    {
        link: '/pay',
        text: 'Новые статьи'
    },
    {
        link: '/coupons',
        text: 'Популярное'
    },
    {
        link: '/favourits',
        text: 'Все разделы'
    },
    {
        link: '/favourits',
        text: 'Об авторском праве'
    }
];

const BlogNavigation = props => {
    return(
        <div className={`${styles.wrapper} ${props.active ? styles.active : ''}`}>
            <div className="container">
                <div className={styles.content}>
                    <Menu items={items} />
                    <Account />
                </div>
            </div>
        </div>
    );
}

export default BlogNavigation;
import { useRouter } from 'next/router';
import Account from '../../Account/Account';
import Menu from '../../Menu/Menu';
import styles from './Forum.module.css';

const items = [
    {
        link: '/new',
        text: 'Новые'
    },
    {
        link: '/populars',
        text: 'Популярные'
    },
    {
        link: '/no-answer',
        text: 'Без ответа'
    },
    {
        link: '/tags',
        text: 'Список тегов'
    },
    {
        link: '/answers/self',
        text: 'Мои ответы'
    },
    {
        link: '/topics/self',
        text: 'Мои вопросы'
    }
];

const ForumNavigation = props => {
    const router = useRouter();
    const isActive = router.pathname.includes('/forum');
    return(
        <div className={`${styles.wrapper} ${isActive ? styles.active : ''}`}>
            <div className="container">
                <div className={styles.content}>
                    <Menu items={items} />
                    <div className={styles.userInfo}>
                        <Account />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForumNavigation;
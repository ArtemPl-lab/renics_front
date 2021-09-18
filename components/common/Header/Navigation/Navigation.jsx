import { useRouter } from 'next/router';
import ShopNavigation from "./navs/Shop/Shop";
import ForumNavigation from "./navs/Forum/Forum";
import BlogNavigation from './navs/Blog/Blog';
import styles from './Navigation.module.css';

const Navigation = props => {
    const router = useRouter();
    const navs = [
        {
            path: '/shop',
            component: ShopNavigation,
        },
        {
            path: '/forum',
            component: ForumNavigation,
        },
        {
            path: '/blog',
            component: BlogNavigation,
        }
    ];
    const isActive = path => router.pathname.includes(path);
    const hasActive = navs.some(item => isActive(item.path));
    if(!hasActive) return <></>
    return(
        <div className={styles.wrapper}>
            {navs.map((item, index) => <item.component active={isActive(item.path)} key={index}/>)}
        </div>
    );
}

export default Navigation;
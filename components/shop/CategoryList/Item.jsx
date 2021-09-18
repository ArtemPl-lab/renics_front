import styles from './CategoryList.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CategoryList } from '.';

const hasActiveChild = (items = [], current = '') => {
    return items.some(el => (el.slug === current || hasActiveChild(el.children, current)));
}

const CategoryItem = ({ slug = "", name = "", children = [], root}) => {
    const router = useRouter();
    const { slug: current_slug } = router.query;
    const active = root && (slug === current_slug || hasActiveChild(children, current_slug));
    return(
        <div className={styles.item_wrapper}>
            <Link href={`/shop/catalog/${slug}`} passHref scroll={false}>
                <a className={`
                               ${styles.item} 
                               ${root ? styles.root : ''} 
                               ${active ? styles.bold : ''}
                             `}
                >
                    {name}
                </a>
            </Link>
            <div className={`${styles.children} ${active || !root ? styles.active : ''}`}>
                <CategoryList items={children}/>
            </div>
        </div>
    );
}

export default CategoryItem;
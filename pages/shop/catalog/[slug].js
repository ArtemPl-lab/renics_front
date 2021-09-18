import { CategoryList } from '../../../components/shop';
import { useRouter } from 'next/router';
import styles from './Catalog.module.css';
import { Breadcrumbs, SortButton } from '../../../components/ui';
import { useState } from 'react';

const items = [
    {
        name: 'Все товары',
        slug: 'all-products',
        children: []
    },
    {
        name: 'Контроллеры',
        slug: 'controllers',
        children: [
            {
                name: 'ВПодкатегория11',
                slug: 'subcategory11',
                children: []
            },
            {
                name: 'ВПодкатегория12',
                slug: 'subcategory12',
                children: [
                    {
                        name: 'ВПодкатегория123',
                        slug: 'subcategory123',
                        children: []
                    }
                ]
            }
        ]
    },
    {
        name: 'Датчики / Сенсоры',
        slug: 'sensors',
        children: [
            {
                name: 'ВПодкатегория3',
                slug: 'subcategory13',
                children: []
            }
        ]
    },
];
const breadcrumbs = [
    {
        title: 'Магазин',
        link: '/shop'
    },
    {
        title: 'Каталог',
        link: '/shop/catalog'
    }
];
const sorts = [
    {
        title: 'Популярности',
        name: 'popular'
    },
    {
        title: 'Рейтингу',
        name: 'rating'
    },
    {
        title: 'Цене',
        name: 'price'
    },
    {
        title: 'Алфавиту',
        name: 'alphabet'
    }
];
const Catalog = props => {
    const router = useRouter();
    const { slug } = router.query;
    const [ filters, setFilters ] = useState({
        popular: 'ASC',
        rating: null,
        price: null,
        alphabet: null
    });
    const changeFilter = (name = '', value = '') => {
        setFilters(prev => ({
            ...Object.keys(prev).reduce((last, curr) => ({...last, curr: null}), {}),
            [name]: value
        }));
    }
    return(
        <div className={`container ${styles.wrapper}`}>
            <Breadcrumbs 
                items={[
                    ...breadcrumbs, 
                    ...restorePath(items, slug).map(el => ({
                        title: el.name,
                        link: `/shop/catalog/${el.slug}`
                    }))
                ]} 
            />
            <div className={styles.header}>
                <div className={styles.category_name}>
                    {
                        getCategoryName(items, slug) || 'Каталог'
                    }
                </div>
                <div className={styles.filters}>
                    <div className={styles.filters_title}>
                        Сортировать по:
                    </div>
                    {
                        sorts.map(s => <SortButton title={s.title} value={filters[s.name]} onChange={v => changeFilter(s.name, v)} className={styles.filter} />)
                    }
                </div>
            </div>
            <div className={styles.content_grid}>
                <CategoryList items={items} root />
            </div>
        </div>
    );
}

const getCategoryName = (...args) => {
    const category = searchBySlug(...args);
    return category ? category.name : null;
}
const searchBySlug = (...args) => {
    const path = restorePath(...args);
    return path.length ? path[path.length - 1] : null;
}
const restorePath = (items = [], slug = '') => {
    const item = items.find(el => el.slug === slug);
    if(item) return [ item ];
    for (let el of items) {
        const path = restorePath(el.children, slug);
        if(path.length) return [el, ...path];
    }
    return [];
}

export default Catalog;
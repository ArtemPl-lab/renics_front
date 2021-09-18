import Account from '../../Account/Account';
import CartTotal from '../../CartTotal';
import Menu from '../../Menu/Menu';
import styles from './Shop.module.css';

const items = [
    {
        link: '/shop/return',
        text: 'Вернуть товар'
    },
    {
        link: '/shop/delivery',
        text: 'Доставка'
    },
    {
        link: '/shop/pay',
        text: 'Оплата'
    },
    {
        link: '/shop/coupons',
        text: 'Купоны и скидки'
    },
    {
        link: '/shop/catalog',
        text: 'Каталог'
    },
    {
        link: '/shop/favorites',
        text: 'Избранное'
    },
    {
        link: '/shop/orders/self',
        text: 'Мои заказы'
    }
];

const ShopNavigation = props => {
    return(
        <div className={`${styles.wrapper} ${props.active ? styles.active : ''}`}>
            <div className="container">
                <div className={styles.content}>
                    <Menu items={items} />
                    <div className={styles.userInfo}>
                        <CartTotal />
                        <Account />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopNavigation;
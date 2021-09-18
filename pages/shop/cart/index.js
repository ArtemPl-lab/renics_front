import styles from './cart.module.css';
import { Product as ProductCard } from '../../../components/shop';
import { Button } from '../../../components/ui';
import { useEffect, useState } from 'react';
import { useStore } from '../../../stores';
import { observer } from 'mobx-react';

const Cart = () => {
    const { cart } = useStore();
    return(
        <section className={styles.wrapper}>
            <div className="container">
                <div className={styles.contentGrid}>
                    <div>
                        <h2>Заказ #123</h2>
                        <div className={styles.products}>
                            {cart.products.map(data => <ProductCard type="cart" {...data}/>)}
                        </div>
                    </div>
                    <div>
                        <div className={styles.orderBlock}>
                            <ul className={styles.orderList}>
                                <li className={styles.bold}>
                                    <span>Итого</span>
                                    <span>{cart.totalPrice} ₽</span>
                                </li>
                                <li>
                                    <span>Товары, {cart.productsCount} шт.</span>
                                    <span>{cart.defaultPrice} ₽</span>
                                </li>
                                <li>
                                    <span>Скидка</span>
                                    <span>− {cart.discount} ₽</span>
                                </li>
                                <li>
                                    <span>Скидка по купону</span>
                                    <span>− 500 ₽</span>
                                </li>
                                <li>
                                    <span>Доставка</span>
                                    <span>340 ₽</span>
                                </li>
                            </ul>
                            <Button>
                                Заказать
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default observer(Cart);
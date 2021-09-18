import styles from './ProductCard.module.css'
import Image from 'next/image'
import { Button, CartIcon, AddedCartIcon } from '../../ui';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStore } from '../../../stores';
import { observer } from 'mobx-react';

export const ProductCard = (props) => {
    return <div {...props} className={`${styles.card} ${props.className}`} />
}

export const ProductImage = props => {
    return <Image {...props} className={`${props.className}`} priority={true}/>
}

export const DiscountPercent = ({ defaultPrice, salePrice }) => {
    if(!salePrice) return <></>;
    const discountPercent = Math.trunc((1.00 - salePrice / defaultPrice) * 100);
    if(!discountPercent) return <></>;
    return (
        <div className={styles.discount}>
            -{discountPercent}%
        </div>
    );
}

export const ProductPrice = ({ defaultPrice, salePrice, style }) => {
    const router = useRouter();
    const current = (salePrice ? salePrice : defaultPrice);
    const last = (salePrice ? defaultPrice : salePrice);
    let priceStyle = styles.archivePrice;
    switch(style){
        case "cart":
            priceStyle = styles.cartPrice;
            break;

    }
    return (
        <div className={priceStyle}>
            <div className={styles.current}>{current} {router.locale === "ru" ? '₽' : "$"}</div>
            {last ?  <div className={styles.last}>{last} {router.locale === "ru" ? '₽' : "$"}</div> : ''}
        </div>
    )
}

export const ProductName = (props) => {
    return <div {...props} className={styles.prodname} />
}

export const ProductInStock = ({ inStock }) => {
    return <div className={styles.stock}>{inStock ? `В наличии` : 'Нет в наличии'}</div>
}

export const SaleBtn = observer(props => {
    const t = useTranslations();
    const { cart } = useStore();
    const inCart = cart.has(props.id);
    let color = "default";
    if(!props.inStock){
        color = "gray";
    } else if(inCart){
        color = "blue";
    }
    const addToCart = () => cart.addProduct(props.id);
    return (
        <Button 
            className={styles.sale_button}
            color={color}
            href={props.inStock ? 
                (
                    inCart ? 
                    "/shop/cart" : 
                    ''
                ) :
                `#preorder-${props.id}`
            }
            onClick={props.inStock && !inCart ? addToCart : () => {}}
        >
            {
                !props.inStock ?
                <>Предзаказ</> :
                (
                    inCart ? 
                    <>{t('К корзине')}<AddedCartIcon className={styles.added_icon}/></> :
                    <><CartIcon className={styles.sala_icon}/> {t('Купить')}</>
                )
            }
        </Button>
    );
});
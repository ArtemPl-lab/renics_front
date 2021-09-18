import Link from 'next/link';
import { ProductCard, ProductImage, ProductInStock, ProductName, ProductPrice, DiscountPercent, SaleBtn } from './ProductCard'
import { Button, InputNumber, CartIcon } from '../../ui';
import styles from './ProductCard.module.css';
import { useRouter } from 'next/router';
import { useStore } from '../../../stores';
import { observer } from 'mobx-react';

export const Product = observer(props => {
    const router = useRouter();
    const { cart } = useStore();
    switch(props.type){
        case "cart":
            const cartItem = cart.findItemByProductId(props.id) || {};
            return(
                <div className={styles.fullCard}>
                    <div className={styles.fullCardImg}>
                        <ProductImage 
                            src={props.thumbnail} 
                            width={175} 
                            height={175}
                            layout="fixed"
                        />
                    </div>
                    <div className={styles.fullCardContent}>
                        <div className={styles.fullCardRow}>
                            <h3 className={styles.fullCardName}>
                                {props.name[router.locale]}
                            </h3>
                            <ProductPrice 
                                defaultPrice={props.defaultPrice[router.locale]} 
                                salePrice={props.salePrice[router.locale]}
                                style="cart"
                            />
                        </div>
                        <div className={`${styles.fullCardRow} align-end`}>
                            <div>
                                <InputNumber 
                                    value={cartItem.count}
                                    max={props.inStock}
                                    onChange={(val)=>cart.updateQuantity(props.id, val)}
                                />
                                <div className="d-flex justify-content-between">
                                    <button className={`${styles.fullCardAction} text-left`}>Отложить</button>
                                    <button className={`${styles.fullCardAction} text-right`} onClick={()=>cart.deleteProduct(props.id)}>Удалить</button>
                                </div>
                            </div>
                            {/* <Button color="gray">
                                Купить в один клик
                            </Button> */}
                        </div>
                    </div>
                </div>
            );
        default:
            return(
                <ProductCard className={props.className}>
                    <DiscountPercent 
                        defaultPrice={props.defaultPrice[router.locale]} 
                        salePrice={props.salePrice[router.locale]}
                    />
                    <Link href={`/shop/${props.url}`} passHref>
                        <a>
                            <ProductImage 
                                src={props.thumbnail}
                                width={277} 
                                height={277}
                            />
                            <ProductPrice 
                                defaultPrice={props.defaultPrice[router.locale]} 
                                salePrice={props.salePrice[router.locale]}
                            />
                            <ProductName>{props.name[router.locale]}</ProductName>
                        </a>
                    </Link>
                    <SaleBtn {...props}/>
                    <ProductInStock inStock={props.inStock} />
                </ProductCard>
            );
    }
});
import { observer } from 'mobx-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useStore } from '../../../../../stores';
import styles from './CartTotal.module.css';

const CartTotal = props => {
    const { cart } = useStore();
    const router = useRouter();
    const t = useTranslations();
    return(
        <Link href="/shop/cart" passHref>
            <a className={styles.total}>
                {new Intl.NumberFormat(router.locale).format(cart.totalPrice)} {t('₽')}
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.1998 1.00017L1.7998 4.20017V15.4002C1.7998 15.8245 1.96838 16.2315 2.26843 16.5315C2.56849 16.8316 2.97546 17.0002 3.3998 17.0002H14.5998C15.0242 17.0002 15.4311 16.8316 15.7312 16.5315C16.0312 16.2315 16.1998 15.8245 16.1998 15.4002V4.20017L13.7998 1.00017H4.1998Z" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.7998 4.20015H16.1998" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M12.1998 7.40036C12.1998 8.24905 11.8627 9.06299 11.2625 9.6631C10.6624 10.2632 9.8485 10.6004 8.99981 10.6004C8.15111 10.6004 7.33718 10.2632 6.73706 9.6631C6.13695 9.06299 5.7998 8.24905 5.7998 7.40036" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </Link>
    );
}

export default observer(CartTotal);
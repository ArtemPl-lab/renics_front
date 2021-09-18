import Link from 'next/link';
import Image from 'next/image';
import styles from './Account.module.css';
import { useStore } from '../../../../../stores';
import { observer } from 'mobx-react';

const Account = observer(props => {
    const { account } = useStore();
    return(
        <div className={styles.wrapper}>
            <div className={styles.icon}>
                <Image src="/images/account-icon.png" width={28} height={28}/>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.8811 0.631088L5.00002 3.51275L2.11894 0.631088L0.881104 1.86892L5.00002 5.98725L9.11894 1.86892L7.8811 0.631088Z" fill="white"/>
                </svg>
            </div>
            <div className={styles.hidden}>
                {
                    account.current ? 
                    <>
                        <a onClick={account.logout}>Выйти</a>
                    </> : 
                    <>
                        <Link href="#login" passHref>
                            <a href="#login">Войти</a>
                        </Link>
                        <Link href="#register" passHref>
                            <a href="#register">Регистрация</a>
                        </Link>
                    </>
                }
            </div>
        </div>
    );
});

export default Account;
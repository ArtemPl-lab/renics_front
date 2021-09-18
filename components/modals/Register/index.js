import { useRouter } from 'next/router';
import Link from 'next/link';
import { Button, Input } from '../../ui';
import { Modal } from '../../ui/Modal';
import styles from './Register.module.css';

export const Register = () => {
    const router = useRouter();
    const hide = () => {
        router.replace(router.route)
    }
    return(
        <Modal width={438} height={500}>
            <div className={styles.header}>
                <div className={styles.title}>Регистрация</div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.close} onClick={hide}>
                    <path d="M18 6.5L6 18.5" stroke="#081744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6.5L18 18.5" stroke="#081744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <Input className={styles.input} placeholder="Придумайте имя пользователя" />
            <Input className={styles.input} placeholder="Ваш E-mail" />
            <Input className={styles.input} placeholder="Номер телефона" />
            <Input className={styles.input} placeholder="Придумайте пароль" />
            <Input className={styles.input} placeholder="Повторите пароль" />
            <Button className={styles.register}>
                Регистрация
            </Button>
            <Link href="#login" passHref shallow={true}>
                <a className={styles.have_account}>
                    Уже есть аккаунт?
                </a>
            </Link>
        </Modal>
    );
}
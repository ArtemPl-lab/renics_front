import { useRouter } from 'next/router';
import { Modal } from '../../ui/Modal';
import { Input, Button, Textarea } from '../../ui';
import styles from './ParthnersRequest.module.css';

export const ParthnersRequest = () => {
    const router = useRouter();
    const hide = () => {
        router.replace(router.route)
    }
    return(
        <Modal width={438} height={430}>
            <div className={styles.header}>
                <div className={styles.title}>Стать партнёром</div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.close} onClick={hide}>
                    <path d="M18 6.5L6 18.5" stroke="#081744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6.5L18 18.5" stroke="#081744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <Input placeholder="Контактые данные" className={styles.input}/>
            <Textarea 
                placeholder="Что вы хотите получить от соотрудничества? Опишите ваше предложение"
                className={styles.input}
                style={{
                    height: "200px",
                    maxHeight: "200px",
                    minHeight: "200px"
                }}
            />
            <Button className={styles.submit}>
                Отправить
            </Button>
        </Modal>
    );
}
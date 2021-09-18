import { useTranslations } from 'next-intl';
import { Button } from '../../ui';
import styles from './PartnersBanner.module.css';

export const PartnersBanner = props => {
    const t = useTranslations();
    return(
        <section className={styles.wrapper}>
            <div className="container">
                <h2 className={styles.title}>{t('Стать партнером')}</h2>
                <div className={styles.vr}></div>
                <p className={styles.desc}>
                    Приглашаем к сотрудничеству <br />
                    производителей и дистрибьюторов
                </p>
                <svg width="113" height="8" viewBox="0 0 113 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrow}>
                    <path d="M112.354 4.35355C112.549 4.15829 112.549 3.84171 112.354 3.64645L109.172 0.464466C108.976 0.269204 108.66 0.269204 108.464 0.464466C108.269 0.659728 108.269 0.976311 108.464 1.17157L111.293 4L108.464 6.82843C108.269 7.02369 108.269 7.34027 108.464 7.53553C108.66 7.7308 108.976 7.7308 109.172 7.53553L112.354 4.35355ZM0 4.5H112V3.5H0L0 4.5Z" fill="#E90B54"/>
                </svg>
                <Button className={styles.target} href="#parthners_request">
                    {t('Подать заявку')}
                </Button>
            </div>
        </section>
    );
}
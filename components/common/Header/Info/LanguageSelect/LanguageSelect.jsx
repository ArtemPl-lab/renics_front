import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import styles from './LanguageSelect.module.css';

const LanguageSelect = props => {
    const router = useRouter();
    const t = useTranslations();
    const languages = {
        'ru': `${t('Русский')} (RU)`,
        'en': `${t('Английский')} (EN)`
    }
    return(
        <div className={styles.locale} tabIndex="0">
            <span className={styles.current}>
                {router.locale}
            </span>
            <Image src={`/images/flags/${router.locale}.svg`} width={18} height={18}/>
            <div className={styles.popUp}>
                <div className={styles.wrapper}>
                    <div className={styles.title}>
                        {t('Выберите язык')}
                    </div>
                    {
                        router.locales.map((loc, key)=> {
                            return(
                                <Link href={router.pathname} locale={loc} passHref key={key}>                                                    
                                    <a className={styles.link}>
                                        <span>{languages[loc]}</span>
                                        <Image src={`/images/flags/${loc}.svg`} width={18} height={18}/>
                                    </a>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default LanguageSelect;
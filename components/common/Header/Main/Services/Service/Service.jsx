import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import styles from './Service.module.css';

const Service = ({ data }) => {
    const router = useRouter();
    const t = useTranslations();
    const isActive = router.pathname.includes(data.link);
    return(
        <Link href={data.link} passHref>
            <a className={`${styles.service} ${isActive ? styles.active : ''}`}>
                <Image src={data.icon} height={24} width={24} priority={true}/>
                <div className={styles.name}>{t(data.name)}</div>
            </a> 
        </Link>
    );
}

export default Service;
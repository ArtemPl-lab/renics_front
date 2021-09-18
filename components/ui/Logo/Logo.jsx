import Link from 'next/link';
import Image from 'next/image';
import styles from './Logo.module.css';

export const Logo = props => {
    return(
        <Link href="/shop" passHref>
            <a>
                <Image src="/images/logo.svg" height={60} width={240} priority={true}/>
            </a>
        </Link>
    );
}
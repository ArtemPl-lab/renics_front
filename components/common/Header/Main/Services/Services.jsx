
import Service from './Service/Service';
import styles from './Services.module.css';
const services = [
    {
        name: 'Магазин',
        icon: '/images/shop-icon.svg',
        link: '/shop'
    },
    {
        name: 'Форум',
        icon: '/images/forum-icon.svg',
        link: '/forum'
    },
    {
        name: 'Блог',
        icon: '/images/blog-icon.svg',
        link: '/blog'
    }
];
const Services = props => {
    return(
        <nav className={styles.services}>
            { services.map((service, key) => <Service data={service} key={key}/>) }
        </nav>
    );
}

export default Services;
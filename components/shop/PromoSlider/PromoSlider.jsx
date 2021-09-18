import Image from "next/image";
import Slider from "react-slick";
import { Button } from "../../ui";
import styles from './PromoSlider.module.css';

const PrevArrow = props => {
    return(
        <button {...props} className={`${styles.arrow} ${styles.prev} ${props.className}`}>
            <Image src="/images/arrow-prev.svg" height={50} width={50}/>
        </button>
    );
}
const NextArrow = props => {
    return(
        <button {...props} className={`${styles.arrow} ${styles.next} ${props.className}`}>
            <Image src="/images/arrow-next.svg" height={50} width={50}/>
        </button>
    );
}
export const PromoSlider = props => {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };
    return(
        <div className={styles.promo}>

            <Slider {...settings} className={styles.slider}>
                <div className={styles.slide}>
                    <Image src="/images/banner.png" alt="Баннер" className={styles.slideBg} priority={true} layout="fill" placeholder="blur"/>
                    <div className={styles.content}>
                        <div className={styles.promoText}>
                            <h2>Майские скидки до 50%</h2>
                            <p>Только с 1 по 30 мая успевайте приобрести товары со скидками</p>
                        </div>
                        <Button>
                            Подробнее
                        </Button>
                    </div>
                </div>
                <div className={styles.slide}>
                    <Image src="/images/banner.png" alt="Баннер" className={styles.slideBg} priority={true} layout="fill" placeholder="blur"/>
                    <div className={styles.content}>
                        <div className={styles.promoText}>
                            <h2>Майские скидки до 50%</h2>
                            <p>Только с 1 по 30 мая успевайте приобрести товары со скидками</p>
                        </div>
                        <Button>
                            Подробнее
                        </Button>
                    </div>
                </div>
                <div className={styles.slide}>
                    <Image src="/images/banner.png" alt="Баннер" className={styles.slideBg} priority={true} layout="fill" placeholder="blur"/>
                    <div className={styles.content}>
                        <div className={styles.promoText}>
                            <h2>Майские скидки до 50%</h2>
                            <p>Только с 1 по 30 мая успевайте приобрести товары со скидками</p>
                        </div>
                        <Button>
                            Подробнее
                        </Button>
                    </div>
                </div>
            </Slider>

        </div>
    );
}
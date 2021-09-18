import Image from 'next/image';
import { useRef } from 'react';
import Slider from 'react-slick';
import styles from './ProductGallery.module.css';


export const ProductGallery = ({ images }) => {
    const sliderForRef = useRef(null);
    const sliferNavRef = useRef(null);
    const sliderForOptions = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        // fade: true,
        asNavFor: sliferNavRef.current
    }
    const sliderNavOptions = {
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: sliderForRef.current,
        dots: false,
        // centerMode: true,
        focusOnSelect: true
    }
    return(
        <div className={styles.wrapper}>
            <Slider {...sliderForOptions} ref={sliderForRef} className={styles.for}>
                {
                    images.map(image => <Image src={image} width={380} height={380} objectFit="cover"/>)
                }
            </Slider>
            <Slider {...sliderNavOptions} ref={sliferNavRef}>
                {
                    images.map(image => <div className={styles.nav_image}><Image src={image} width={73} height={73} objectFit="cover" /></div>)
                }
            </Slider>
        </div>
    );
}
import React from "react";
import Slider from "react-slick";
import styles from './ProductsSlider.module.css';

export class ProductsSlider extends React.Component{
    constructor(props){
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    next(){
        this.slider.slickNext();
    }
    prev(){
        this.slider.slickPrev();
    }
    render(){
        const settings = {
            arrows: false,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return(
            <Slider ref={c => (this.slider = c)} {...settings} className={styles.slider}>
                {this.props.children}
            </Slider>
        );
    }
}
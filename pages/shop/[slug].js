import styles from './product.module.css';
import { ProductGallery, Reviews } from '../../components/shop';
import { Product } from "../../api/models";
import { useRouter } from 'next/router';
import { InputNumber } from '../../components/ui';
import { SaleBtn } from '../../components/shop/Product/ProductCard';
import { useEffect, useState } from 'react';
import Collection from '../../api/models/includes/Collection';

const ProductPage = ({ product }) => {
    product = new Collection(Product, {...product}).first;
    const [reviews, setReviews] = useState([]);
    const { locale } = useRouter();
    useEffect(async ()=>{
        const rws = await product.reviews.find();
        setReviews(rws);
    }, []);
    return(
        <article className={styles.wrapper}>
            <div className="container">
                <section className={styles.card}>
                    <ProductGallery images={product.gallery}/>
                    <div className={styles.info}>
                        <div className={styles.title}>
                            {product.name[locale]}
                        </div>
                        <div className={styles.articul}>
                            Артикул {product.articul}
                        </div>
                        <div className={styles.price}>
                            <span className={styles.default}>
                                {product.defaultPrice[locale]} ₽
                            </span>
                            {
                                product.salePrice[locale] ? 
                                <span className={styles.sale}>
                                    {product.salePrice[locale]} ₽
                                </span> :
                                ''
                            }
                        </div>
                        <div className={styles.inStock}>
                            {
                              product.inStock ?
                              'В наличии': 'Нет в наличии'  
                            }
                        </div>
                        <InputNumber />
                        <SaleBtn {...product}/>
                    </div>
                </section>
                <Reviews data={reviews}/>
            </div>
        </article>
    );
}
ProductPage.getInitialProps = async (ctx) => {
    const { slug } = ctx.query;
    const product = await Product.findOne({
        where: {
            url: slug
        }
    });
    return { product }
}
export default ProductPage;
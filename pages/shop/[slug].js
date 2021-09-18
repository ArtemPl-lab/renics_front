import styles from './product.module.css';
import { ProductGallery, Reviews, Product as ProductCard} from '../../components/shop';
import { Product } from "../../api/models";
import { useRouter } from 'next/router';
import { InputNumber } from '../../components/ui';
import { SaleBtn } from '../../components/shop/Product/ProductCard';
import { useEffect, useState } from 'react';
import Collection from '../../api/models/includes/Collection';

const ProductPage = ({ product, products }) => {
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
                        <InputNumber max={product.inStock}/>
                        <SaleBtn {...product}/>
                    </div>
                </section>
            </div>
            <section>
                <div className="container">
                    <h2>
                        Отзывы
                    </h2>
                    <Reviews data={reviews}/>
                </div>
            </section>
            <section className={styles.similar}>
                <div className="container">
                    <h2>
                        Вместе с этим покупают
                    </h2>
                    <div className={styles.products}>
                        {products.map((data, key) => <ProductCard {...data} className={styles.product} key={key}/>)}
                    </div>
                </div>
            </section>
            <section className={styles.together}>
                <div className="container">
                    <h2>
                        Товары из этой категории
                    </h2>
                    <div className={styles.products}>
                        {products.map((data, key) => <ProductCard {...data} className={styles.product} key={key}/>)}
                    </div>
                </div>
            </section>
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
    const products = await Product.find();
    return { product, products }
}
export default ProductPage;
import { useRouter } from 'next/router';
import { Modal } from '../../ui/Modal';
import { Input, Button, Textarea, InputNumber } from '../../ui';
import styles from './Preorder.module.css';
import { useEffect, useState } from 'react';
import { Product } from '../../../api/models';
import ReCAPTCHA from "react-google-recaptcha";

export const Preorder = () => {
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const [formData, setFormData] = useState({
        count: 1,
        phone: null
    });
    const hide = () => {
        router.replace(router.route)
    }
    const loadProduct = async () => {
        const productId = router.asPath.replace(`${router.pathname}#preorder-`, '');
        const prod = await Product.findById(productId);
        if(prod) setProduct(prod);
        console.log(prod);
    }
    const handleChange = e => {
        console.log(e.target.value);
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    }
    useEffect(loadProduct, []);
    if(!product) return <></>;
    return(
        <Modal width={438} height={460}>
            <div className={styles.header}>
                <div className={styles.title}>Предзаказ</div>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.close} onClick={hide}>
                    <path d="M18 6.5L6 18.5" stroke="#081744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6 6.5L18 18.5" stroke="#081744" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className={styles.wrapper}>
                <p className={styles.row}>
                    Продукт <b>{product.name[router.locale]}</b> будет доставлен на склад в течение 2-х недель в количестве <Input defaultValue={formData.count} name="count" onChange={handleChange}/> шт. 
                    После поступления на склад с вами свяжется наш менеджер по указанному номеру: &nbsp;
                    <Input 
                        name="phone" 
                        onChange={handleChange} 
                        style={{
                            width: "170px",
                            textAlign: "left"
                        }}
                        placeholder="+7 (___) ___-__-__"
                    />
                </p>
                
            </div>
            <ReCAPTCHA sitekey="6LcbPHccAAAAAFTjphK2gA67qru4xWXFuXrpRLls" />
            <Button className={styles.submit}>
                Оформить
            </Button>
        </Modal>
    );
}
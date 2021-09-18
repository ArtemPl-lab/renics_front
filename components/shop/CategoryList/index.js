import styles from './CategoryList.module.css';
import CategoryItem from './Item';

export const CategoryList = ({ items = [], root }) => {
    return(
        <div className={`${styles.wrapper}`}>
            {
                items.map(item => <CategoryItem {...item} root={root}/>)
            }
        </div>
    );
}
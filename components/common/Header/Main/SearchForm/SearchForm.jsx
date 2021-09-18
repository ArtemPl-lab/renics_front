import Image from 'next/image';
import styles from './SearchForm.module.css';

const SearchForm = props => {
    const onSubmit = (e) => {
        console.log(e);
        e.preventDefault();
    }
    return(
        <form className={styles.search} onSubmit={onSubmit}>
            <input type="text" className={styles.input}/>
            <button type="submit" className={styles.submit}>
                <Image src="/images/search.svg" width={18} height={18} />
            </button>
        </form>
    );
}

export default SearchForm;
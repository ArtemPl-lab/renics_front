import { Logo } from '../../../ui';
import Services from './Services/Services';
import SearchForm from './SearchForm/SearchForm';
import styles from './Main.module.css';
const Main = props => {
    return(
        <div className={styles.main}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Logo />
                    <Services /> 
                    <SearchForm />
                </div>
            </div>
        </div>
    );
}

export default Main;
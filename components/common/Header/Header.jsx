import Info from './Info/Info';
import Main from './Main/Main';
import Navigation from './Navigation/Navigation';
import styles from './Header.module.css';

export const Header = props => {

    return(
        <header className={styles.header}>
            <Info />
            <Main />
            <Navigation />
        </header>
    ); 
}
import Contacts from './Contacts/Contacts';
import LanguageSelect from './LanguageSelect/LanguageSelect';
import styles from './Info.module.css';
const Info = props => {
    return(
        <div className={styles.info}>
            <div className="container">
                <div className={styles.wrapper}>
                    <Contacts />
                    <LanguageSelect />
                </div>
            </div> 
        </div>
    );
}

export default Info;
import styles from './Contacts.module.css';

const Contacts = props => {
    return(
        <div className={styles.contacts}>
            <a href="tel:+79055675532">
                +7 (905) 567-55-32
            </a>
            &nbsp;|&nbsp;
            <a href="mailto:support@renics.org">
                support@renics.org
            </a>
        </div>
    );
}

export default Contacts;
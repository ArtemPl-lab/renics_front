import { Stars } from '../../common';
import { Avatar } from '../../common/Avatar';
import styles from './Review.module.css';
import { dateFormat } from '../../../helpers/dateFormatter';
import { useRouter } from 'next/router';
export const Review = props => {
    const { locale } = useRouter();
    const dateOptions = [{day: '2-digit'}, {month: '2-digit'}, {year: '2-digit'}];
    const timeOptions = [{ hour: '2-digit'}, { minute: '2-digit'}];
    return(
        <div className={styles.wrapper}>
            <Avatar className={styles.avatar}/>
            <div className={styles.content}>
                <div className={styles.header}>
                    <span className={styles.username}>
                        Петров Василий
                    </span>
                    <span className={styles.date}>
                        {dateFormat(props.date, dateOptions, ".", locale)}, {dateFormat(props.date, timeOptions, ":", locale)}
                    </span>
                </div>
                <Stars active={props.evaluation} className={styles.stars}/>
                <p className={styles.review}>
                    {props.content}
                </p>
                <div className={styles.validate}>
                    Проверенный отзыв
                </div>
            </div>
        </div>
    );
}
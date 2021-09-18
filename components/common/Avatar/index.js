import Image from "next/image";
import styles from './Avatar.module.css';

export const Avatar = ({ image, className }) => {
    const img = image || '/images/ava.png';
    return(
        <div className={className}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50" height="50">
                    <circle cx="25" cy="25" r="25" fill="#E8E8E8"/>
                </mask>
                <g mask="url(#mask0)">
                    <circle cx="25" cy="25" r="25" fill="#F8F8F8"/>
                    <circle cx="25" cy="22" r="10" fill="#E8E8E8"/>
                    <circle cx="25" cy="56" r="20" fill="#E8E8E8"/>
                </g>
            </svg>
        </div>
    );
}
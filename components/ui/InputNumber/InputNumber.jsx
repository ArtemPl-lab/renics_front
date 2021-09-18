import { useEffect, useState } from 'react'
import styles from './InputNumber.module.css'

export const InputNumber = (props) => {
    const { min = 1, max = Infinity, value } = props;
    const [amount, setAmount] = useState(value || min)

    function DecrementAmount() {
        if (amount > 1) { setAmount(prevAmount => prevAmount - 1) }

    }
    function IncrementAmount() {
        setAmount(prevAmount => prevAmount + 1)
    }
    function handler(e) {
        if (!e.target.value) {
            setAmount(e.target.value)
            return;
        }
        const newAmount = parseInt(e.target.value) || min;
        props.onChange && props.onChange(newAmount);
        setAmount(newAmount)
    }
    function validate() {
        if (amount < min) {
            setAmount(min)
        } else if (amount > max) {
            setAmount(max)
        }
    }
    useEffect(() => {
        if(amount !== value || amount !== min) props.onChange && props.onChange(amount);
    }, [amount]);
    return (
        <div className={styles.count}>
            <button type="button" disabled={amount===min} onClick={DecrementAmount}>
                <svg width="16" height="2" viewBox="0 0 16 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1H15" stroke="#8B8E96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <input className={styles.num} value={amount} onChange={handler} onBlur={validate} />
            <button type="button" disabled={amount===max} onClick={IncrementAmount}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 1V15" stroke="#8B8E96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1 8H15" stroke="#8B8E96" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
        </div>
    )
}
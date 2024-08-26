import { FC, InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    name?: string;
    label?: string;
}


export const Switch: FC<IProps> = ({ name, checked = false, label = null, onChange }) => {
    return <div className={styles.switch}>
        <label>
            <input name={name} type="checkbox" checked={checked} className={styles.switchInput} onChange={onChange} />
            <div className={styles.switchControl}>
                {<div className={styles.switchIcon} />}
            </div>
        </label>
        {
            label && <span className={styles.switchText}>{label}</span>
        }
    </div>
}
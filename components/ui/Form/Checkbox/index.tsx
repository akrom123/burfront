import { FC, InputHTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    checked?: boolean;
    name?: string;
    label?: string;
}


export const Checkbox: FC<IProps> = ({ name, checked = false, label = null, onChange }) => {
    return <div className={styles.checkbox}>
        <label className={styles.checkboxLabel}>
            <div className={styles.checkboxControl}>
                <input name={name} type="checkbox" checked={checked} className={styles.checkboxInput} onChange={onChange}/>
                {<div className={styles.checkboxIcon}/>}
            </div>
            {
                label && <span className={styles.checkboxLabelText}>{label}</span>
            }
        </label>
    </div>  
}
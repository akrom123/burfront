'use client'

import { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    name?: string;
    action?: React.ReactNode;
}

export const Input: FC<IProps> = ({ label, name, ...props }) => {
    return <div className={styles.wrapper}>
        <label className={styles.label}>
            {label}
        </label>
        <div className={clsx(styles.inputWrapper, props.disabled && styles.inputWrapperDisabled)}>
            <input type="text" className={styles.input} name={name} {...props} placeholder='' />
            {props.action && <div className={styles.action}>{props.action}</div>}
        </div>
    </div>
}
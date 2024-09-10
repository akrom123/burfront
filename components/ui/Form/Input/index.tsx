'use client'

import { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx';


const actionStyles = {
    button: styles.actionButton,
    plain: styles.actionPlain,
    icon: styles.actionIcon,
    copy: styles.actionCopy,
    text: styles.actionText,
    placeholder: styles.actionPlaceholder,
}


interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    action?: React.ReactNode;
    actionType?: keyof typeof actionStyles
}

export const Input: FC<IProps> = ({ label, name, action, actionType = 'button', className, ...props }) => {
    return <div className={clsx(styles.wrapper, className)}>
        {
            label && <label className={styles.label}>
                {label}
            </label>
        }
        <div className={clsx(styles.inputWrapper, props.disabled && styles.inputWrapperDisabled)}>
            <input type="text" className={styles.input} name={name} {...props} />
            {action && <div className={clsx(styles.action, actionStyles[actionType])}>
                {action}
            </div>}
        </div>
    </div>
}
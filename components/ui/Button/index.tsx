import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.scss'
import clsx from 'clsx';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof variants;
    children?: React.ReactNode;
    icon?: React.ReactNode
}

const variants = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    tertiary: styles.buttonTertiary,
    transparent: styles.buttonTransparent,
    outline: styles.buttonOutline,
    gold: styles.buttonGold,
}


export const Button: FC<IProps> = ({ variant = 'primary', icon, children, className = '', ...props }) => {
    return (
        <button className={clsx(styles.button, variants[variant], icon && !children && styles.buttonSquare, className)} {...props}>
            {children}
            {icon}
        </button>
    )
}
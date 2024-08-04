import { ButtonHTMLAttributes, FC } from 'react';
import styles from './styles.module.scss'
import { Icon } from '../Icon';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof variants;
    children?: React.ReactNode;
    icon?: React.ReactNode
}

const variants = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    tertiary: styles.buttonTertiary,
    transparent: styles.buttonTransparent
}


export const Button: FC<IProps> = ({ variant = 'primary', icon, children, ...props }) => {
    return (
        <button className={`${styles.button} ${variants[variant]} ${icon && !children ? styles.buttonSquare : ''}`} {...props}>
            {children}
            {icon}
        </button>
    )
}
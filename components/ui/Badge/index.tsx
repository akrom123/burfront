import { FC, HTMLAttributes } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx';

interface IProps extends HTMLAttributes<HTMLDivElement> {
    variant?: keyof typeof variants;
    children?: React.ReactNode;
}

const variants = {
    primary: styles.badgePrimary,
    secondary: styles.badgeSecondary,
}

export const Badge: FC<IProps> = ({ children, variant = 'primary' }) => {
    return <div className={clsx(styles.badge, variants[variant])}>{children}</div>
}
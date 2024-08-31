import { FC } from "react";
import styles from './styles.module.scss';
import clsx from "clsx";

const variants = {
    success: styles.cardSuccess,
    default: styles.cardDefault,
}

interface IProps {
    title?: React.ReactNode;
    variant?: keyof typeof variants;
    children?: React.ReactNode;
    action?: React.ReactNode;
    handleAction?: () => void;
}

export const Card: FC<IProps> = ({ title, variant = 'default', action, handleAction, children }) => {
    return <div
        className={clsx(
            styles.card,
            variants[variant],
        )}
    >
        <div className={styles.cardHeading}>
            {title}
        </div>
        <div className={styles.cardContent}>
            {children}
        </div>
        {
            action && <div className={styles.cardAction} onClick={handleAction}>
                {action}
            </div>
        }
    </div>
}
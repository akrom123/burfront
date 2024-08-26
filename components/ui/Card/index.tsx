import { FC } from "react";
import styles from './styles.module.scss';
import clsx from "clsx";

interface IProps {
    title?: React.ReactNode;
    actions?: React.ReactNode;
    children?: React.ReactNode;
    compact?: boolean;
}

export const Card: FC<IProps> = ({ title, actions, children, compact = false }) => {
    return <div
        className={clsx(
            styles.card,
            !title && styles.cardWithoutHeading,
            !children && styles.cardWithoutContent,
            compact && styles.cardCompact,
        )}
    >
        {
            (title || actions) && <div className={styles.cardHeading}>
                {title && <div className={styles.cardHeadingText}>{title}</div>}
                {actions && <div className={styles.cardHeadingActions}>{actions}</div>}

            </div>
        }
        {
            children && <div className={`${styles.cardContent}`}>
                {children}
            </div>
        }
    </div>
}
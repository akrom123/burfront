import { FC } from "react";
import styles from './styles.module.scss';

interface IProps {
    title?: React.ReactNode;
    actions?: React.ReactNode;
    children?: React.ReactNode;
}

export const Card: FC<IProps> = ({ title, actions, children }) => {
    return <div
     className={`${styles.card} ${!title ? styles.cardWithoutHeading : ''} ${!children ? styles.cardWithoutContent : ''}`}
     >
        {
            title && <div className={styles.cardHeading}>
                <div className={styles.cardHeadingText}>{title}</div>
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
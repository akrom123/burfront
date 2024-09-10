import { FC } from 'react';
import { Diamond } from '../Diamond';
import styles from './styles.module.scss';

interface IProps {
    title?: React.ReactNode;
    description?: React.ReactNode
}


export const FeatureCard: FC<IProps> = ({ title, description }) => {
    return <div className={styles.featureCard}>
        <Diamond size={55} variant='gold' />
        <div className={styles.featureCardContent}>
            <div className={styles.featureCardTitle}>{title}</div>
            <div className={styles.featureCardDescription}>{description}</div>
        </div>
    </div>
}
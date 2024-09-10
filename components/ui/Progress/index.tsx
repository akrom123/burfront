import { FC } from 'react';
import styles from './styles.module.scss';
import { Diamond } from '@/components/vip/Diamond';
import { IProps as IDiamondProps } from '../../vip/Diamond';

interface IProps {
    value: number
    start: {
        variant: IDiamondProps['variant'],
        label: string
    }
    end: {
        variant: IDiamondProps['variant'],
        label: string
    }
}

export const Progress: FC<IProps> = ({ value, start, end }) => {
    return <div className={styles.progress}>
        <div className={styles.progressHeader}>
            <div className={styles.progressTitle}>Текущий прогресс</div>
            <div className={styles.progressValue}>82%</div>
        </div>
        <div className={styles.progressBar}>
            <div className={styles.progressBarValue} style={{ width: `${value}%` }} />
        </div>
        <div className={styles.progressBadges}>
            <div className={styles.progressBadge}>
                <Diamond variant={start.variant} />
                <span>{start.label}</span>
            </div>
            <div className={styles.progressBadge}>
                <Diamond variant={end.variant} />
                <span>{end.label}</span>
            </div>
        </div>
    </div>
}
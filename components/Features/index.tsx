'use client'

import clsx from 'clsx';
import { Icon } from '../ui/Icon';
import styles from './styles.module.scss';
import { FC } from 'react';
import { useRouter } from 'next/navigation';


export const Features: FC = () => {
    const router = useRouter()

    return <div className={styles.features}>
        <div className={clsx(styles.feature, styles.featureLive)}>
            <div className={styles.featureContent}>
                <div className={styles.featureTitle}>Live</div>
                <div className={styles.featureDescription}>Игры в режиме live</div>
            </div>
        </div>
        {/* <div className={`${styles.feature} ${styles.featureSport}`}>
            <Icon name={'football'} size={46} />
            <div className={styles.featureContent}>
                <div className={styles.featureTitle}>Sport</div>
                <div className={styles.featureDescription}>Ставки на различные виды спорта</div>
            </div>
        </div> */}
        <div className={clsx(styles.feature, styles.featureDice)}>
            <Icon name={'dice'} size={46} />
            <div className={styles.featureContent}>
                <div className={styles.featureTitle}>Dice</div>
                <div className={styles.featureDescription}>Ставки на различные виды спорта</div>
            </div>
        </div>
        <div className={clsx(styles.feature, styles.featureCrash)}>
            <Icon name={'crash'} size={46} />
            <div className={styles.featureContent}>
                <div className={styles.featureTitle}>Crash</div>
                <div className={styles.featureDescription}>Ставки на различные виды спорта</div>
            </div>
            <div className={styles.featurePlay}><Icon name="play" size={27} /></div>
        </div>
        <div className={clsx(styles.feature, styles.featureMore)}>
            <div className={styles.featureContent}>
                <div className={styles.featureTitle}>Больше игр</div>
                <div className={styles.featureDescription}>Ставки на различные виды спорта</div>
            </div>
            <div className={styles.featureButton} onClick={() => router.push('/promo')}>Подробнее</div>
        </div>
    </div>
}
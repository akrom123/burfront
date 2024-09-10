import { FC } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { Icon } from '@/components/ui/Icon';

interface IProps {
    badge: React.ReactNode;
    amount: React.ReactNode;
    features: string[];
    image: string;

}

export const LevelCard: FC<IProps> = ({ image, badge, amount, features }) => {
    return <div className={styles.levelCardContainer}>
        <Image
            src={`/images/vip-features/${image}`}
            width={120}
            height={132}
            alt=""
            className={styles.levelCardImage}
        />
        <div className={styles.levelCardWrapper}>
            <div className={styles.levelCard}>
                <div className={styles.levelCardBadge}>{badge}</div>
                <div className={styles.levelCardAmount}>
                    <div className={styles.levelCardAmountValue}>
                        {amount}
                    </div>
                    <div className={styles.levelCardAmountLabel}>
                        Сумма оборота
                    </div>
                </div>
                <div className={styles.levelCardFeatures}>
                    {
                        features.map((feature, index) =>
                            <div key={index} className={styles.levelCardFeature}>
                                <Icon name={'checkbox'} className={styles.levelCardFeatureIcon} />
                                <span className={styles.levelCardFeatureLabel}>
                                    {feature}
                                </span>
                            </div>)
                    }
                </div>
            </div>
        </div>
    </div>
}
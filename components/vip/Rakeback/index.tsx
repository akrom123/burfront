import { Icon } from '@/components/ui/Icon'
import styles from './styles.module.scss'
import { useState } from 'react'
import clsx from 'clsx'

export const Rakeback = () => {
    const [activeIdx, setActiveIdx] = useState<number | null>(null)
    return <div className={styles.rakeback}>
        <div className={styles.rakebackTitle}>Доступный рейкбек</div>
        <div className={styles.rakebackItems}>
            {
                Array(8).fill(null).map((_, i) => (
                    <div
                        className={clsx(styles.rakebackItem, activeIdx === i && styles.rakebackItemActive)}
                        key={i}
                        onClick={() => setActiveIdx(i)}
                    >
                        <Icon name="tether" size={24} />
                        <span>$ 167.57</span>
                    </div>))
            }
        </div>
        <div className={styles.rakebackButton}>Получить рейкбек</div>
        <div className={styles.rakebackNote}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, repudiandae.
        </div>
    </div>
}
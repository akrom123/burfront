import { FC } from "react";
import styles from './styles.module.scss';
import { useCountDown } from "@/hooks/useCountdown";

export const Countdown: FC<{ value: number; onFinish?: () => void }> = ({ value, onFinish }) => {
    const [day, hour, minute, second] = useCountDown(value, onFinish);
    return <div className={styles.countdown}>
        <div className={styles.countdownItem}>
            <div className={styles.countdownItemNumber}>{day}</div>
            <div className={styles.countdownItemDescription}>Дней</div>
        </div>
        <div className={styles.countdownItem}>
            <div className={styles.countdownItemNumber}>{hour}</div>
            <div className={styles.countdownItemDescription}>Часов</div>
        </div>
        <div className={styles.countdownItem}>
            <div className={styles.countdownItemNumber}>{minute}</div>
            <div className={styles.countdownItemDescription}>Минут</div>
        </div>
        <div className={styles.countdownItem}>
            <div className={styles.countdownItemNumber}>{second}</div>
            <div className={styles.countdownItemDescription}>Секунд</div>
        </div>
    </div>
}
import { FC } from "react";
import styles from './styles.module.scss';
import { Countdown } from "@/components/ui/Countdown";

interface IProps {

}

export const Boost: FC<IProps> = () => {
    return <div className={styles.boost}>
        <div className={styles.boostTop}>
            <div className={styles.boostTitle}>
                Обратный отсчет до следущего
                еженедельного буста
            </div>
            <Countdown value={90000} />
        </div>
        <div className={styles.boostNote}>
            {"If you're just starting to place bets or use the site, then initial verification status will be enough. Initial status has lower limits than full status accounts"}
        </div>
    </div>
}
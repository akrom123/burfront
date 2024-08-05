import { FC } from "react";
import styles from './styles.module.scss'
import { Button } from "../ui/Button";

interface IPromoCardProps {
    title: string;
    description: string;
    background?: string;
}

export const PromoCard: FC<IPromoCardProps> = ({ title, description, background = '#FBC04E00' }) => {
    return <div className={styles.promoCard} style={{ background }}>
        <div className={styles.promoCardContent}>
            <div className={styles.promoCardTitle}>{title}</div>
            <div className={styles.promoCardDescription}>{description}</div>
        </div>
        <Button variant={'transparent'}>Подробнее</Button>
    </div>
}
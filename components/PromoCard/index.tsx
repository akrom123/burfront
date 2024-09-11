'use client'

import { FC } from "react";
import styles from './styles.module.scss'
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation";

interface IPromoCardProps {
    title: string;
    description: string;
    background?: string;
}

export const PromoCard: FC<IPromoCardProps> = ({ title, description, background = '#FBC04E00' }) => {
    const router = useRouter()

    return <div className={styles.promoCard} style={{ background }}>
        <div className={styles.promoCardContent}>
            <div className={styles.promoCardTitle}>{title}</div>
            <div className={styles.promoCardDescription}>{description}</div>
        </div>
        <Button variant={'transparent'} onClick={() => router.push('/promo')}>Подробнее</Button>
    </div>
}
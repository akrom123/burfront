import { FC } from "react";
import { Card } from "../Card"
import styles from './styles.module.scss'
import { Button } from "../Button";
import { MoreBtn } from "../MoreBtn";

export const Promotions = () => {
    return <Card title="Promotions" actions={<MoreBtn>See all</MoreBtn>}>
        <div className={styles.promotions}>
            <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#74633B'} />
            <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#59724A'} />
            <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#761516'} />
        </div>
    </Card>
}

interface IPromoCardProps {
    title: string;
    description: string;
    background?: string;
}

const PromoCard: FC<IPromoCardProps> = ({ title, description, background = '#FBC04E00' }) => {
    return <div className={styles.promoCard} style={{ background }}>
        <div className={styles.promoCardContent}>
            <div className={styles.promoCardTitle}>{title}</div>
            <div className={styles.promoCardDescription}>{description}</div>
        </div>
        <Button variant={'transparent'}>Подробнее</Button>
    </div>
}
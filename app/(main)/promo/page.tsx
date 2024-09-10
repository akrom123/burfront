import { Heading } from "@/components/Heading";
import { PromoCard } from "@/components/PromoCard";
import styles from './styles.module.scss';

export default function Page() {
  return (
    <div className="container">
      <Heading level={1}>Акции</Heading>
      <div className={styles.promotions}>
        <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#74633B'} />
        <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#59724A'} />
        <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#761516'} />
        <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#74633B'} />
        <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#59724A'} />
        <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#761516'} />
      </div>
    </div>
  );
}

import { Banner } from "@/components/Banner";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { PromoCard } from "@/components/PromoCard";
import { Card } from "@/components/ui/Card";
import { MoreBtn } from "@/components/ui/MoreBtn";
import styles from './styles.module.scss'
import Link from "next/link";

export default function Page() {
  return (
    <>
      <Link href="/auth"><div style={{ width: 100, height: 100, background: 'red' }}></div></Link>
      <Banner />
      <div className="container container-main">
        <Features />
        <Card title="Promotions" actions={<MoreBtn>See all</MoreBtn>}>
          <div className={styles.promotions}>
            <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#74633B'} />
            <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#59724A'} />
            <PromoCard title={'Заголовок акции'} description={'Ставки на различные виды спорта'} background={'#761516'} />
          </div>
        </Card>
        <Hero />
      </div>
    </>
  );
}

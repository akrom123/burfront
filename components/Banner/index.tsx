'use client'

import { Button } from '../ui/Button'
import { Heading } from '../Heading'
import styles from './styles.module.scss'
import Image from 'next/image'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"

export const Banner = () => {
    return <div className={styles.banner}>
        <div className={styles.bannerSlider}>
            <Slider dots fade infinite speed={500} slidesToShow={1} slidesToScroll={1} waitForAnimate={false} arrows={false}>
                <div className={styles.bannerItem}>
                    <div className={styles.bannerContent}>
                        <div className={styles.bannerText}>
                            <div className={styles.bannerHeading}>Заголовок баннера в две строки</div>
                            <div className={styles.bannerDescription}>Краткое описание подзаголовоком в одну строку</div>
                        </div>
                        <Button>Подробнее</Button>
                    </div>
                    <Image src="/images/banner.png" width={570} height={400} alt='' />
                </div><div className={styles.bannerItem}>
                    <div className={styles.bannerContent}>
                        <div className={styles.bannerText}>
                            <div className={styles.bannerHeading}>Заголовок баннера 2 в две строки</div>
                            <div className={styles.bannerDescription}>Краткое описание 2 подзаголовоком в одну строку</div>
                        </div>
                        <Button>Подробнее</Button>
                    </div>
                    <Image src="/images/banner.png" width={570} height={400} alt='' />
                </div>
            </Slider>
        </div>
    </div>
}
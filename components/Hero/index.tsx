'use client'

import { Button } from '../ui/Button';
import styles from './styles.module.scss';
import Image from 'next/image'
import { useRouter } from 'next/navigation';


export const Hero = () => {
    const router = useRouter()

    return <div className={styles.hero}>
        <div className={styles.heroContent}>
            <div className={styles.heroText}>
                <div className={styles.heroHeading}>
                    Заголовок баннера в две строки
                </div>
                <div className={styles.heroDescription}>Краткое описание подзаголовоком в одну строку</div>
            </div>
            <Button variant='transparent' onClick={() => router.push('/game')}>Подробнее</Button>
        </div>
        <Image src="/images/cat.png" width={320} height={472} alt='' className={styles.heroImage} />
    </div>
}
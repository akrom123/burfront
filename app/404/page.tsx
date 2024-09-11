import { Button } from '@/components/ui/Button';
import Image from 'next/image'
import styles from './styles.module.scss'

export default function Page() {

    return (
        <>
            <div className="container">
                <div className={styles.hero}>
                    <Image
                        width={319}
                        height={154}
                        alt=""
                        src="/images/404.svg"
                        className={styles.image}
                    />
                    <div className={styles.title}>
                        Запрашиваемая страница
                        не найдена
                    </div>
                    <Button>Вернуться на главную</Button>
                </div>
            </div>
        </>
    );
}

import { Progress } from '@/components/ui/Progress'
import styles from './styles.module.scss'
import { Diamond } from '../Diamond'


export const ProgressCard = () => {
    return <div className={styles.progressCard}>
        <div className={styles.progressCardHeader}>
            <div className={styles.progressCardTitle}>Hitbee</div>
            <Diamond variant={'blue'} size={39}/>
        </div>
        <Progress
            value={82}
            start={{
                variant: 'bronze',
                label: 'Бронза'
            }}
            end={{
                variant: 'gold',
                label: 'Золото'
            }}
        />
    </div>
}
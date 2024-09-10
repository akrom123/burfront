import { Accordion } from '@/components/ui/Accordion'
import styles from '../styles.module.scss'
import { Icon } from '@/components/ui/Icon'
import { Input } from '@/components/ui/Form'
import { Copy } from '@/components/ui/Copy'
import { CopyBar } from '@/components/ui/CopyBar'

export const Campaigns = () => {
    return <div className={styles.campaigns}>
        {
            Array(10).fill(null).map((_, i) => <Accordion
                key={i}
                title={'Название кампании'}
                addon={<><Icon name="cash" /> <span>$157</span></>}
            >
                <div className={styles.campaignsIndicators}>
                    <div className={styles.campaignsIndicator}>
                        <div className={styles.campaignsIndicatorText}>Переходы по ссылке</div>
                        <div className={styles.campaignsIndicatorValue}>25</div>
                    </div>
                    <div className={styles.campaignsIndicator}>
                        <div className={styles.campaignsIndicatorText}>Рефералы</div>
                        <div className={styles.campaignsIndicatorValue}>25</div>
                    </div>
                    <div className={styles.campaignsIndicator}>
                        <div className={styles.campaignsIndicatorText}>Доступная комиссия</div>
                        <div className={styles.campaignsIndicatorValue}>2%</div>
                    </div>
                    <div className={styles.campaignsIndicator}>
                        <div className={styles.campaignsIndicatorText}>Всего</div>
                        <div className={styles.campaignsIndicatorValue}>2%</div>
                    </div>
                    <div className={styles.campaignsIndicator}>
                        <div className={styles.campaignsIndicatorText}>Депозиты</div>
                        <div className={styles.campaignsIndicatorValue}>25</div>
                    </div>
                    <div className={styles.campaignsIndicator}>
                        <div className={styles.campaignsIndicatorText}>Уникальных</div>
                        <div className={styles.campaignsIndicatorValue}>25</div>
                    </div>
                </div>
                <CopyBar
                    value={'sitenameadress.com/ref/sdfljghsfjbsdklf'}
                />
            </Accordion>)
        }
        <div className={styles.campaignsCreateButton}>Создать кампанию</div>
    </div>
}
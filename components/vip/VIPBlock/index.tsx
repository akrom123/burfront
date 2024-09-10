import { Tabs } from '@/components/ui/Tabs'
import styles from './styles.module.scss'
import { useState } from 'react'
import { ProgressCard } from '../ProgressCard'
import { Boost } from '../Boost'
import { Rakeback } from '../Rakeback'
import { Privilegies } from '../Privilegies'

export const VIPBlock = () => {
    const [tab, setTab] = useState(0)
    return <div className={styles.vipBlock}>
        <Tabs variant="secondary" items={[
            {
                label: 'Прогресс',
                value: 0,
            },
            {
                label: 'Привилегии',
                value: 1,
            },
            {
                label: 'Буст',
                value: 2,
            },
            {
                label: 'Рейкбек',
                value: 3,
            },
        ]}
            value={tab}
            onChange={v => setTab(+v)}
        />
        {
            tab === 0 && <ProgressCard />
        }
        {
            tab === 1 && <Privilegies />
        }
        {
            tab === 2 && <Boost />
        }
        {
            tab === 3 && <Rakeback />
        }
    </div>
}
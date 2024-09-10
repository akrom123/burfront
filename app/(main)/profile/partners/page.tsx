'use client'

import { Badge } from '@/components/ui/Badge';
import { Card } from "@/components/ui/Card";
import { LevelCard } from '@/components/vip/LevelCard';
import styles from './styles.module.scss';
import { Tabs } from '@/components/ui/Tabs';
import { useState } from 'react';
import { Campaigns } from './components/Campaigns';
import { Stats } from './components/Stats';
import { Details } from './components/Details';

export default function Page() {
    const [tab, setTab] = useState(0);
    return (
        <>
            <Card
                title="Партнерская программа"
            >
                <div className={styles.partnersBlock}>
                    <Tabs variant="secondary" items={[
                        {
                            label: 'Кампании',
                            value: 0,
                        },
                        {
                            label: 'Статистика',
                            value: 1,
                        },
                        {
                            label: 'Подробнее о партнерской программе',
                            value: 2,
                        }
                    ]}
                        value={tab}
                        onChange={v => setTab(+v)}
                    />
                    {
                        tab === 0 && <Campaigns />
                    }
                    {
                        tab === 1 && <Stats />
                    }
                    {
                        tab === 2 && <Details />
                    }
                </div>
            </Card>
        </>
    );
}
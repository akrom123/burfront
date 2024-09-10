'use client'

import { Badge } from '@/components/ui/Badge';
import { Card } from "@/components/ui/Card";
import { LevelCard } from '@/components/vip/LevelCard';
import styles from './styles.module.scss';

export default function Page() {
    return (
        <>
            <Card
                title="Система уровней VIP"
            >
                <div className={styles.levelCards}>
                    <LevelCard
                        badge={<Badge variant="primary">GOLD</Badge>}
                        image={'1.svg'}
                        amount={'$100k - 250k$'}
                        features={[
                            'Преимущество уровня',
                            'Преимущество уровня',
                            'Преимущество уровня',
                            'Преимущество уровня',
                            'Преимущество уровня',
                        ]}
                    />
                    <LevelCard
                        badge={<Badge variant="primary">GOLD</Badge>}
                        image={'2.svg'}
                        amount={'$100k - 250k$'}
                        features={[
                            'Преимущество уровня',
                            'Преимущество уровня',
                            'Преимущество уровня',
                            'Преимущество уровня',
                            'Преимущество уровня',
                        ]}
                    />
                    <LevelCard
                        badge={<Badge variant="primary">GOLD</Badge>}
                        image={'3.svg'}
                        amount={'$100k - 250k$'}
                        features={[
                            'Преимущество уровня',
                            'Преимущество уровня',
                            'Преимущество уровня',
                            'Преимущество уровня',
                            'Преимущество уровня',
                        ]}
                    />
                </div>
            </Card>
        </>
    );
}
'use client'

import { Button } from '@/components/ui/Button';
import { Card } from "@/components/ui/Card";
import { useMediaQuery } from '@/hooks';
import styles from './styles.module.scss'
import { Table } from '@/components/ui/Table';

export default function Page() {
    const { isXS } = useMediaQuery()
    const columns = [
        { title: 'Тип операции', field: 'operationType', flex: 1 },
        { title: 'Время', field: 'registeredDate', },
        { title: 'Тип', field: 'type1', flex: 0.6 },
        { title: 'Тип', field: 'type2', flex: 0.6 },
        { title: 'Тип', field: 'type3', flex: 0.6 },
    ]
    const data = Array(10).fill({
        operationType: 'Назв. операции',
        registeredDate: '14.12.2012 12:12',
        type1: '46',
        type2: '46',
        type3: '$17.24',
    })
    return (
        <>
            <Card
                title="Мой счет"
            >
                <div className={styles.balances}>
                    <div className={styles.balance}>
                        <div className={styles.balanceCard}>
                            <div className={styles.balanceCardTitle}>Ваш баланс: </div>
                            <div className={styles.balanceCardValue}>$ 456 874</div>
                        </div>
                        <Button variant="primary">Пополнить</Button>
                    </div>
                    <div className={styles.balance}>
                        <div className={styles.balanceCard}>
                            <div className={styles.balanceCardTitle}>Доступно к выводу:</div>
                            <div className={styles.balanceCardValue}>$ 456 874</div>
                        </div>
                        <Button variant="gold">Вывести</Button>
                    </div>
                </div>
            </Card>
            <Card
                title="История пополнения и выводов"
            >
                {
                    !isXS ? <Table
                        columns={columns}
                        data={data}
                    /> : <div className={styles.cardsList}>
                        {data.map((row, index) => (
                            <div key={index} className={styles.card}>
                                <div className={styles.cardRow}>
                                    {columns.slice(0, 3).map((column, index) => (
                                        <div className={styles.cardCol} key={column.field}>
                                            <div className={styles.cardColTitle}>{column.title}</div>
                                            <div className={styles.cardColValue}>{row[column.field]}</div>
                                        </div>
                                    ))}
                                </div>
                                <div className={styles.cardRow}>
                                    {columns.slice(3, 5).map((column, index) => (
                                        <div className={styles.cardCol} key={column.field}>
                                            <div className={styles.cardColTitle}>{column.title}</div>
                                            <div className={styles.cardColValue}>{row[column.field]}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                }
            </Card >
        </>
    );
}
'use client'

import { Filter, FiltersWrapper } from '@/components/Filter';
import { Card } from "@/components/ui/Card";
import { Input } from '@/components/ui/Form';
import { Icon } from '@/components/ui/Icon';
import { useMediaQuery } from '@/hooks';
import styles from './styles.module.scss';
import { Table } from '@/components/ui/Table';

export default function Page() {

    const { isXS } = useMediaQuery()
    const columns = [
        { title: 'Игра', field: 'game', flex: 1 },
        { title: 'Время', field: 'registeredDate', },
        { title: 'Тип', field: 'type1', flex: 0.6 },
        { title: 'Ставка', field: 'type2', flex: 0.6 },
        { title: 'Тип', field: 'type3', flex: 0.6 },
    ]
    const data = Array(10).fill({
        game: 'Назв. операции',
        registeredDate: '14.12.2012 12:12',
        type1: '46',
        type2: 'Значение',
        type3: '$17.24',
    })

    return (
        <>
            <Card
                title="История ставок"
                actions={
                    <Input
                        placeholder='Search'
                        action={<Icon name="search" size={18} />}
                        actionType={'icon'}
                        className={styles.search}
                    />
                }
            >

                <FiltersWrapper>
                    <Filter
                        label="Type:"
                        value="Спорт"
                        options={['Спорт', 'Спорт']}
                        onChange={() => { }}
                    />
                    <Filter
                        label="Time:"
                        value="1 hours"
                        options={['1 hours', '1 hours']}
                        onChange={() => { }}
                    />
                    <Filter
                        label="Type:"
                        value="Победа"
                        options={['Победа', 'Победа']}
                        onChange={() => { }}
                    />
                </FiltersWrapper>

                {
                    !isXS ? <Table
                        columns={columns}
                        data={data}
                    /> : <div className={styles.cardsList}>
                        {data.map((row, index) => (
                            <div key={index} className={styles.card}>
                                {columns.map((column, index) => (
                                    <div className={styles.cardCol} key={column.field}>
                                        <div className={styles.cardColTitle}>{column.title}</div>
                                        <div className={styles.cardColValue}>{row[column.field]}</div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                }
            </Card>
        </>
    );
}
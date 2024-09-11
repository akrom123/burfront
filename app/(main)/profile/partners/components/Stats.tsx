import { Filter, FiltersWrapper } from "@/components/Filter"
import { Table } from "@/components/ui/Table"
import { useMediaQuery } from "@/hooks"
import styles from '../styles.module.scss'

export const Stats = () => {
    const { isXS } = useMediaQuery()
    const columns = [
        { title: 'Имя пользователя', field: 'name', flex: 1 },
        { title: 'Зарегистрирован', field: 'registeredDate', },
        { title: 'Депозитов', field: 'depositsAmount', flex: 0.6 },
        { title: 'Последний деп.', field: 'lastDepositDate', },
        { title: 'Оборот', field: 'turnovers', flex: 0.6 },
        { title: 'Комиссия', field: 'comission', flex: 0.6 },
    ]
    const data = Array(10).fill({
        name: 'UserName',
        registeredDate: '14.12.2012 12:12',
        depositsAmount: '46',
        lastDepositDate: '14.12.2012 12:12',
        turnovers: '$17.24',
        comission: '5%',
    })
    return <div>
        <FiltersWrapper>
            <Filter
                label="Имя компании:"
                value="Bсe (0 Депозитов)"
                options={['Bсe (0 Депозитов)', 'Bсe (0 Депозитов)']}
                onChange={() => { }}
            />
            <Filter
                label="Сортировка:"
                value="Количество депозитов"
                options={['Количество депозитов', 'Количество депозитов']}
                onChange={() => { }}
            />
        </FiltersWrapper>
        {
            !isXS ? <Table
                columns={columns}
                data={data}
            /> : <div className={styles.statsCardsList}>
                {data.map((row, index) => (
                    <div key={index} className={styles.statsCard}>
                        <div className={styles.statsCardRow}>
                            {columns.slice(0, 3).map((column, index) => (
                                <div className={styles.statsCardCol} key={column.field}>
                                    <div className={styles.statsCardColTitle}>{column.title}</div>
                                    <div className={styles.statsCardColValue}>{row[column.field]}</div>
                                </div>
                            ))}
                        </div>
                        <div className={styles.statsCardRow}>
                            {columns.slice(3, 6).map((column, index) => (
                                <div className={styles.statsCardCol} key={column.field}>
                                    <div className={styles.statsCardColTitle}>{column.title}</div>
                                    <div className={styles.statsCardColValue}>{row[column.field]}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        }

    </div>
}
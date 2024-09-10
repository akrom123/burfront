import { FC } from "react"
import styles from './styles.module.scss'

interface IColumn {
    title: string
    flex?: number
    minWidth?: number
    field: string
}

interface IProps {
    columns: IColumn[]
    data: any[]
}

export const Table: FC<IProps> = ({ columns, data }) => {
    return <div className={styles.table}>
        <div className={styles.tableHeader}>
            {
                columns.map(({ title, flex = 1, minWidth }, index) => (
                    <div key={index} style={{ flex, minWidth: minWidth || 0 }} className={styles.tableCell}>{title}</div>
                ))
            }
        </div>
        <div className={styles.tableBody}>
            {
                data.map((row, index) => {
                    return <div key={index} className={styles.tableRow}>
                        {
                            columns.map(({ flex = 1, minWidth, field }, index) => (
                                <div
                                    key={index}
                                    style={{ flex, minWidth: minWidth || 0 }}
                                    className={styles.tableCell}
                                >
                                    {row[field]}
                                </div>
                            ))
                        }
                    </div>
                })
            }
        </div>
    </div>
}
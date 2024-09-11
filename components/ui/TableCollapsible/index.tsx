
import { FC, useState } from "react"
import styles from './styles.module.scss'
import { Icon } from "../Icon"
import clsx from "clsx"

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

export const TableCollapsible: FC<IProps> = ({ columns, data }) => {
    return <div className={styles.table}>
        <div className={styles.tableHeader}>
            {
                columns.map(({ title, flex = 1, minWidth }, index) => (
                    <div key={index} style={{ flex, minWidth: minWidth || 0 }} className={styles.tableCell}>{title}</div>
                ))
            }
            <div className={clsx(styles.tableCollapseArrow, styles.tableCell)}></div>
        </div>
        <div className={styles.tableBody}>
            {
                data.map((row, index) => {
                    return <Row row={row} columns={columns} key={index} />
                })
            }
        </div>
    </div>
}

const Row = ({ row, columns }: { row: any, columns: IColumn[] }) => {
    const [isOpen, setIsOpen] = useState(false)
    return <div className={styles.tableRowWrapper}>
        <div className={clsx(styles.tableRow, isOpen && styles.tableRowOpen)} onClick={() => setIsOpen(!isOpen)}>
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
            <div className={clsx(styles.tableCollapseArrow, styles.tableCell)}>
                <Icon name={'arrow-down'} size={12} rotate={isOpen ? 180 : 0} />
            </div>
        </div>
        {
            isOpen &&
            <div className={styles.tableRowDetails}>
                <div className={styles.tableRowDetailsColumn}>
                    <div className={styles.tableRowDetailsItem}>
                        <span>Type:</span>
                        <span>Значение</span>
                    </div>
                    <div className={styles.tableRowDetailsItem}>
                        <span>Type:</span>
                        <span>Значение</span>
                    </div>
                    <div className={styles.tableRowDetailsItem}>
                        <span>Type:</span>
                        <span>Значение</span>
                    </div>
                </div>
                <div className={styles.tableRowDetailsColumn}>
                    <div className={styles.tableRowDetailsItem}>
                        <span>Type:</span>
                        <span>Значение</span>
                    </div>
                    <div className={styles.tableRowDetailsItem}>
                        <span>Type:</span>
                        <span>Значение</span>
                    </div>
                    <div className={styles.tableRowDetailsItem}>
                        <span>Type:</span>
                        <span>Значение</span>
                    </div>
                </div>
            </div>
        }
    </div>
}
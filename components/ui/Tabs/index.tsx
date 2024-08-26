'use client'

import { FC } from "react";
import styles from './styles.module.scss';

interface ITab {
    label: string
    value: string | number

}

interface IProps {
    items: ITab[]
    value?: ITab['value']
    onChange?: (value: ITab['value']) => void;
}

export const Tabs: FC<IProps> = ({ items, value, onChange }) => {
    return <div className={styles.tabs}>
        {
            items.map(item =>
                <div
                    onClick={() => onChange?.(item.value)}
                    key={item.value}
                    className={`${styles.tabsItem} ${item.value === value ? styles.tabsItemActive : ''}`}
                >{item.label}</div>
            )

        }
    </div>
}
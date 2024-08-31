'use client'

import { FC } from "react";
import styles from './styles.module.scss';
import clsx from "clsx";

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
    return <div className={styles.tabsWrapper}>
        <div className={styles.tabs}>
            {
                items.map(item =>
                    <div
                        onClick={() => onChange?.(item.value)}
                        key={item.value}
                        className={clsx(styles.tabsItem, item.value === value && styles.tabsItemActive)}
                    >{item.label}</div>
                )

            }
        </div>
    </div>
}
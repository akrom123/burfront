'use client'

import { FC } from "react";
import styles from './styles.module.scss';
import clsx from "clsx";

const variants = {
    primary: styles.tabsPrimary,
    secondary: styles.tabsSecondary,
}

interface ITab {
    label: string
    value: string | number

}

interface IProps {
    items: ITab[]
    value?: ITab['value']
    onChange?: (value: ITab['value']) => void;
    variant?: keyof typeof variants;
}

export const Tabs: FC<IProps> = ({ items, value, variant = 'primary', onChange }) => {
    return <div className={styles.tabsWrapper}>
        <div className={clsx(styles.tabs, variants[variant])}>
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
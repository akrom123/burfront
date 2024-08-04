'use client'

import { FC, useState } from "react";
import ClickAwayListener from 'react-click-away-listener';
import styles from './styles.module.scss';
import { Icon } from "../../ui/Icon";

enum Lang {
    en = 'en',
    ru = 'ru',
};

const flags = {
    en: styles.flagEN,
    ru: styles.flagRU,
}

const options: Lang[] = [
    Lang.ru,
    Lang.en,
];

export const LangSwitcher: FC = () => {
    const [value, setValue] = useState<Lang>(Lang.en);
    const [visible, setVisible] = useState(false);
    return <ClickAwayListener onClickAway={() => setVisible(false)}>
        <div className={`${styles.dropdown} ${visible ? styles.dropdownOpen : ''}`}>
            <div className={styles.dropdownValue} onClick={() => setVisible(!visible)}>
                <div className={`${styles.flag} ${flags[value]}`}></div>
                <Icon name="arrow-down" size={11}></Icon>
            </div>
            <div
                className={`${styles.dropdownOptions} ${visible ? styles.dropdownOptionsVisible : ''}`}>
                {options.map(option => (
                    <div
                        className={`${styles.dropdownOptionsItem} ${value === option ? styles.dropdownOptionsItemActive : ''}`}
                        key={option}
                        onClick={() => {
                            setValue(option);
                            setVisible(false);
                        }}>
                        <div className={`${styles.flag} ${flags[option]}`}></div>
                    </div>
                ))}
            </div>
        </div>
    </ClickAwayListener>;
}
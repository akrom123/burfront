import ClickAwayListener from 'react-click-away-listener';
import styles from './styles.module.scss'
import { FC, PropsWithChildren, useState } from 'react';
import { Icon } from '../ui/Icon';
import clsx from 'clsx';

interface IProps {
    label: string;
    options: string[];
    onChange: (value: string) => void;
    value?: string;
}

export const Filter: FC<IProps> = ({ label, options, onChange, value }) => {
    const [visible, setVisible] = useState(false);
    return <div className={styles.filter}>
        <div className={styles.filterLabel}>{label}</div>
        <ClickAwayListener onClickAway={() => setVisible(false)}>
            <div className={styles.filterDropdown}>
                <div className={styles.filterDropdownValue} onClick={() => setVisible(!visible)}>
                    <span>{value}</span>
                    <Icon name="arrow-down" size={8}></Icon>
                </div>
                {
                    visible && <div
                        className={clsx(styles.filterDropdownOptions)}
                    >
                        {options.map(option => (
                            <div
                                className={clsx(styles.filterDropdownOptionsItem, value === option ? styles.filterDropdownOptionsItemActive : '')}
                                key={option}
                                onClick={() => {
                                    onChange(option);
                                    setVisible(false);
                                }}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                }
            </div>
        </ClickAwayListener>
    </div>
}

export const FiltersWrapper: FC<PropsWithChildren> = ({ children }) => { return <div className={styles.filtersWrapper}>{children}</div> }
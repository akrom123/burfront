'use client'

import { FC, PropsWithChildren, useState } from 'react';
import styles from './styles.module.scss';
import { Icon } from '../Icon';
import React from 'react';
import clsx from 'clsx';

interface ICollapseProps extends PropsWithChildren {
    title: string;
    onChange?: (value?: boolean) => void;
}

export const Collapse: FC<ICollapseProps> = ({ children, onChange = () => { }, title = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    return <div className={clsx(styles.collapse, isOpen && styles.collapseOpen)}>
        <div className={styles.collapseHeader} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.collapseTitle}>{title}</div>
            <Icon name="arrow-down" size={16} className={styles.collapseArrow} rotate={isOpen ? 180 : 0}></Icon>
        </div>
        {
            isOpen && <div className={styles.collapseContent}>{children}</div>
        }
    </div>
}
import { FC, useState } from 'react';
import styles from './styles.module.scss'
import { Icon } from '../Icon';
import clsx from 'clsx';


interface IProps {
    title: string;
    addon?: React.ReactNode;
    children: React.ReactNode;
}

export const Accordion: FC<IProps> = ({ title, addon, children }) => {
    const [isOpen, setIsOpen] = useState(false)
    return <div className={clsx(styles.accordion, isOpen && styles.accordionOpen)}>
        <div className={styles.accordionHeader} onClick={() => setIsOpen(!isOpen)}>
            <div className={styles.accordionHeaderTitle}>{title}</div>
            <div className={styles.accordionHeaderAddon}>{addon}</div>
            <Icon name={'arrow-down'} size={12} rotate={isOpen ? 180 : 0} />
        </div>
        {
            isOpen && <div className={styles.accordionContent}>{children}</div>
        }
    </div>
}
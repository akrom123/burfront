import { FC } from "react";
import styles from './styles.module.scss';
import { Icon } from "../Icon";

interface IProps {
    children: React.ReactNode,
}

export const MoreBtn: FC<IProps> = ({children}) => {
    return <div className={styles.moreBtn}>
        <span>{children}</span>
        <Icon name={'more'} size={13}/>
    </div>
}
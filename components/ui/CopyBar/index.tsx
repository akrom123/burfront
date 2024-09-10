import { FC } from "react"
import styles from './styles.module.scss'
import { Copy } from "../Copy"

interface IProps {
    value?: string
}

export const CopyBar: FC<IProps> = ({ value }) => {
    return <div className={styles.copybar}>

        <div className={styles.copybarText}>
            {value}
        </div>
        <div className={styles.copybarIcon}>
            <Copy text={value} icon="copy-2" iconSize={24} />
        </div>
    </div>
}
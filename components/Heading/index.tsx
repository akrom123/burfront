import { FC, HTMLProps } from "react"
import styles from './styles.module.scss'

const levels = {
    1: styles.headingLevel1,
    2: styles.headingLevel2,
    3: styles.headingLevel3,
}

interface IProps extends HTMLProps<HTMLDivElement> {
    level: keyof typeof levels
    children: React.ReactNode
}

export const Heading: FC<IProps> = ({children, level}) => {
    return <div className={`${styles.heading} ${levels[level]}`}>{children}</div>
}
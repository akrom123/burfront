import { FC, HTMLProps } from "react"
import styles from './styles.module.scss'
import clsx from "clsx"

const levels = {
    1: styles.headingLevel1,
    2: styles.headingLevel2,
    3: styles.headingLevel3,
}

interface IProps extends HTMLProps<HTMLDivElement> {
    level: keyof typeof levels
    center?: boolean
    children: React.ReactNode
}

export const Heading: FC<IProps> = ({ children, level, className, center = false }) => {
    return <div
        className={clsx(styles.heading, levels[level], center && styles.headingCenter, className)}
    >
        {children}
    </div>
}
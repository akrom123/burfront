import { Icon } from "@/components/ui/Icon"
import { FC } from "react"

const variants = {
    blue: 'var(--color-lightblue)',
    gold: 'var(--color-gold)',
    bronze: 'var(--color-bronze)',
    silver: 'var(--color-silver)',
}

export interface IProps {
    variant?: keyof typeof variants
    size?: number
}

export const Diamond: FC<IProps> = ({ variant = 'gold', size }) => {
    return <Icon name="diamond" style={{ color: variants[variant] }} size={size} />
}
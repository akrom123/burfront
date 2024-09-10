import { FC } from "react"
import { Icon } from "../Icon"
import { Toast, useToaster } from "../Toaster"

interface IProps {
    text?: string
    icon?: string
    iconSize?: number
}

export const Copy: FC<IProps> = ({ text = '', icon = 'copy', iconSize = 15 }) => {
    const toaster = useToaster()
    return <Icon
        name={icon}
        size={iconSize}
        onClick={() => {
            navigator.clipboard.writeText(text)
            toaster.push(
                <Toast message="Текст скопирован в буфер обмена" onClose={() => toaster.remove('')} />,
                { placement: 'topCenter' }
            )
        }} />
}
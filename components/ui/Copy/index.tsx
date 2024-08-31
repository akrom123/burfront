import { FC } from "react"
import { Icon } from "../Icon"
import { Toast, useToaster } from "../Toaster"

interface IProps {
    text?: string
}

export const Copy: FC<IProps> = ({ text = '' }) => {
    const toaster = useToaster()
    return <Icon
        name="copy"
        size={15}
        onClick={() => {
            navigator.clipboard.writeText(text)
            toaster.push(
                <Toast message="Текст скопирован в буфер обмена" onClose={() => toaster.remove('')} />,
                { placement: 'topCenter' }
            )
        }} />
}
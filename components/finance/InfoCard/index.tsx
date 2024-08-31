import { Card } from "@/components/ui/Card"
import { FC } from "react"
import styles from './styles.module.scss'
import { Button } from "@/components/ui/Button"

interface Item {
    title: string
    description: string
}

interface IProps {
    items: Item[]
    actionText: string
    onSubmit: () => void
}

export const InfoCard: FC<IProps> = ({ items, actionText, onSubmit }) => {
    return <Card compact title="Информация о счете" bordered>
        <div className={styles.container}>
            <div className={styles.items}>
                {
                    items.map((item) => <div key={item.title} className={styles.item}>
                        <div className={styles.itemTitle}>{item.title}</div> 
                        <div className={styles.itemDescription}>{item.description}</div> 
                    </div>)
                }
                <Button onClick={onSubmit}>{actionText}</Button>
            </div>
        </div>
    </Card>
}
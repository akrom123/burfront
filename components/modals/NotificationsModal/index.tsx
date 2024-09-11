'use client'

import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal"
import { Notification } from "@/components/ui/Notification"
import { useStores } from "@/contexts";
import { observer } from "mobx-react-lite"
import styles from './styles.module.scss'

export const NotificationsModal = observer(() => {
    const { appStore } = useStores();

    return <Modal open={appStore.modal.notifications} title={'Уведомления'} onClose={() => appStore.toggleModal('notifications', false)}>
        <div className={styles.wrapper}>
            <div className={styles.notificationsList}>
                {appStore.notifications.map((notification) => (
                    <Notification key={notification.id} title={notification.title} description={notification.description} />
                ))}
            </div>
            <Button variant="tertiary">Очистить</Button>
        </div>
    </Modal>
})
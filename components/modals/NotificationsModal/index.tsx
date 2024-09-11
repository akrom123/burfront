'use client'

import { Modal } from "@/components/ui/Modal"
import { Notification } from "@/components/ui/Notification"
import { useStores } from "@/contexts";
import { observer } from "mobx-react-lite"

export const NotificationsModal = observer(() => {
    const { appStore } = useStores();

    return <Modal open={appStore.modal.notifications} title={'Уведомления'} onClose={() => appStore.toggleModal('notifications', false)}>
        {appStore.notifications.map((notification) => (
            <Notification key={notification.id} title={notification.title} description={notification.description} />
        ))}
    </Modal>
})
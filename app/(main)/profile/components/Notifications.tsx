'use client'

import { Heading } from "@/components/Heading";
import { Notification, NotificationToast } from "@/components/ui/Notification";
import styles from './Notifications.module.scss';
import { useMediaQuery } from "@/hooks";
import { useStores } from "@/contexts";
import ClickAwayListener from "react-click-away-listener";
import { FC, useEffect } from "react";
import { useToaster } from "@/components/ui/Toaster";


interface IProps {
    onClose: () => void;
}

export const Notifications: FC<IProps> = ({ onClose }) => {
    const { appStore } = useStores();
    const toaster = useToaster()

    useEffect(() => {
        toaster.push(
            <NotificationToast title={appStore.notifications[0].title} description={appStore.notifications[0].description} onClose={() => toaster.remove('')} />,
            { placement: 'bottomStart', duration: 3000 }
        )
    }, [])

    return (
        <ClickAwayListener onClickAway={onClose}>
            <div className={styles.notifications}>
                <div className={styles.notificationsHeader}>
                    <div className={styles.notificationsTitle}>Уведомления</div>
                    <div className={styles.notificationsClear}>Очистить</div>
                </div>
                <div className={styles.notificationsList}>
                    {appStore.notifications.map((notification) => (
                        <Notification key={notification.id} title={notification.title} description={notification.description} />
                    ))}
                </div>
            </div>
        </ClickAwayListener>
    );
}

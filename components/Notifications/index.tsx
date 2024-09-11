'use client'

import { Notification, NotificationToast } from "@/components/ui/Notification";
import styles from './styles.module.scss';
import { useStores } from "@/contexts";
import ClickAwayListener from "react-click-away-listener";
import { FC, HTMLAttributes, useEffect } from "react";
import { useToaster } from "@/components/ui/Toaster";
import clsx from "clsx";
import { observer } from "mobx-react-lite";


interface IProps extends HTMLAttributes<HTMLDivElement> {
    onClose?: () => void;
}

export const Notifications: FC<IProps> = observer(({ onClose = () => { }, className }) => {
    const { appStore } = useStores()
    const toaster = useToaster()

    useEffect(() => {
        toaster.push(
            <NotificationToast
                title={appStore.notifications[0].title}
                description={appStore.notifications[0].description}
                onClose={() => toaster.remove('')}
            />,
            { placement: 'bottomStart', duration: 3000 }
        )
    }, [toaster, appStore.notifications])

    return (
        <ClickAwayListener onClickAway={onClose}>
            <div className={clsx(styles.notifications, className)}>
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
})

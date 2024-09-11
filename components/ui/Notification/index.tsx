import { FC, HTMLAttributes, useState } from "react";
import styles from './styles.module.scss';
import { Icon } from "../Icon";
import React from "react";
import { TypeAttributes } from "rsuite/esm/internals/types";
import { useEventCallback, useIsMounted } from "rsuite/esm/internals/hooks";
import useDelayedClosure from "rsuite/esm/toaster/hooks/useDelayedClosure";
import { mergeRefs } from "@reactuses/core";
import clsx from "clsx";

interface IProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
    title: React.ReactNode,
    description: React.ReactNode,
}

export const Notification = React.forwardRef<HTMLDivElement, IProps>(({ title, description, className, ...props }, ref) => {
    return <div className={clsx(styles.notification, className)} ref={ref} {...props}>
        <Icon name={'notification-status'} size={35} className={styles.notificationIcon} />
        <div className={styles.notificationContent}>
            <div className={styles.notificationTitle}>
                {title}
            </div>
            <div className={styles.notificationDescription}>
                {description}
            </div>
        </div>
    </div>
})

Notification.displayName = 'Notification';


interface INotificationToastProps extends IProps {
    placement?: string;
    duration?: number
    onClose?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

export const NotificationToast = React.forwardRef<HTMLDivElement, INotificationToastProps>((props, ref) => {
    const { placement, duration = 2000, className, onClose = () => { }, ...rest } = props;

    const [display, setDisplay] = useState<TypeAttributes.DisplayState>('show');
    const isMounted = useIsMounted();
    const targetRef = React.useRef<HTMLDivElement>(null);

    const { clear } = useDelayedClosure({ targetRef, onClose, duration });

    const handleClose = useEventCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        setDisplay('hiding');
        onClose?.(event);
        clear();
        setTimeout(() => {
            if (isMounted()) {
                setDisplay('hide');
            }
        }, 1000);
    });

    if (display === 'hide') {
        return null;
    }

    return (
        <Notification
            onClick={() => handleClose()}
            ref={mergeRefs(targetRef, ref)}
            className={styles.notificationToast}
            {...rest}
        />
    );
});

NotificationToast.displayName = 'NotificationToast';
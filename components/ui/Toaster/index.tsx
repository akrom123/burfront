import React, { useState } from 'react';
import useToaster from 'rsuite/useToaster';
import 'rsuite/useToaster/styles/index.css';
import 'rsuite/toaster/styles/index.css';
import styles from './styles.module.scss';
import { TypeAttributes } from 'rsuite/esm/internals/types';
import { useIsMounted, useEventCallback } from 'rsuite/esm/internals/hooks';
import useDelayedClosure from 'rsuite/esm//toaster/hooks/useDelayedClosure';
import { mergeRefs } from 'rsuite/esm/internals/utils';
import { Icon } from '../Icon';

export {
    useToaster
};

interface IProps {
    type?: keyof typeof types;
    message: string;
    placement?: string;
    duration?: number
    onClose?: (event?: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const types = {
    success: styles.toastSuccess,
    error: styles.toastError,
    default: styles.toastDefault
}

export const Toast = React.forwardRef<HTMLDivElement, IProps>((props, ref) => {
    const { type = 'default', placement, duration = 2000, message, className, onClose = () => { }, ...rest } = props;

    const icon = type == 'success' ? 'tick-circle' : type === 'error' ? 'danger' : 'tick-circle';


    const [display, setDisplay] = useState<TypeAttributes.DisplayState>('show');
    const isMounted = useIsMounted();
    const targetRef = React.useRef<HTMLDivElement>(null);

    // Timed close message
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

    const classes = `${className} ${styles.toast} ${types[type]} ${display === 'hiding' ? styles.toastHiding : ''}`;

    return (
        <div
            ref={mergeRefs(targetRef, ref)}
            {...rest}
            className={classes}
        >
            <Icon name={icon} className={styles.toastIcon} />
            <div className={styles.toastMessage}>{message}</div>
            <Icon name="close" onClick={handleClose} className={styles.toastClose} />
        </div>
    );
});


Toast.displayName = 'Toast';
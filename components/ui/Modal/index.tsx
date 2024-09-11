import RSModal, { ModalProps } from 'rsuite/Modal';
import './styles.scss';
import { FC, useEffect } from 'react';
import { Icon } from '../Icon';
import React from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

interface IProps extends ModalProps {
    title?: string;
}

export const Modal: FC<IProps> = ({ title, children, onClose, ...props }) => {
    const ref = React.useRef<HTMLElement>(null);
    useEffect(() => {
        if (props.open) {
            disableBodyScroll(ref.current!);
        }
        return () => {
            enableBodyScroll(ref.current!);
        };
    }, [props.open])
    return <RSModal {...props} onClose={onClose} ref={ref}>
        <Icon name="close-circle" size={24} onClick={onClose} className={'rs-modal-close'} />
        <div className={'rs-modal-content-inner'}>
            <div className={'rs-modal-title'}>{title}</div>
            {children}
        </div>
    </RSModal>
}
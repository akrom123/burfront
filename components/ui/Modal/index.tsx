import RSModal, { ModalProps } from 'rsuite/Modal';
import './styles.scss';
import { FC } from 'react';
import { Icon } from '../Icon';
import React from 'react';

interface IProps extends ModalProps {
    title?: string;
}

export const Modal: FC<IProps> = ({ title, children, onClose, ...props }) => {
    const ref = React.useRef<HTMLElement>(null);
    return <RSModal {...props} onClose={onClose} ref={ref}>
        <Icon name="close-circle" size={24} onClick={onClose} className={'rs-modal-close'} />
        <div className={'rs-modal-content-inner'}>
            <div className={'rs-modal-title'}>{title}</div>
            {children}
        </div>
    </RSModal>
}
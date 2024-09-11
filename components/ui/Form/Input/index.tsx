'use client'

import React, { FC, InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx';
import { get, useController, useFormContext } from 'react-hook-form';
import { usePhoneInput } from 'react-international-phone';
import { mergeRefs } from '@reactuses/core';


const actionStyles = {
    button: styles.actionButton,
    plain: styles.actionPlain,
    icon: styles.actionIcon,
    copy: styles.actionCopy,
    text: styles.actionText,
    placeholder: styles.actionPlaceholder,
}


interface IProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    hint?: React.ReactNode;
    action?: React.ReactNode;
    actionType?: keyof typeof actionStyles
}

export const Input: FC<IProps> = ({
    label,
    name,
    hint,
    action,
    actionType = 'button',
    className,
    ...props

}) => {

    const { formState, getValues, register } = useFormContext() ?? {};
    let hasValue = props.value;
    let error;
    let reg = {}

    if (name) {
        hasValue = getValues(name!);
        error = get(formState.errors, name)?.message as string | undefined;
        reg = register(name as string)
    }

    return <div className={clsx(styles.wrapper, className)}>
        {
            label && <label className={styles.label}>
                {label}
            </label>
        }
        <div className={clsx(styles.inputWrapper, props.disabled && styles.inputWrapperDisabled)}>
            <input
                type="text"
                className={styles.input}
                {...reg}
                {...props}
                {...props}
            />
            {action && <div className={clsx(styles.action, actionStyles[actionType])}>
                {action}
            </div>}
        </div>
        {hint && <div className={styles.hint}>{hint}</div>}
    </div>
}

export const PhoneInput: FC<IProps> = ({ label, name, className, ...props }) => {

    const { formState, getValues } = useFormContext();
    const value = getValues(name!);
    const { field } = useController({
        name: name as string,
    })

    const {
        inputValue,
        handlePhoneValueChange,
        inputRef,
    } = usePhoneInput({
        defaultCountry: 'ru',
        value,
        onChange: ({ phone }) => {
            field.onChange(phone)
        },
    });

    const hasValue = inputValue;
    const error = get(formState.errors, name)?.message as string | undefined;


    return <div className={clsx(styles.wrapper, className)}>
        {
            label && <label className={styles.label}>
                {label}
            </label>
        }
        <div className={clsx(styles.inputWrapper, props.disabled && styles.inputWrapperDisabled)}>
            <input
                type="text"
                className={styles.input}
                {...props}
                ref={mergeRefs(inputRef, field.ref)}
                value={inputValue}
                onChange={handlePhoneValueChange}
            />
        </div>
    </div>
}
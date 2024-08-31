'use client'

import { FC, HTMLAttributes, useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx';
import Image from 'next/image'



interface IProps extends HTMLAttributes<HTMLDivElement> {
}

export const PaymentMethods: FC<IProps> = ({ ...props }) => {
    const [activeMethod, setActiveMethod] = useState(0);
    const methods = [
        {
            title: 'Эфириум',
            icon: '/images/ethereum.png',
        },
        {
            title: 'Биткойн',
            icon: '/images/bitcoin.png',
        },
        {
            title: 'Монero',
            icon: '/images/monero.png',
        },
        {
            title: 'Эфириум',
            icon: '/images/ethereum.png',
        },
        {
            title: 'Биткойн',
            icon: '/images/bitcoin.png',
        },
        {
            title: 'Монero',
            icon: '/images/monero.png',
        },
    ]
    return <div className={styles.wrapper}>
        {
            <div className={styles.label}>Введите сумму вывода</div>
        }
        <div className={styles.methods}>
            {
                methods.map((method, index) => {
                    return <div key={index}
                        className={clsx(styles.method, activeMethod === index && styles.methodActive)}
                        onClick={() => setActiveMethod(index)}
                    >
                        <Image
                            src={method.icon}
                            alt=''
                            width={100}
                            height={50}
                        />
                    </div>
                })
            }
        </div>
    </div>
}
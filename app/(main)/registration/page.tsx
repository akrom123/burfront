'use client'

import { Heading } from '@/components/Heading';
import styles from './styles.module.scss';
import { RegistrationForm } from '@/components/RegistrationForm';
export default function Page() {
    return <div className={styles.registration}>
        <Heading level={1} className={styles.registrationHeading}>Registration</Heading>
        <RegistrationForm />
    </div>
}
'use client'

import { FC, useEffect, useState } from "react"
import Link from 'next/link'
import styles from './styles.module.scss'
import { LangSwitcher } from "./LangSwitcher"
import { Logo } from "../Logo"
import { Button } from "../Button"
import { Icon } from "../Icon"
import { useMediaQuery } from "@/hooks"
import { Footer } from "../Footer"


export const Header: FC = () => {
    const { isXS } = useMediaQuery()
    const [loggedIn, setLoggedIn] = useState(false)
    const [isInitialized, setIsInitialized] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsInitialized(true)
    }, [])

    if (!isInitialized) return null

    const nav = <nav className={styles.headerNav}>
        <Link href="/" className={styles.headerNavItem}>Game</Link>
        <Link href="/" className={styles.headerNavItem}>Sports</Link>
        <Link href="/" className={styles.headerNavItem}>Contacts</Link>
        <Link href="/" className={styles.headerNavItem}>Help</Link>
        <Link href="/" className={styles.headerNavItem}>Promocode</Link>
    </nav>

    const header = <header className={styles.header}>
        <div className={styles.headerLeft}>
            {isXS && <Icon
                name={isOpen ? 'close' : 'burger'}
                size={isOpen ? 18 : 26}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.headerBurger}
            />}
            <Logo className={styles.headerLogo} />
            {
                !isXS && nav
            }
        </div>
        {
            (isOpen || !isXS) && <LangSwitcher />
        }
        {
            !isOpen && <>
                {
                    loggedIn ? <>
                        <Balance />
                        <Button icon={<Icon name="user-duotone" size={isXS ? 20 : 30} />} variant="secondary" onClick={() => setLoggedIn(false)} />
                    </> : <>
                        {!isXS && <Button>JOIN NOW</Button>}
                        <Button icon={<Icon name="login" size={21} />} variant="secondary" onClick={() => setLoggedIn(true)} />
                    </>
                }
            </>
        }
    </header>

    if (!isOpen || !isXS) {
        return header
    }

    if (isOpen && isXS) {
        return <div className={styles.headerMobile}>
            {header}
            <div className={styles.headerMobileContent}>
                {nav}
                <div className={styles.headerMobileButtons}>
                    <Button>JOIN NOW</Button>
                    <Button variant="secondary">Log in</Button>
                </div>
            </div>
            <Footer copyright={false} />
        </div>
    }
}

const Balance = () => {
    return <div className={styles.headerBalance}>
        <div className={styles.headerBalanceIcon} />
        <span>$1757.44</span>
        <div className={styles.headerBalanceButton}></div>
    </div>
}
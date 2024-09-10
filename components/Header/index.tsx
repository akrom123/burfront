'use client'

import { FC, useEffect, useState } from "react"
import styles from './styles.module.scss'
import { LangSwitcher } from "./LangSwitcher"
import { Logo } from "../ui/Logo"
import { Button } from "../ui/Button"
import { Icon } from "../ui/Icon"
import { useMediaQuery } from "@/hooks"
import { Footer } from "../Footer"
import { usePathname } from "next/navigation"
import { ActiveLink } from "../ui/ActiveLink"
import Link from "next/link"
import { Profile } from "./Profile"


export const Header: FC = () => {
    const { isXS } = useMediaQuery()
    const [loggedIn, setLoggedIn] = useState(false)
    const pathname = usePathname()
    const [isInitialized, setIsInitialized] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        setIsInitialized(true)
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    if (!isInitialized) return null

    const nav = <nav className={styles.headerNav}>
        <ActiveLink href="/game" className={styles.headerNavItem} activeClassName={styles.headerNavItemActive}>Game</ActiveLink>
        <ActiveLink href="/sport" className={styles.headerNavItem} activeClassName={styles.headerNavItemActive}>Sports</ActiveLink>
        <ActiveLink href="/contacts" className={styles.headerNavItem} activeClassName={styles.headerNavItemActive}>Contacts</ActiveLink>
        <ActiveLink href="/help" className={styles.headerNavItem} activeClassName={styles.headerNavItemActive}>Help</ActiveLink>
        <ActiveLink href="/promo" className={styles.headerNavItem} activeClassName={styles.headerNavItemActive}>Promocode</ActiveLink>
    </nav>

    const header = <header className={styles.header}>
        <div className={styles.headerLeft}>
            {isXS && <Icon
                name={isOpen ? 'close' : 'burger'}
                size={isOpen ? 18 : 26}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.headerBurger}
            />}
            <Link href="/" className={styles.headerLogo}>
                <Logo />
            </Link>
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
                        <Profile/>
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
    return <Link href={'/deposit'} className={styles.headerBalance}>
        <div className={styles.headerBalanceIcon} />
        <span>$1757.44</span>
        <div className={styles.headerBalanceButton} />
    </Link>
}
'use client'

import { FC, useEffect, useState } from "react"
import styles from './styles.module.scss'
import { LangSwitcher } from "./LangSwitcher"
import { Logo } from "../ui/Logo"
import { Button } from "../ui/Button"
import { Icon } from "../ui/Icon"
import { useMediaQuery } from "@/hooks"
import { Footer } from "../Footer"
import { usePathname, useRouter } from "next/navigation"
import { ActiveLink } from "../ui/ActiveLink"
import Link from "next/link"
import { Profile } from "./Profile"
import { useStores } from "@/contexts"
import { observer } from "mobx-react-lite"


export const Header: FC = observer(() => {
    const { isXS } = useMediaQuery()
    const pathname = usePathname()
    const router = useRouter()
    const [isInitialized, setIsInitialized] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const { appStore } = useStores()

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
                    appStore.isLoggedIn ? <>
                        <Balance />
                        <Profile />
                    </> : <>
                        {!isXS && <Button onClick={() => router.push('/registration')}>JOIN NOW</Button>}
                        <Button icon={<Icon name="login" size={21} />} variant="secondary" onClick={() => appStore.toggleModal('auth', true)} />
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
                    <Button onClick={() => {
                        isXS ? appStore.toggleModal('registration', true) : router.push('/registration')
                    }}>JOIN NOW</Button>
                    <Button variant="secondary" onClick={() => appStore.toggleModal('auth', true)}>Log in</Button>
                </div>
            </div>
            <Footer copyright={false} />
        </div>
    }
})

const Balance = () => {
    return <Link href={'/deposit'} className={styles.headerBalance}>
        <div className={styles.headerBalanceIcon} />
        <span>$1757.44</span>
        <div className={styles.headerBalanceButton} />
    </Link>
}
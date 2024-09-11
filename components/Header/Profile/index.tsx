import { Button } from "@/components/ui/Button"
import { Icon } from "@/components/ui/Icon"
import { Stack } from "@/components/ui/Stack"
import { useMediaQuery } from "@/hooks"
import styles from '../styles.module.scss'
import { useRouter } from "next/navigation"
import { useState } from "react"
import ClickAwayListener from "react-click-away-listener"
import clsx from "clsx"
import { ActiveLink } from "@/components/ui/ActiveLink"
import { useStores } from "@/contexts"


export const Profile = () => {
    const router = useRouter()
    const [isOpen, setIsOpen] = useState
        (false)
    const { isXS } = useMediaQuery()
    const { appStore } = useStores()

    return <ClickAwayListener onClickAway={() => setIsOpen(false)}>
        <div className={styles.headerProfile}>
            <Stack spacing={10} alignItems="center">
                <Button
                    icon={<Icon name="user-duotone" size={isXS ? 20 : 30} />}
                    variant="secondary"
                    onClick={() => router.push('/profile')}
                />
                {
                    !isXS &&
                    <Icon
                        name="arrow-down"
                        size={18}
                        className={styles.headerProfileArrow}
                        rotate={isOpen ? 180 : 0}
                        onClick={() => setIsOpen(!isOpen)}
                    />
                }
            </Stack>
            {
                isOpen && !isXS && <div className={styles.headerProfileDropdown}>
                    <div className={styles.headerProfileNav}>
                        <div className={clsx(styles.headerProfileNavItem, styles.headerProfileProfile)}>
                            <div className={styles.headerProfileNavItemText}>
                                <div className={styles.headerProfileProfileIcon}>
                                    <Icon name="user-duotone" size={23} />
                                </div>
                                <span>Иван Иванов</span>
                            </div>
                        </div>
                        <ActiveLink href="/profile" className={styles.headerProfileNavItem} activeClassName={styles.headerProfileNavItemActive}>
                            <div className={styles.headerProfileNavItemIcon}>
                                <Icon name="location" size={18} />
                            </div>
                            <div className={styles.headerProfileNavItemText}>Мой профиль</div>
                            <Icon name="arrow-down" className={styles.headerProfileNavItemArrow} rotate={270} size={12} />
                        </ActiveLink>
                        <ActiveLink href="/deposit" className={styles.headerProfileNavItem} activeClassName={styles.headerProfileNavItemActive}>
                            <div className={styles.headerProfileNavItemIcon}>
                                <Icon name="cash" size={20} />
                            </div>
                            <div className={styles.headerProfileNavItemText}>Пополнить баланс</div>
                            <Icon name="arrow-down" className={styles.headerProfileNavItemArrow} rotate={270} size={12} />
                        </ActiveLink>
                    </div>
                    <Button variant="outline" onClick={() => appStore.setLoggedIn(false)}>Выйти</Button>
                </div>
            }
        </div>
    </ClickAwayListener>
}
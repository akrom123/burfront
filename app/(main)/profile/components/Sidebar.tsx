'use client'

import styles from './Sidebar.module.scss';
import { Icon } from "@/components/ui/Icon";
import clsx from "clsx";
import { Button } from "@/components/ui/Button";
import { ActiveLink } from "@/components/ui/ActiveLink";
import { useMediaQuery } from "@/hooks";
import { useStores } from "@/contexts";
import { useState } from "react";
import { Notifications } from '@/components/Notifications';

export const Sidebar = () => {
    const { isXS } = useMediaQuery()
    const { appStore } = useStores();
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    return (
        <div className={styles.sidebar}>
            <div className={styles.sidebarNav}>
                <div className={clsx(styles.sidebarNavItem, styles.sidebarNavItemProfile)}>
                    <div className={styles.sidebarNavItemText}>
                        <div className={styles.sidebarProfileIcon}>
                            <Icon name="user-duotone" size={23} />
                        </div>
                        <span>Иван Иванов</span>
                    </div>
                    <Icon
                        name="notification"
                        className={styles.sidebarNavItemBell}
                        size={24}
                        onClick={() => setNotificationsOpen(!notificationsOpen)}
                    />
                </div>
                <ActiveLink href="/profile" className={styles.sidebarNavItem} activeClassName={styles.sidebarNavItemActive}>
                    <div className={styles.sidebarNavItemIcon}>
                        <Icon name="location" size={18} />
                    </div>
                    <div className={styles.sidebarNavItemText}>Мой профиль</div>
                    <Icon name="arrow-down" className={styles.sidebarNavItemArrow} rotate={270} size={12} />
                </ActiveLink>
                <ActiveLink href="/profile/balance" className={styles.sidebarNavItem} activeClassName={styles.sidebarNavItemActive}>
                    <div className={styles.sidebarNavItemIcon}>
                        <Icon name="layers" size={18} />
                    </div>
                    <div className={styles.sidebarNavItemText}>Счёт и платежи</div>
                    <Icon name="arrow-down" className={styles.sidebarNavItemArrow} rotate={270} size={12} />
                </ActiveLink>
                <ActiveLink href="/profile/bets" className={styles.sidebarNavItem} activeClassName={styles.sidebarNavItemActive}>
                    <div className={styles.sidebarNavItemIcon}>
                        <Icon name="clock" size={24} />
                    </div>
                    <div className={styles.sidebarNavItemText}>История ставок</div>
                    <Icon name="arrow-down" className={styles.sidebarNavItemArrow} rotate={270} size={12} />
                </ActiveLink>
                {/* <ActiveLink href="/profile/responsible" className={styles.sidebarNavItem} activeClassName={styles.sidebarNavItemActive}>
                    <div className={styles.sidebarNavItemIcon}>
                        <Icon name="lock" size={16} />
                    </div>
                    <div className={styles.sidebarNavItemText}>Ответственная игра</div>
                    <Icon name="arrow-down" className={styles.sidebarNavItemArrow} rotate={270} size={12} />
                </ActiveLink> */}
                <ActiveLink href="/profile/vip" className={styles.sidebarNavItem} activeClassName={styles.sidebarNavItemActive}>
                    <div className={styles.sidebarNavItemIcon}>
                        <Icon name="diamond" size={20} />
                    </div>
                    <div className={styles.sidebarNavItemText}>VIP</div>
                    <Icon name="arrow-down" className={styles.sidebarNavItemArrow} rotate={270} size={12} />
                </ActiveLink>
                <ActiveLink href="/profile/partners" className={styles.sidebarNavItem} activeClassName={styles.sidebarNavItemActive}>
                    <div className={styles.sidebarNavItemIcon}>
                        <Icon name="chat" size={18} />
                    </div>
                    <div className={styles.sidebarNavItemText}>Партнерская программа</div>
                    <Icon name="arrow-down" className={styles.sidebarNavItemArrow} rotate={270} size={12} />
                </ActiveLink>
            </div>

            {!isXS && <Button variant="outline" onClick={() => appStore.setLoggedIn(false)}>Выйти</Button>}
            {!isXS && notificationsOpen && <Notifications
                className={styles.sidebarNotifications}
                onClose={() => setNotificationsOpen(false)}
            />}
        </div>
    );
}

import Link from 'next/link';
import { Icon } from '../ui/Icon';
import { Logo } from '../ui/Logo';
import styles from './styles.module.scss';
import { FC } from 'react';

interface IProps {
    copyright?: boolean
}

export const Footer: FC<IProps> = ({ copyright = true }) => {
    return <footer className={styles.footer}>
        <div className={styles.footerTop}>
            {
                copyright && <div className={styles.footerTopLeft}>
                    <Link href="/">
                        <Logo />
                    </Link>
                    <div className={styles.footerCopyright}>© 2024</div>
                    <div className={styles.footerAge}>18+</div>
                </div>
            }
            <div className={styles.footerTopRight}>
                <div className={styles.footerLinks}>
                    <a href="/" className={styles.footerLink}>support@namesite.com</a>
                    <a href="/" className={styles.footerLink}>8 (800) 555-35-35</a>
                </div>
                <div className={styles.footerButtons}>
                    <a href="/" className={styles.footerButton}>
                        <Icon name="telegram" />
                        <span>Telegram</span>
                    </a>
                    <a href="/" className={styles.footerButton}>
                        <Icon name="vk" />
                        <span>ВКонтакте</span>
                    </a>
                </div>
            </div>
        </div>
        <div className={styles.footerBottom}>
            <nav className={styles.footerNav}>
                <Link href="/" className={styles.footerNavItem}>Game</Link>
                <Link href="/" className={styles.footerNavItem}>Sports</Link>
                <Link href="/" className={styles.footerNavItem}>Contacts</Link>
                <Link href="/" className={styles.footerNavItem}>Help</Link>
                <Link href="/" className={styles.footerNavItem}>Promocode</Link>
            </nav>
            <div className={styles.footerLink}>{"Bookmaker's official documents"}</div>
        </div>
    </footer>
}
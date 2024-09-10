import { Heading } from "@/components/Heading";
import styles from './styles.module.scss'
import { Icon } from "@/components/ui/Icon";
import clsx from "clsx";

export default function Page() {
  return (
    <>
      <div className="container">
        <Heading level={1}>Contacts</Heading>
        <div className={styles.contacts}>
          <div className={clsx(styles.contactsCard, styles.contactsCardYellow)}>
            <div className={styles.contactsCardTitle}>Name Site ltd</div>
            <div>Lorem ipsum dolor sit amet consectetur. Nisl viverra eget facilisi orci facilisis hendrerit rhoncus ullamcorper. Id orci fermentum vel eros nibh pulvinar gravida commodo. Luctus id ut ut morbi id ullamcorper aliquam massa pulvinar. Augue scelerisque est eu in metus neque aliquam sit. Sed.</div>
            <div>
              Russian Federation, Moscow city, <br />
              Pushkina str, 17. Office 174, 420133
            </div>
          </div>
          <div className={styles.contactsTelegram}>
            <div className={clsx(styles.contactsCard, styles.contactsCardTelegram1)}>
              <Icon name="telegram" size={44} />
              <div className={styles.contactsCardLink}>Telegram Channel</div>
            </div>
            <div className={clsx(styles.contactsCard, styles.contactsCardTelegram2)}>
              <Icon name="telegram" size={44} />
              <div className={styles.contactsCardLink}>Telegram Support</div>
            </div>
          </div>
          <div className={clsx(styles.contactsCard, styles.contactsCardEmail)}>
            <div className={styles.contactsCardTitle}>Name Site ltd</div>
            <div className={styles.contactsCardBtn}>info@site.com</div>
          </div>
        </div>
      </div >
    </>
  );
}

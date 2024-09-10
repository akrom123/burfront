import { Heading } from "@/components/Heading";
import styles from './styles.module.scss'
import { Collapse } from "@/components/ui/Collapse";
import { Icon } from "@/components/ui/Icon";
import clsx from "clsx";


export default function Page() {
  return (
    <>
      <div className="container">
        <Heading level={1}>Help center</Heading>
        <div className={styles.helpContainer}>
          <div className={styles.helpSidebar}>
            <div className={styles.helpCategories}>
              <div className={styles.helpCategory}>
                <div className={styles.helpCategoryText}>Общие вопросы</div>
                <Icon name="arrow-down" className={styles.helpCategoryArrow} rotate={270} size={12} />
              </div>
              <div className={styles.helpCategory}>
                <div className={styles.helpCategoryText}>Общие вопросы</div>
                <Icon name="arrow-down" className={styles.helpCategoryArrow} rotate={270} size={12} />
              </div>
              <div className={clsx(styles.helpCategory, styles.helpCategoryActive)}>
                <div className={styles.helpCategoryText}>Общие вопросы</div>
                <Icon name="arrow-down" className={styles.helpCategoryArrow} rotate={270} size={12} />
              </div>
              <div className={styles.helpCategory}>
                <div className={styles.helpCategoryText}>Общие вопросы</div>
                <Icon name="arrow-down" className={styles.helpCategoryArrow} rotate={270} size={12} />
              </div>
              <div className={styles.helpCategory}>
                <div className={styles.helpCategoryText}>Общие вопросы</div>
                <Icon name="arrow-down" className={styles.helpCategoryArrow} rotate={270} size={12} />
              </div>
            </div>
          </div>
          <div className={styles.helpContent}>
            <div className={styles.helpGroup}>
              <div className={styles.helpGroupTitle}>Название категории</div>
              <Collapse title={'How to complete verification'}>
                <p>
                  If you are just starting to place bets or use the site, then initial verification status will be enough. Initial status has lower limits than full status accounts, but the entire procedure can be completed at home. Verification with a verified Public Services account or passport data takes several minutes.
                </p>
                <p>
                  If you are going to place large bets, then complete verification in a Fonbet betting shop or Contact store. This will provide you with the maximum limits. To do this, you will need to visit Fonbet betting shop or Contact store.
                </p>
              </Collapse>
              <Collapse title={'How to complete verification'}>
                <p>
                  If you are just starting to place bets or use the site, then initial verification status will be enough. Initial status has lower limits than full status accounts, but the entire procedure can be completed at home. Verification with a verified Public Services account or passport data takes several minutes.
                </p>
                <p>
                  If you are going to place large bets, then complete verification in a Fonbet betting shop or Contact store. This will provide you with the maximum limits. To do this, you will need to visit Fonbet betting shop or Contact store.
                </p>
              </Collapse>
              <Collapse title={'How to complete verification'}>
                <p>
                  If you are just starting to place bets or use the site, then initial verification status will be enough. Initial status has lower limits than full status accounts, but the entire procedure can be completed at home. Verification with a verified Public Services account or passport data takes several minutes.
                </p>
                <p>
                  If you are going to place large bets, then complete verification in a Fonbet betting shop or Contact store. This will provide you with the maximum limits. To do this, you will need to visit Fonbet betting shop or Contact store.
                </p>
              </Collapse>
              <Collapse title={'How to complete verification'}>
                <p>
                  If you are just starting to place bets or use the site, then initial verification status will be enough. Initial status has lower limits than full status accounts, but the entire procedure can be completed at home. Verification with a verified Public Services account or passport data takes several minutes.
                </p>
                <p>
                  If you are going to place large bets, then complete verification in a Fonbet betting shop or Contact store. This will provide you with the maximum limits. To do this, you will need to visit Fonbet betting shop or Contact store.
                </p>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

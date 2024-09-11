import { Heading } from "@/components/Heading";
import styles from './styles.module.scss';
import Image from 'next/image'

export default function Page() {
  return (
    <div className="container">
      <Heading level={1}>Games name</Heading>
      <div className={styles.game}>
        <Image alt="" src="/images/game.jpg" width={1140} height={586} className={styles.gameImage} />
      </div>
    </div>
  );
}

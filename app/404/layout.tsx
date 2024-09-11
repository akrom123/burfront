import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import clsx from "clsx";
import styles from './styles.module.scss';

export default function Layout(props: any) {
    return <div className={clsx('root', styles.root404)}>
        <Header />
        {props.children}
        <Footer />
    </div>

}
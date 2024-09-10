import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Layout(props: any) {
    return <>
        <Header />
        {props.children}
        <Footer />
    </>

}
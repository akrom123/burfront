import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export default function Layout(props: any) {
    return <div className="root">
        <Header />
        {props.children}
        <Footer />
    </div>

}
import Header from "../components/header";
import Footer from "../components/footer";

export default function BaseLayout({children}) {
    return (
        <>
            <Header/>
                 {children}
            <Footer/>
        </>
    )
}
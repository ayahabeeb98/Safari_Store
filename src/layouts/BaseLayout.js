import Footer from "../components/footer";
import Navbar from "../components/Navbar";

export default function BaseLayout({children}) {
    return (
        <>
            <Navbar/>
                 {children}
            <Footer/>
        </>
    )
}
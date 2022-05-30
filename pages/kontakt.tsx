import {NextPage} from "next";
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {ThemeProvider} from "@mui/material/styles";
import {ContactHero} from "../components/pages/ContactHero";
import {Contact} from "../components/pages/Contact";
import {Footer} from "../components/pages/Footer";

const ContactPage: NextPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <HtmlHead
                title={'Zdalne Korki - Kontakt'}
                description={'Skontaktuj się z nami'}/>
            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <ContactHero/>
                <Contact/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export default ContactPage

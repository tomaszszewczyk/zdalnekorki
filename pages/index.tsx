import type {NextPage} from 'next'
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {Hero} from "../components/pages/Hero";
import {Footer} from "../components/pages/Footer";
import {About} from "../components/pages/About";
import {Pricing} from "../components/pages/Pricing";
import {Referrals} from "../components/pages/Referrals";

const Home: NextPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <HtmlHead
                title={'Zdalne Korki'}
                description={
                    'Prowadzimy zajęcia online dla uczniów szkół podstawowych (klasy 4-8) oraz liceów i techników na poziomie ' +
                    'matury podstawowej. W zależności od Twoich potrzeb możemy pomóc nadrobić Ci zaległości, podciągnąć oceny ' +
                    'lub przygotowywać zadania dodatkowe dla orłów :)'
                }/>
            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <Hero/>
                <About/>
                <Pricing/>
                <Referrals/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}

export default Home

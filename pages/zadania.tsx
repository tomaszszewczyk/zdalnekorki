import {NextPage} from "next";
import {ThemeProvider} from "@mui/material/styles";
import {theme} from "../theme/theme";
import {HtmlHead} from "../components/meta/HtmlHead";
import {SkipLink} from "../components/navigation/SkipLink";
import {Navbar} from "../components/navigation/Navbar";
import {Footer} from "../components/pages/Footer";
import {Tasks} from "../components/pages/Tasks";
import {TasksHero} from "../components/pages/TasksHero";

const TasksPage: NextPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <HtmlHead
                title={'Zdalne Korki'}
                description={'Sprawdź nasze zadania z rozwiązaniami online'}/>
            <SkipLink/>
            <Navbar/>
            <main id={'main'}>
                <TasksHero/>
                <Tasks/>
            </main>
            <Footer/>
        </ThemeProvider>
    )
}



export default TasksPage

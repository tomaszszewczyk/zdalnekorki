import {Box, Card, Container, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {FC, ReactNode} from "react";

interface Task {
    title: string
    author: string
    date: string
    src: string
    body: string
}

const Task: FC<Task> = (props) => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('lg'))

    return (
        <Card sx={{p: small ? '16px' : '48px'}}>
            <Grid container spacing={small ? '8px' : '32px'}>
                <Grid item lg={6} md={12}>
                    <Stack height={'100%'} justifyContent={'center'} gap={'10px'}>
                        <Typography variant={'h3'} component={'h2'}>{props.title}</Typography>
                        <Typography variant={'subtitle1'} component={'p'}>{props.author}, {props.date}</Typography>
                    </Stack>
                </Grid>
                <Grid item lg={6} md={12} sx={{p: '16px'}}>
                    <iframe width="100%"
                            height='300px'
                            src={props.src}
                            title={"Odtwarzacz wideo YouTube " + props.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen/>
                </Grid>
                <Grid item lg={12}>
                    <Typography sx={{columnCount: small ? '1' : '2', columnGap: '32px'}}>
                        {props.body}
                    </Typography>
                </Grid>
            </Grid>
        </Card>
    )
}

export const Tasks = () => {
    return (
        <Box pt={'128px'}>
            <Container maxWidth={'xl'}>
                <Stack gap={'32px'}>
                    <Task title={'Procenty, matura 2018, zadanie 4'}
                          author={'Maja Czarnecka'}
                          date={'9.08.20'}
                          src={'https://www.youtube.com/embed/pt3bvZ6GV_I'}
                          body={'Na każdej maturze możesz spodziewać się co najmniej jednego zadania z procentów. Warto ' +
                          'zapamiętać proste schematy na poradzenie sobie z tego typu zadaniami. Najprostsza metodą ' +
                          'na roziwązywania zadań z procentów jest ułożenie proporcji. Z treści zadania wyniknie, co ' +
                          'jest naszą niewiadomą. Czasami będzie to jakiś procent np. ceny, czasami liczba, a czasami ' +
                          'wartość 100%. Przykładowo z treści zadania wynika, że aktualna cena to 850zł i jest to 85% ' +
                          'ceny pierwotnej. Pytanie jest o wysokość ceny począkowej (pierwotnej), a więc o wartość 100%. ' +
                          'Dlatego w naszej propocji przyrównamy do siebie 850zł i 85% oraz 100% i x. Oznaczmy x, jako ' +
                          'liczbę (kwotę), którą chcemy obliczyć. Naztępnie zapisane zgodnie z zasadmi proprocji obliczenia ' +
                          'mnożmy "na krzyż" i uzyskujemy równanie. Jak liczyć równania już wiesz! Dzielimy, mnożymy, ' +
                          'przerzucamy liczby na drugą stronę równania - wszystko w zależności działania, które akurat ' +
                          'liczmy. Naszym celem jest doprowadzenie do sytuacji, w której po jednej stronie znaków ' +
                          '"równa się" będzie stał x, a po drugiej liczba (ew. z jednostakami np. zł, kg, cm itp.). ' +
                          'Jeśli chcesz prześledzić schemat rowiązywania zadań z procentów za pomocą proporcji koniecznie ' +
                          'obejrzyj ten film!'}/>
                    <Task title={'Równania, matura 2015, zadanie 7'}
                          author={'Maja Czarnecka'}
                          date={'9.08.20'}
                          src={'https://www.youtube.com/embed/JgOn5E3PY-E'}
                          body={'Wśród typowych i popularnych zadań maturalnych znajdują się zadania z równań. Aby wykonać takie ' +
                          'zadania należy dysponować podstawową wiedzą z zakresu przekształcania wzorów, korzystania ze ' +
                          'wzorów skróconego mnożenia czy wyciągania liczby przed nawias. W celu uproszczenia równania ' +
                          'będziemy mnożyć je obustronnie przez mianownik jednej z liczb. Wzory skróconego mnożenia ' +
                          'znajdziesz w Karcie Wzorów na stronie 3, a wyciąganie liczy przed nawias polega na usunięciu ' +
                          'z nawiasu elementu, któru pojawia się przy/w obu składnikach sumy, i zapisaniu go przed tym ' +
                          'naiwasem. Rozwiązanie przykładowego zadania obejmującego te zagadnienia znajdziesz w tym filmie!'}/>

                    <Task title={'Nierówności, matura 2018, zadanie 5'}
                          author={'Maja Czarnecka'}
                          date={'9.08.20'}
                          src={'https://www.youtube.com/embed/d0N5rz4zCJo'}
                          body={'Z dużym prawdopodoieństwem na maturze czeka Cię chociaż jedno zadanie z nierówności. Warto ' +
                          'przypomnieć sobie, jak oblicza się tego tyu zadania. Znów korzystać będziemy z obustronnego ' +
                          'dzielenia lub mnożenia. Później porządkujemy nierówność przenosząc na jedną stronę litery ' +
                          '(wraz z ich współczynnikami!), a na druga liczby. Następnie dzielimy lub mnożymy (znów ' +
                          'obustronnie) przez liczbę (czyli współczynnik), który "przeszkadza" nam przy niewiaodmej. ' +
                          'Dlaczego mówimy, że przeszkadza? Bo naszym celem zawsze jest doprowadzenie równania lub ' +
                          'nierówności do takiego stanu, w którym niewiadoma stoi "sama", bez żadnych liczb i minusa przy ' +
                          'niej. Uwaga! Jeśli mnożmy lub dzielimy przez liczbę ujemną, to znak nierówności zmienia ' +
                          'kierunek! Po wykonaniu odpowiednich działań otrzymujemy wynik! Jeśli chcesz przećwiczyć tego ' +
                          'typu zadanie koniecznie obejrzyj ten film!'}/>

                    <Task title={'Funkcja liniowa, miejsce zerowe, matura 2016, zadanie 8'}
                          author={'Maja Czarnecka'}
                          date={'9.08.20'}
                          src={'https://www.youtube.com/embed/5Lp_yM_tMsE'}
                          body={'Na każdej maturze podstawowej z matematyki możecie spodziewać się zadań z funkcji liniowej. ' +
                          'Aby poradzić sobie z tego typu zadaniem musisz najpierw zapamiętać, czym są współrzędne x i y. ' +
                          'Współrzędną x będziemy określać na poziomej linii (oś x) natomiast współrzędną y odczytujemy z ' +
                          'linii pionowej (oś y). Pierwszym krokiem podczas liczenia miejsca zerowego jest przyrówannie ' +
                          'wzoru funkcji do zera - jest to schemat, który warto zapamiętać! Postawienie wspomnianego zera ' +
                          'wynika z tego, że mijesce zerowe zawsze będzie miało wartość y=0. Oznacza to, że jedyną rzeczą, ' +
                          'jaką musimy policzyć w tym zadaniu to x. Po podstawienu zera do równania funkcji musimy wykonać ' +
                          'typowe obliczenia w postacie obustronnego dzielenia lub mnożenia, aby pozbyć się mianowników ' +
                          'i... voila! Miejsce zerowe policzone! Prześledź rozwiązywnaie tego typu zadania na konkretnym ' +
                          'przykładzie razem z moim filmem na YouTube.'}/>
                </Stack>
            </Container>
        </Box>
    )
}

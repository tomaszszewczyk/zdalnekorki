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
                          body={'Na ka??dej maturze mo??esz spodziewa?? si?? co najmniej jednego zadania z procent??w. Warto ' +
                          'zapami??ta?? proste schematy na poradzenie sobie z tego typu zadaniami. Najprostsza metod?? ' +
                          'na roziw??zywania zada?? z procent??w jest u??o??enie proporcji. Z tre??ci zadania wyniknie, co ' +
                          'jest nasz?? niewiadom??. Czasami b??dzie to jaki?? procent np. ceny, czasami liczba, a czasami ' +
                          'warto???? 100%. Przyk??adowo z tre??ci zadania wynika, ??e aktualna cena to 850z?? i jest to 85% ' +
                          'ceny pierwotnej. Pytanie jest o wysoko???? ceny pocz??kowej (pierwotnej), a wi??c o warto???? 100%. ' +
                          'Dlatego w naszej propocji przyr??wnamy do siebie 850z?? i 85% oraz 100% i x. Oznaczmy x, jako ' +
                          'liczb?? (kwot??), kt??r?? chcemy obliczy??. Nazt??pnie zapisane zgodnie z zasadmi proprocji obliczenia ' +
                          'mno??my "na krzy??" i uzyskujemy r??wnanie. Jak liczy?? r??wnania ju?? wiesz! Dzielimy, mno??ymy, ' +
                          'przerzucamy liczby na drug?? stron?? r??wnania - wszystko w zale??no??ci dzia??ania, kt??re akurat ' +
                          'liczmy. Naszym celem jest doprowadzenie do sytuacji, w kt??rej po jednej stronie znak??w ' +
                          '"r??wna si??" b??dzie sta?? x, a po drugiej liczba (ew. z jednostakami np. z??, kg, cm itp.). ' +
                          'Je??li chcesz prze??ledzi?? schemat rowi??zywania zada?? z procent??w za pomoc?? proporcji koniecznie ' +
                          'obejrzyj ten film!'}/>
                    <Task title={'R??wnania, matura 2015, zadanie 7'}
                          author={'Maja Czarnecka'}
                          date={'9.08.20'}
                          src={'https://www.youtube.com/embed/JgOn5E3PY-E'}
                          body={'W??r??d typowych i popularnych zada?? maturalnych znajduj?? si?? zadania z r??wna??. Aby wykona?? takie ' +
                          'zadania nale??y dysponowa?? podstawow?? wiedz?? z zakresu przekszta??cania wzor??w, korzystania ze ' +
                          'wzor??w skr??conego mno??enia czy wyci??gania liczby przed nawias. W celu uproszczenia r??wnania ' +
                          'b??dziemy mno??y?? je obustronnie przez mianownik jednej z liczb. Wzory skr??conego mno??enia ' +
                          'znajdziesz w Karcie Wzor??w na stronie 3, a wyci??ganie liczy przed nawias polega na usuni??ciu ' +
                          'z nawiasu elementu, kt??ru pojawia si?? przy/w obu sk??adnikach sumy, i zapisaniu go przed tym ' +
                          'naiwasem. Rozwi??zanie przyk??adowego zadania obejmuj??cego te zagadnienia znajdziesz w tym filmie!'}/>

                    <Task title={'Nier??wno??ci, matura 2018, zadanie 5'}
                          author={'Maja Czarnecka'}
                          date={'9.08.20'}
                          src={'https://www.youtube.com/embed/d0N5rz4zCJo'}
                          body={'Z du??ym prawdopodoie??stwem na maturze czeka Ci?? chocia?? jedno zadanie z nier??wno??ci. Warto ' +
                          'przypomnie?? sobie, jak oblicza si?? tego tyu zadania. Zn??w korzysta?? b??dziemy z obustronnego ' +
                          'dzielenia lub mno??enia. P????niej porz??dkujemy nier??wno???? przenosz??c na jedn?? stron?? litery ' +
                          '(wraz z ich wsp????czynnikami!), a na druga liczby. Nast??pnie dzielimy lub mno??ymy (zn??w ' +
                          'obustronnie) przez liczb?? (czyli wsp????czynnik), kt??ry "przeszkadza" nam przy niewiaodmej. ' +
                          'Dlaczego m??wimy, ??e przeszkadza? Bo naszym celem zawsze jest doprowadzenie r??wnania lub ' +
                          'nier??wno??ci do takiego stanu, w kt??rym niewiadoma stoi "sama", bez ??adnych liczb i minusa przy ' +
                          'niej. Uwaga! Je??li mno??my lub dzielimy przez liczb?? ujemn??, to znak nier??wno??ci zmienia ' +
                          'kierunek! Po wykonaniu odpowiednich dzia??a?? otrzymujemy wynik! Je??li chcesz prze??wiczy?? tego ' +
                          'typu zadanie koniecznie obejrzyj ten film!'}/>

                    <Task title={'Funkcja liniowa, miejsce zerowe, matura 2016, zadanie 8'}
                          author={'Maja Czarnecka'}
                          date={'9.08.20'}
                          src={'https://www.youtube.com/embed/5Lp_yM_tMsE'}
                          body={'Na ka??dej maturze podstawowej z matematyki mo??ecie spodziewa?? si?? zada?? z funkcji liniowej. ' +
                          'Aby poradzi?? sobie z tego typu zadaniem musisz najpierw zapami??ta??, czym s?? wsp????rz??dne x i y. ' +
                          'Wsp????rz??dn?? x b??dziemy okre??la?? na poziomej linii (o?? x) natomiast wsp????rz??dn?? y odczytujemy z ' +
                          'linii pionowej (o?? y). Pierwszym krokiem podczas liczenia miejsca zerowego jest przyr??wannie ' +
                          'wzoru funkcji do zera - jest to schemat, kt??ry warto zapami??ta??! Postawienie wspomnianego zera ' +
                          'wynika z tego, ??e mijesce zerowe zawsze b??dzie mia??o warto???? y=0. Oznacza to, ??e jedyn?? rzecz??, ' +
                          'jak?? musimy policzy?? w tym zadaniu to x. Po podstawienu zera do r??wnania funkcji musimy wykona?? ' +
                          'typowe obliczenia w postacie obustronnego dzielenia lub mno??enia, aby pozby?? si?? mianownik??w ' +
                          'i... voila! Miejsce zerowe policzone! Prze??led?? rozwi??zywnaie tego typu zadania na konkretnym ' +
                          'przyk??adzie razem z moim filmem na YouTube.'}/>
                </Stack>
            </Container>
        </Box>
    )
}

import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {FC} from "react";

interface SectionProps {
    title: string
    body: string
}

const Section: FC<SectionProps> = ({title, body}) => {
    return (
        <Grid container spacing={'32px'}>
            <Grid item lg={5}>
                <Typography component='h2' variant={'h4'}>{title}</Typography>
            </Grid>
            <Grid item lg={7}>
                <Typography variant={'body1'}>{body}</Typography>
            </Grid>
        </Grid>
    )
}

export const About = () => {
    return (
        <Box pt={'100px'}>
            <Container maxWidth={'xl'}>
                <Stack gap={'64px'}>
                    <Section
                        title={'Kim jesteśmy?'}
                        body={'Jesteśmy grupą młodych ludzi, którzy uwielbiają pomagać w nauce matematyki młodszym ' +
                        'kolegom. Formą naszych zajęć i atmosferą na nich panującą, chcemy pokazać, że matma może ' +
                        'być fajna, interesująca i satysfakcjonująca! Jako studenci kierunków technicznych oraz ' +
                        'niedawni absolwenci liceów i techników pamiętamy, co sprawiało nam największe trudności ' +
                        'w nauce matmy. Teraz już wiemy, jak poradzić sobie z tymi trudnościami i chętnie podzielimy ' +
                        'się naszym doświadczeniem z Wami!'}
                    />
                    <Section
                        title={'Dla kogo prowadzimy zajęcia?'}
                        body={'Prowadzimy zajęcia online dla uczniów szkół podstawowych (klasy 4-8) oraz liceów i ' +
                        'techników na poziomie matury podstawowej. W zależności od Twoich potrzeb możemy pomóc nadrobić ' +
                        'Ci zaległości, podciągnąć oceny lub przygotowywać zadania dodatkowe dla orłów :)'}
                    />
                    <Section
                        title={'Kiedy zapisać się na Zdalne Korki?'}
                        body={'Każdy moment jest dobry! Jeśli widzisz nawarstwiające się problemy w środku roku ' +
                        'szkolnego, jeśli chcesz poprawić oceny w ostatnim miesiącu semestru, jeśli chcesz utrwalić ' +
                        'wiadomości z poprzedniej klasy w czasie wakacji – jesteśmy dla Ciebie o każdej porze roku, ' +
                        'w każdym miesiącu i każdej porze dnia! '}
                    />
                </Stack>
            </Container>
        </Box>
    )
}

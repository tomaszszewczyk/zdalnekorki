import {Box, Card, Container, Stack, Typography} from "@mui/material";
import {FC} from "react";

interface ReferralCardProps {
    text: string
    author: string
}

const ReferralCard: FC<ReferralCardProps> = ({text, author}) => {
    return (
        <Card sx={{minHeight: '100%', maxWidth: '350px', p: '32px'}}>
            <Stack gap={'16px'} height={'100%'} justifyContent={'space-between'}>
                <Typography>
                    {text}
                </Typography>
                <Typography variant={'subtitle2'} alignSelf={'flex-end'}>
                    {author}
                </Typography>
            </Stack>
        </Card>
    )
}

export const Referrals = () => {
    return (
        <Box pt={'128px'} id={'opinie'}>
            <Container maxWidth={'xl'}>
                <Typography variant={'h2'} pb={'64px'}>Opinie</Typography>
                <Stack gap={'32px'}>
                    <Stack direction={'row'} justifyContent={'center'} flexWrap={'wrap'} gap={'32px'}>
                        <ReferralCard
                            author={'Zosia, klasa XVIII'}
                            text={'Zajęcia sprawiły, że przestałam bać się matematyki na nawet ją polubiłam. ' +
                            'Do testów po ósmej klasie podeszłam bez stresu!'}
                        />
                        <ReferralCard
                            author={'Krzysztof, klasa maturalna'}
                            text={'Czuję się dobrze przygotowany do matury. W rok udało nam się powtórzyć ' +
                            'cały materiał z liceum i nadrobić zaległości.'}
                        />
                        <ReferralCard
                            author={'Ania, klasa II liceum'}
                            text={'Atmosfera na zajęciach jest świetna! Moja nauczycielka zawsze stara się tłumaczyć ' +
                            'zadania na prostych przykładach z życia codziennego. Czasami bywa to banalne, ale działa!'}
                        />
                    </Stack>
                    <Stack direction={'row'} justifyContent={'center'} flexWrap={'wrap'} gap={'32px'}>
                        <ReferralCard
                            author={'Mama Janka z V klasy'}
                            text={'Zastanawialiśmy się, czy zdalne zajęcia dla dziecka w V klasie to dobry pomysł, ' +
                            'ale teraz jesteśmy pewni, że w Zdalnych Korkach to strzał w dziesiątkę! Nasz nauczyciel ' +
                            'potrafi skupić uwagę naszego syna, zainteresować go matematyką i przygotować dla niego ' +
                            'takie zadania, że Janek chętnie je wykonuje. Kto by nie chciał policzyć ile monet więcej ' +
                            'zebrał Mario niż Luigi?'}
                        />
                        <ReferralCard
                            author={'Kasia, klasa I liceum'}
                            text={'Postanowiłam zapisać się na korepetycje, żeby utrwalać bieżący materiał. Na ' +
                            'zajęciach jest bardzo miło i przyznam, że z przyjemnością biorę w nich udział. Jeśli ' +
                            'nauczyciel zauważy braki z poprzednich klas, to od razu to nadrabiamy. Fajne jest to, ' +
                            'że to ode mnie zależy, czy dostaję zadania domowe, czy nie. Nie ma żadnej spiny i presji ' +
                            '– po prostu bawimy się matmą!'}
                        />
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/system";
import Image from 'next/image.js'
import heroPicture from '../../public/img/zadania-hero.png'

const Slogan = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Typography variant={'h1'} minWidth={small ? 0 : 410}>
            Zbiór zadań
        </Typography>
    )
}

const Comment = () => {
    return (
        <Typography component={'p'} variant={'subtitle1'}>
            Sprawdź nasze zadania z rozwiązaniami online
        </Typography>
    )
}

const Picture = () => {
    return (
        <Box flexShrink={0}>
            <Image src={heroPicture} alt={'Dziewczyna pracująca na komputerze'}/>
        </Box>
    )
}

export const TasksHero = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Container maxWidth={'xl'}>
            <Stack pt='50px' direction={small ? 'column' : 'row'} alignItems={'center'} gap={'32px'}>
                <Stack gap={'12px'} order={2} flex={1}>
                    <Slogan/>
                    <Comment/>
                </Stack>

                <Box order={small ? 1 : 3} flex={1}>
                    <Picture/>
                </Box>
            </Stack>
        </Container>
    )
}

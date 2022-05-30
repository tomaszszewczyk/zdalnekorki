import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/system";
import Image from 'next/image.js'
import heroPicture from '../../public/img/hero.png'
import {ButtonLink} from "../navigation/ButtonLink";

const Slogan = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Typography variant={'h1'} minWidth={small ? 0 : 410}>
            Zdalne Korki
        </Typography>
    )
}

const Comment = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Typography variant={'subtitle1'} component='p' minWidth={small ? 0 : 410}>
            Matma to dla Ciebie problem? Boisz się że nie zdasz matury? <br/>
            Z moimi korepetycjami uda Ci się rozwiązać każde zadanie. Komfortowo z domu :)
        </Typography>
    )
}

const CTA = () => {
    return (
        <Box>
            <ButtonLink href={'/kontakt#contact-form'} variant={'contained'}>
                Zapisz się!
            </ButtonLink>
        </Box>
    )
}

const Picture = () => {
    return (
        <Box flexShrink={0} sx={{}}>
            <Image src={heroPicture} alt={'Dziewczyna pracująca na komputerze'}/>
        </Box>
    )
}

export const Hero = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Container maxWidth={'xl'}>
            <Stack pt='50px' direction={small ? 'column' : 'row'} alignItems={'center'} gap={'32px'}>
                <Stack gap={'12px'} order={2} flex={1} alignItems={'flex-start'}>
                    <Slogan/>
                    <Comment/>
                    <Stack alignItems={'flex-start'} pt={'32px'}>
                        <CTA/>
                    </Stack>
                </Stack>

                <Box order={small ? 1 : 3} flex={1}>
                    <Picture/>
                </Box>
            </Stack>
        </Container>
    )
}

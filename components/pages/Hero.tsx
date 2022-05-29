import {Container, Stack, Typography, useMediaQuery} from "@mui/material";
import {Box, useTheme} from "@mui/system";
import Image from 'next/image.js'
import heroPicture from '../../public/img/hero.svg'
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
    return (
        <Typography component={'p'} variant={'subtitle1'}>
            Z nami zdasz!
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
        <Box flexShrink={0}
             sx={{}}
        >
            <Image src={heroPicture} alt={'Stanowsko pracy księgowego'}/>
        </Box>
    )
}

export const Hero = () => {
    const theme = useTheme()
    const small = useMediaQuery(theme.breakpoints.down('md'))

    return (
        <Container maxWidth={'xl'}>
            <Stack pt='150px' direction={small ? 'column' : 'row'} alignItems={'center'} gap={small ? '32px' : '0'}>
                <Stack gap={'32px'} order={2} flex={1}>
                    <Slogan/>
                    <Comment/>
                    <CTA/>
                </Stack>

                <Box order={small ? 1 : 3} flex={1}>
                    <Picture/>
                </Box>
            </Stack>
        </Container>
    )
}

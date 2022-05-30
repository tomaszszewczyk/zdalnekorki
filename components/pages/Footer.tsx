import {Box, Container, Grid, Stack, Typography} from "@mui/material";
import {footerTheme, primaryColor} from "../../theme/theme";
import {ThemeProvider} from "@mui/material/styles";
import {ImageLink} from "../navigation/ImageLink";
import logo from '../../public/img/logo_white.svg'

const Contents = () => {
    return (
        <Stack gap={'64px'}>
            <Grid container justifyContent={'center'} spacing={'8px'} alignItems={'center'}>
                <Grid item>
                    <Typography sx={{textAlign: 'center'}}>
                        Zaprojektowane i wdrożone przez
                    </Typography>
                </Grid>
                <Grid item>
                    <ImageLink label={'Przejdź na stronę bluesBrackets'} src={logo} alt={'Blues Brackets logo'}
                               url={'https://bluesbrackets.com'}/>
                </Grid>
            </Grid>
        </Stack>
    )
}

export const Footer = () => {
    return (
        <Box bgcolor={primaryColor}>
            <Container maxWidth={'xl'} sx={{mt: '100px', pt: '72px', pb: '64px'}}>
                <ThemeProvider theme={footerTheme}>
                    <Contents/>
                </ThemeProvider>
            </Container>
        </Box>
    )
}
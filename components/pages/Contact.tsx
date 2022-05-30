import {Button, Container, FormControl, Grid, Input, InputLabel, Stack, Typography} from "@mui/material";
import {Box} from "@mui/system";
import logo from "../../public/img/logo.png";
import Image from 'next/image'

const Form = () => {
    return (
        <Stack id='contact-form' gap={'32px'} component={'form'}>
            <FormControl>
                <InputLabel htmlFor="name-input" id='name-input-label'>Klasa i profil</InputLabel>
                <Input id="name-input" aria-describedby="name-input-label"/>
            </FormControl>

            <Stack direction={'row'} gap={'32px'}>
                <FormControl sx={{flex: 2}}>
                    <InputLabel htmlFor="address-input" id='address-input-label'>Adres</InputLabel>
                    <Input id="address-input" aria-describedby="address-input-label"/>
                </FormControl>

                <FormControl sx={{flex: 1}}>
                    <InputLabel htmlFor="postal-input" id='postal-input-label'>Kod pocztowy</InputLabel>
                    <Input id="postal-input" aria-describedby="postal-input-label"/>
                </FormControl>
            </Stack>

            <FormControl>
                <InputLabel htmlFor="contact-name-input" id='contact-name-input-label'>Imię i nazwisko</InputLabel>
                <Input id="contact-name-input" aria-describedby='contact-name-input-label'/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="phone-input" id='phone-input-label'>Telefon</InputLabel>
                <Input id="phone-input" aria-describedby='phone-input-label'/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="email-input" id='email-input-label'>Adres email</InputLabel>
                <Input id="email-input" aria-describedby="email-input-label"/>
            </FormControl>

            <FormControl>
                <InputLabel htmlFor="message-input" id='message-input-label'>Wiadomość</InputLabel>
                <Input id="message-input" aria-describedby='message-input-label'/>
            </FormControl>

            <Button id="send-form" variant={'contained'}>Wyślij</Button>
        </Stack>
    )
}

const Data = () => {
    return (
        <Stack gap={'32px'} maxWidth={'400px'}>
            <Image src={logo} alt={'Duże logo Zdalne Korki'}/>
        </Stack>
    )
}

export const Contact = () => {
    return (
        <Box pt={'64px'}>
            <Container maxWidth={'xl'}>
                <Grid container spacing={'128px'} alignItems={'center'}>
                    <Grid item sm={12} md={6}>
                        <Form/>
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Data/>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

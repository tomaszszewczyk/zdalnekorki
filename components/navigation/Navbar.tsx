import {Stack} from "@mui/material";
import {ImageLink} from "./ImageLink";
import logo from "../../public/img/logo.png";
import {Navigation} from "./Navigation";
import {Container} from "@mui/material";
import {Box} from "@mui/system";

export const Navbar = () => {
    return (
        <Box>
            <Container maxWidth={'xl'}>
                <Stack direction={'row'} justifyContent={'space-between'} pt={'32px'} pb={'32px'} alignItems={'center'}>
                    <Box maxWidth={'100px'}>
                        <ImageLink label={'Przejdź na stronę główną'}
                                   src={logo}
                                   alt={'Logo Zdalne Korki'}
                                   url={'/'}/>
                    </Box>
                    <Navigation links={[
                        {href: '/#cennik', children: 'Cennik'},
                        {href: '/#opinie', children: 'Opinie'},
                        {href: '/zadania', children: 'Zadania', label: 'Zobacz zadania'},
                        {href: '/kontakt', children: 'Kontakt', variant: 'contained'},
                    ]}/>
                </Stack>
            </Container>
        </Box>
    )
}

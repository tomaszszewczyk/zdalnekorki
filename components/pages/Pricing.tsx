import {Box, Card, Container, Grid, Stack, Typography, useTheme} from "@mui/material";
import {ButtonLink} from "../navigation/ButtonLink";
import {FC} from "react";
import {primaryColor} from "../../theme/theme";

interface PricingCardProps {
    elevated: boolean
    title: string
    subtitle: string
    price: string
    comment: string
}

const PricingCard: FC<PricingCardProps> = (props) => {
    const theme = useTheme()

    return (
        <Card sx={{height: '100%', borderColor: props.elevated ? primaryColor : theme.palette.divider}}>
            <Stack alignItems={'center'}
                   gap={'16px'}
                   p={'32px'}
                   justifyContent={'space-between'}
                   height={'100%'}
                   boxSizing={'border-box'}
            >
                <Typography variant={'h3'} textAlign={'center'}>{props.title}</Typography>
                <Typography variant={'h4'} component={'p'}>{props.subtitle}</Typography>
                <Typography variant={'h1'} component={'p'}>{props.price}</Typography>
                <Typography variant={'body1'} component={'p'}>{props.comment}</Typography>
                <ButtonLink href={'/kontakt#contact-form'} variant={'contained'}>
                    Zapisz się!
                </ButtonLink>
            </Stack>
        </Card>
    )
}

export const Pricing = () => {
    return (
        <Box pt={'100px'} id={'cennik'}>
            <Container maxWidth={'xl'}>
                <Typography variant={'h2'} pb={'64px'}>Cennik</Typography>
                <Grid container spacing={'32px'}>
                    <Grid item lg={4}>
                        <PricingCard
                            elevated={false}
                            title={'Pakiet podstawowy'}
                            subtitle={'Zajęcia 60min'}
                            price={'50zł'}
                            comment={'za 60 min w pakiecie 4 zajęć'}
                        />
                    </Grid>
                    <Grid item lg={4}>
                        <PricingCard
                            elevated={true}
                            title={'Pakiet rozszerzony'}
                            subtitle={'Zajęcia 90min'}
                            price={'40zł'}
                            comment={'za 60 min w pakiecie 4 zajęć'}
                        />
                    </Grid>
                    <Grid item lg={4}>
                        <PricingCard
                            elevated={false}
                            title={'Bez pakietu'}
                            subtitle={'Zajęcia 45min'}
                            price={'70zł'}
                            comment={'za 45 min poza pakietem'}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

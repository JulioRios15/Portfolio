import React from 'react';

//MUI
import styled from '@mui/system/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

//Components
import ContactForm from 'pages/Contact/components/ContactForm';
import ContactInfo from 'pages/Contact/components/ContactInfo';
import ContactMap from 'pages/Contact/components/ContactMap';
import Footer from 'components/footer/Footer';

export default function ContactPage() {

    return (

        <StyledContainer>
            <Grid container sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <StyledItemWrapper item xs={12}>
                    <Typography variant='h3'> Contact</Typography>
                </StyledItemWrapper>

                <StyledItemWrapper item xs={12} md={8}>
                    <ContactForm/>   
                </StyledItemWrapper>

                <StyledItemWrapper item xs={12} md={4}>
                    <ContactInfo/>
                </StyledItemWrapper>

                <StyledItemWrapper item xs={12} >
                    <ContactMap/>
                </StyledItemWrapper>

                <StyledItemWrapper item xs={12}>
                    <Footer/>
                </StyledItemWrapper>
            </Grid>
        </StyledContainer>   

    )
}

const StyledContainer = styled(Container)(({theme, color = 'primary'}) => ({
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    margin: "auto 0",
    height: "100%",
    width: "100%",

    '@media screen and (max-width: 900px)': {
        height: "auto"
    }
}))

const StyledItemWrapper = styled(Grid)({
    padding: "1rem"
})

import React from 'react';

//MUI
import styled from '@mui/system/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

//Components
import ContactForm from 'pages/Contact/components/ContactForm';
import ContactInfo from 'pages/Contact/components/ContactInfo';

export default function ContactPage() {


    return (
        <StyledContainer>
               
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)(({theme, color = 'primary'}) => ({
    display: "flex",
}))

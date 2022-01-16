import React from 'react'

//MUI
import styled from '@mui/system/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';

//Components
import PortfolioItemList from 'pages/Portfolio/components/PortfolioItemList';
import Footer from 'components/footer/Footer';

export default function PortfolioPage() {
    return (
        <StyledContainer>   
            <StyledGrid container>
                <Grid item xs={12}>
                    <Typography variant='h3'> Portfolio</Typography>
                    <Divider/>
                </Grid>

                <StyledListContainer container>
                   <PortfolioItemList/>
                </StyledListContainer>

                <StyledFooterContainer item xs={12}>
                    <Footer/>
                    <Divider/>
                </StyledFooterContainer>
            </StyledGrid>
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)(({theme, color = 'primary'}) => ({
    diplay: 'flex',
    justifyContent: "space-evenly",
    alignItems: 'center',
}))

const StyledGrid = styled(Grid)(({theme}) => ({

}))

const StyledListContainer = styled(Grid)(({theme}) => ({
    diplay: 'flex',
    justifyContent: "center",
    alignItems: 'center',
    width: "100%"
}))

const StyledFooterContainer = styled(Grid)(({theme}) => ({
    width: "100%",
    margin: "1rem 0"
}))



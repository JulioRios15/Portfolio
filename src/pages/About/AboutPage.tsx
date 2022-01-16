import React from 'react';

//MUI
import styled from '@mui/system/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

//Components
import MediaButtons from 'components/button/MediaButtons';

export default function AboutPage() {
    return (
        <StyledContainer>
            <Grid container>
                <StyledHeader item xs={12}>
                    <Typography variant='h1'>Julio Rios</Typography>
                    <Typography variant='subtitle1' sx={{
                        color: "grey.600"
                    }}>Puerto Rico</Typography>
                </StyledHeader>

                <StyledBody item xs={12}>
                    <Typography variant='body1'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Eius at, quam, exercitationem culpa dolorem quo nam mollitia 
                        alias voluptate esse ipsam iste dolore aut nostrum aliquam ut. 
                        Possimus eligendi, dolor impedit cupiditate iusto, modi voluptatibus 
                        veniam eum, obcaecati omnis quidem harum perspiciatis odio ipsam 
                        distinctio aut doloremque labore dolores quasi.
                    </Typography>
                </StyledBody>
                <StyledFooter item xs={12}>
                    <MediaButtons/>
                </StyledFooter>
            </Grid>
            
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)(({theme, color = 'primary'}) => ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto 0",
    height: "100%",

    '@media screen and (max-width: 900px)': {
        height: "95vh"
    }
}))

const StyledHeader = styled(Grid)({
    padding: "2rem 0"
})

const StyledBody = styled(Grid)({
})

const StyledFooter = styled(Grid)({
    padding: "2rem 0"
})



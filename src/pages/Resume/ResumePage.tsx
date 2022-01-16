import React from 'react'

//MUI
import styled from '@mui/system/styled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

//Componentns
import Resume from 'pages/Resume/components/Resume';
import SkillsList from 'pages/Resume/components/SkillsList';
import Footer from 'components/footer/Footer';

export default function ResumePage() {
    return (
        <StyledContainer>
           <StyledResumeGridContainer container>

               <StyledResumeGridItemContainer item xs={12}>
                    <StyledTitle variant='subtitle1'>Resume</StyledTitle>
                    <Divider/>
                    <Resume/>
               </StyledResumeGridItemContainer>

               <StyledResumeGridItemContainer item xs={12}>
                    <StyledTitle variant='subtitle1'>Skills</StyledTitle>
                    <Divider/>
                    <SkillsList/>
               </StyledResumeGridItemContainer>

               <StyledResumeGridItemContainer item xs={12}>
                    <Footer/>
               </StyledResumeGridItemContainer>

           </StyledResumeGridContainer>
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)(({theme, color = 'primary'}) => ({

}))

const StyledResumeGridContainer = styled(Grid)(({theme}) => ({
    
}))

const StyledResumeGridItemContainer = styled(Grid)(({theme}) => ({
    padding: "1rem 0"
}))

const StyledTitle = styled(Typography)(({theme}) => ({

}))

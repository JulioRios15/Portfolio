import React from 'react';

//MUI
import styled from '@mui/system/styled';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


export default function SkillsComponents() {
    return (
        <StyledContainer>
            <GridContainer container xs={12} md={12}>
                <Divider/>
                <GridItemContainer item xs={12}>
                    <GridLabelContent xs={4}>
                        <StyledLabel variant='body1'>Javascript</StyledLabel>
                    </GridLabelContent>
                    <GridLabelContent xs={4}>
                        <StyledLabel variant='body1'>Typescript</StyledLabel>
                    </GridLabelContent>
                    <GridLabelContent xs={4}>
                        <StyledLabel variant='body1'>HTML/CSS</StyledLabel>
                    </GridLabelContent>
                </GridItemContainer>
                
                <GridItemContainer item xs={12}>
                    <GridLabelContent xs={4}>
                        <StyledLabel variant='body1'>Node js</StyledLabel>
                    </GridLabelContent>
                    <GridLabelContent xs={4}>
                        <StyledLabel variant='body1'>Express js</StyledLabel>
                    </GridLabelContent>
                    <GridLabelContent xs={4}>
                        <StyledLabel variant='body1'>GraphQL</StyledLabel>
                    </GridLabelContent>
                </GridItemContainer>

                <GridItemContainer item xs={12}>
                    <GridLabelContent xs={4}>
                        <StyledLabel variant='body1'>MongoDB</StyledLabel>
                    </GridLabelContent>
                    <GridLabelContent xs={4}>
                        <StyledLabel variant='body1'>MySQL</StyledLabel>
                    </GridLabelContent>
                </GridItemContainer>
            </GridContainer> 
        </StyledContainer>
    )
}

const StyledContainer = styled('div')(({theme}) =>({
    margin: ".5rem 0",
}))

const GridContainer = styled(Grid)(({theme}) =>({
    display: "flex",
    justifyContent: "start",
    margin: ".5rem 0",
}))

const GridItemContainer = styled(Grid)(({theme}) =>({
    display: "flex",
}))

const GridLabelContent = styled(Grid)(({theme}) =>({

}))

const StyledTitle = styled(Typography)(({theme}) => ({
}))

const StyledLabel = styled(Typography)(({theme}) => ({
    padding: ".2rem 0",
}))
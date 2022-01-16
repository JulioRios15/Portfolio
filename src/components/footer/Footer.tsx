import React from 'react';

//MUI
import styled from '@mui/system/styled';
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

//Components
import MediaButtons from 'components/button/MediaButtons';


export default function Footer() {
    return (
        <StyledContainer>
            <Divider/>
            <StyledGridContainer container>
                <MediaButtons/>
            </StyledGridContainer>
            <Divider/>
        </StyledContainer>
    )
}

const StyledContainer = styled('div')(({theme}) => ({
    
}))

const StyledGridContainer = styled(Grid)(({theme}) => ({
    margin: ".5rem 0",
    padding: ".5rem 0"
}))

const StyledMediaButtons = styled(Grid)(({theme}) => ({

}))


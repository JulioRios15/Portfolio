import React from 'react'

//MUI
import styled from '@mui/system/styled';
import Grid from "@mui/material/Grid";
import IconButton from '@mui/material/IconButton';

//Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function MediaButtons() {
    return (
        <StyledContainer>
            <StyledGridContainer container>
                <StyledGridItem item>
                    <StyledIconButton size='medium' onClick={() => window.open("https://github.com/JulioRios15", "_blank")}>
                        <GitHubIcon fontSize="inherit"/>
                    </StyledIconButton>
                </StyledGridItem>
                <StyledGridItem item>
                    <StyledIconButton size='medium' onClick={() => window.open("https://www.linkedin.com/in/julio-rios-002b0420b/", "_blank")}>
                        <LinkedInIcon fontSize="inherit"/>
                    </StyledIconButton>
                </StyledGridItem>
            </StyledGridContainer>
        </StyledContainer>
    )
}

const StyledContainer = styled('div')(({theme}) => ({
}))

const StyledGridContainer = styled(Grid)(({theme}) => ({

}))

const StyledGridItem = styled(Grid)(({theme}) => ({

}))

const StyledIconButton = styled(IconButton)(({theme}) => ({
    fontSize: "2rem",
    padding: ".5rem",
    margin: ".4rem",
    backgroundColor: theme.palette["grey"][700],
    color: theme.palette["grey"][50],
    
    "&:hover": {
        backgroundColor: theme.palette["primary"].main
    }
}))


import React, {useState, useEffect} from 'react';

// MUI
import styled from '@mui/system/styled';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Zoom from '@mui/material/Zoom';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';

interface ItemCardProps{
    title: string;
    subtitle: string;
    isHovered: boolean;
    githubLink: string;
    containerRef: any
}

export default function ItemOverlayBar(props: ItemCardProps) {

    return (  
        <Box>
            <Slide in={props.isHovered} mountOnEnter unmountOnExit container={props.containerRef}>
                <StyledItemBar
                position='top'
                title={<Typography variant="subtitle2" color="grey.50">{props.title}</Typography>}
                subtitle={<Typography variant="body2" color="grey.50">{props.subtitle}</Typography>}
                actionIcon={
                    <StyledIconButton 
                    onClick={() => window.open(props.githubLink, "_blank")}
                    >
                        <GitHubIcon fontSize='inherit'/>
                    </StyledIconButton>
                }
                >

            </StyledItemBar>
            </Slide>
        </Box>

    )
}

const StyledItemBar = styled(ImageListItemBar)(({theme}) => ({
    clipPath: "auto"
}))

const StyledIconButton = styled(IconButton)(({theme}) => ({
    color: theme.palette["grey"][50],
    backgroundColor: theme.palette["grey"][700],

    "&:hover": {
        backgroundColor: theme.palette["primary"].main
    }
}))

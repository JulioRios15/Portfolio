import React from 'react';

// MUI
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';

// Icons
import GitHubIcon from '@mui/icons-material/GitHub';

interface ItemBottomBarProps{
    title: string;
    subtitle: string;
    githubLink: string;
}

export default function ItemBottomBar(props: ItemBottomBarProps) {
    return (
        <StyledItemBar
        position='below'
        title={<Typography variant="subtitle2" color="text.primary">{props.title}</Typography>}
        subtitle={<Typography variant="body2" color="grey.700">{props.subtitle}</Typography>}
        actionIcon={
            <StyledIconButton 
            onClick={() => window.open(props.githubLink, "_blank")}
            >
                <GitHubIcon fontSize='inherit'/>
            </StyledIconButton>
        }
        >

        </StyledItemBar>
    )
}

const StyledItemBar = styled(ImageListItemBar)(({theme}) => ({
    display: "flex",
    alignItems: "center"
}))

const StyledIconButton = styled(IconButton)(({theme}) => ({
    color: theme.palette["grey"][50],
    backgroundColor: theme.palette["grey"][700],

    "&:hover": {
        backgroundColor: theme.palette["primary"].main
    }
}))
import React, { useState } from 'react';

// MUI
import styled from '@mui/system/styled';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';

//Components
import LinkTab from "components/links/LinkTab"

interface SidebarTabsProps {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}

export default function SidebarTabs(props: SidebarTabsProps){

    function handleChange(event: React.SyntheticEvent, newValue: number){
        props.setValue(newValue);    
    }

    return (
        <Tabs 
        orientation='vertical'
        variant='fullWidth'
        value={props.value}
        onChange={handleChange}
        aria-label="nav tabs"
        textColor='inherit'
        indicatorColor='secondary'
        >
            <StlyedLinkTab label={<Typography variant='body1'>About</Typography>} to="/about-me"/>
            <StlyedLinkTab label={<Typography variant='body1'>Portfolio</Typography>} to="/portfolio"/>
            <StlyedLinkTab label={<Typography variant='body1'>Contact</Typography>} to="/contact"/>
            <StlyedLinkTab label={<Typography variant='body1'>Resume</Typography>} to="/resume"/>
        </Tabs>
    )
}

const StlyedLinkTab = styled(LinkTab)(({theme, color = 'text'}) => ({
    color: theme.palette[color].primary,
    transition: "all .2s ease-in-out",
    ":hover": {
        transform: "scale(1.2)",
      }
}))
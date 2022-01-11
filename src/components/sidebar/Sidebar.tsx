import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI
import styled from '@mui/system/styled';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';

//Components
import SidebarTabs from './SidebarTabs';
import SidebarMenu from './SidebarMenu';

export default function Sidebar(){
    const [value, setValue] = useState(0);

    return(
        <StyledSidebar color='primary' elevation={6}>
            <StyledAvatarContainer>
                <Link component={RouterLink} to="/" onClick={() => setValue(0)}>
                    <StyledAvatar>JR</StyledAvatar>
                </Link>     
            </StyledAvatarContainer>
      
            <StyledTabsContainer>
                <SidebarTabs value={value} setValue={setValue}/>
            </StyledTabsContainer>

            <StyledMenuContainer>
                <StyledAvatar>JR</StyledAvatar>
                <SidebarMenu value={value} setValue={setValue}/>
            </StyledMenuContainer>

        </StyledSidebar>
    )
}

const StyledSidebar = styled(Paper)(({theme, color = "primary"}) => ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: "center",
    aligItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: theme.palette[color].main,
}))

const StyledAvatarContainer = styled('div')(({theme, color = "primary"}) => ({
    display: "flex",
    margin: '1rem 0',
    justifyContent: 'center',

    '@media screen and (max-width: 900px)': {
        display: "none"
    }
}))

const StyledAvatar = styled(Avatar)(({theme, color = "primary"}) => ({
    width: "7rem",
    height: "7rem",
    border: `.5rem solid ${theme.palette[color].light}`,
    transition: "all .2s ease-in-out",

    ":hover": {
        transform: "scale(1.05)",
      },

    '@media screen and (max-width: 900px)': {
        width: "1.5rem",
        height: "1.5rem",
        border: `.2rem solid ${theme.palette[color].light}`,
    }
}))

const StyledTabsContainer = styled('div')(({theme, color = 'text'}) => ({
    display: 'flex',
    margin: "0 auto",

    '@media screen and (max-width: 900px)': {
        display: "none"
    }
}));

const StyledMenuContainer = styled('div')(({theme, color = 'text'}) => ({
    display: "none",
    justifyContent: "space-between",
    alignItems: 'center',
    padding: "0 1rem",

    '@media screen and (max-width: 900px)': {
        display: "flex"
    }
}));


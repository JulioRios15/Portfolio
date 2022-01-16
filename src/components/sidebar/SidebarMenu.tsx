import React, {useState} from 'react';

//MUI
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Tabs from '@mui/material/Tabs'
import LinkTab from 'components/links/LinkTab';

//Icos
import ReorderIcon from '@mui/icons-material/Reorder';
import { height } from '@mui/system';

interface SidebarMenuProps {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}

export default function SidebarMenu(props: SidebarMenuProps) {

    const [isOpen, setIsOpen] = useState(false);

    function handleChange(event: React.SyntheticEvent, newValue: number){
        props.setValue(newValue);    
    }

    function toggleDrawer(event: React.MouseEvent){
        setIsOpen(!isOpen);
    }

    return (
        <StyledSidebarMenu key="top">
            <IconButton onClick={toggleDrawer}>
                <ReorderIcon/>
            </IconButton>

            <StyledDrawer 
            anchor='top'
            open={isOpen}
            onClose={toggleDrawer}
            >
                <StlyedTabs
                    orientation='vertical'
                    variant='scrollable'
                    value={props.value}
                    onChange={handleChange}
                    aria-label="nav tabs"
                    textColor='inherit'
                    indicatorColor='primary'
                >
                    <StlyedLinkTab 
                    label={<Typography variant='body1'>About</Typography>} 
                    to="/about-me"
                    onClick={toggleDrawer}
                    />
                    <StlyedLinkTab 
                    label={<Typography variant='body1'>Portfolio</Typography>} 
                    to="/portfolio"
                    onClick={toggleDrawer}
                    />
                    <StlyedLinkTab 
                    label={<Typography variant='body1'>Contact</Typography>} 
                    to="/contact"
                    onClick={toggleDrawer}
                    />
                    <StlyedLinkTab 
                    label={<Typography variant='body1'>Resume</Typography>} 
                    to="/resume"
                    onClick={toggleDrawer}
                    />
                </StlyedTabs>
            </StyledDrawer>
        </StyledSidebarMenu>
    )
}

const StyledSidebarMenu = styled('div')(({theme, color ="primary"}) => ({

}));

const StyledDrawer = styled(Drawer)(({theme, color ="primary"}) => ({

}));

const StlyedTabs = styled(Tabs)(({theme, color = 'primary'}) => ({
    padding: ".5rem 0",
    backgroundColor: theme.palette[color].main
}))
const StlyedLinkTab = styled(LinkTab)(({theme, color = 'text'}) => ({
    color: theme.palette[color].secondary
}))
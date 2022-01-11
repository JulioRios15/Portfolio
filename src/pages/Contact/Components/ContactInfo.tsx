import React from 'react';

//MUI
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import PinDropIcon from '@mui/icons-material/PinDrop';

export default function ContactInfo() {
    return (
        <StyledStack direction="column" spacing={1}>
            <StyledStackItemContainer>
                <StyledStackItemTitle variant='body1' color="primary.main"> <EmailIcon/> EMAIL</StyledStackItemTitle>
                <Typography variant='body2' component="a" href='mailto:rios.julio.david@outlook.com' color="text.secondary">rios.julio.david@outlook.com</Typography>
            </StyledStackItemContainer>
            <Divider/>
            <StyledStackItemContainer>
                <StyledStackItemTitle variant='body1' color="primary.main"> <PhoneIphoneIcon/> PHONE</StyledStackItemTitle>
                <Typography variant='body2' component="a" href="tel:787-452-8491" color="text.secondary">(787)-452-8491</Typography>
            </StyledStackItemContainer>
            <Divider/>
            <StyledStackItemContainer>
                <StyledStackItemTitle variant='body1' color="primary.main"> <PinDropIcon/> LOCATION</StyledStackItemTitle>
                <Typography variant='body2' color="text.secondary">Isabela, Puerto Rico</Typography>
            </StyledStackItemContainer>
            <Divider/>
        </StyledStack>
    )
}

const StyledStack = styled(Stack)({
})

const StyledStackItemContainer = styled('div')({
    display: "flex",
    flexDirection: "column",
})

const StyledStackItemTitle = styled(Typography)({
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
})


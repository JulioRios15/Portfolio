import React from 'react';

//MUI
import styled from '@mui/system/styled';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ContactInfo() {
    return (
        <StyledStack direction="column" spacing={1}>
            <StyledStackItemContainer>
                <StyledStackItemTitle variant='h6' color="primary.main">EMAIL</StyledStackItemTitle>
                <Typography component="a" href='mailto:rios.julio.david@outlook.com' color="text.secondary">rios.julio.david@outlook.com</Typography>
            </StyledStackItemContainer>

            <StyledStackItemContainer>
                <StyledStackItemTitle variant='h6' color="primary.main">PHONE</StyledStackItemTitle>
                <Typography color="text.secondary">(787)-452-8491</Typography>
            </StyledStackItemContainer>

            <StyledStackItemContainer>
                <StyledStackItemTitle variant='h6' color="primary.main">LOCATION</StyledStackItemTitle>
                <Typography color="text.secondary">Isabela, Puerto Rico</Typography>
            </StyledStackItemContainer>
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
})


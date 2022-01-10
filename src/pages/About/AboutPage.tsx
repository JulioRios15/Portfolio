import React from 'react';

//MUI
import styled from '@mui/system/styled';
import Container from '@mui/material/Container';

export default function AboutPage() {
    return (
        <StyledContainer>
            <h1>About page</h1>
        </StyledContainer>
    )
}

const StyledContainer = styled(Container)(({theme, color = 'primary'}) => ({

}))


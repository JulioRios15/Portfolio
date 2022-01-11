import React from 'react';
import GoogleMapReact from 'google-map-react';

//MUI
import styled from '@mui/system/styled';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

//18.5
//-67.0

export default function ContactMap() {

    return (
        <StyledContactMapContainer>
            <Typography variant='subtitle1'>Find Me</Typography>
            <Divider/>
            <StyledBox>
                <GoogleMapReact
                defaultCenter={{lat: 18.500896, lng: -67.024011}}
                defaultZoom={15}
                >
                </GoogleMapReact>
            </StyledBox>
        </StyledContactMapContainer>

    )
}

const StyledContactMapContainer = styled('div')(({theme}) =>({

}))

const StyledBox = styled(Box)(({
    height: "25rem",
    padding: "1rem 0",

    '@media screen and (max-width: 900px)': {
        height: "15rem"
      },
}))


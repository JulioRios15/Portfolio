import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// MUI
import Link from '@mui/material/Link';
import Tab, {TabProps} from '@mui/material/Tab';


interface LinkTabProps extends TabProps {
    to: string;  
}

export default function LinkTab (props: LinkTabProps){
    return (
        <Link component={RouterLink} to={props.to}>
            <Tab
            {...props}
            />
        </Link>
    );
}
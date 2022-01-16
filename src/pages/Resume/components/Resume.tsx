import React from 'react';

//MUI
import styled from '@mui/system/styled';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function Resume() {
    return (
        <StyledContainer>
            <StyledGridContainer container>
                <StyledGridItem item xs={12}>
                    <StyledGridContainer container>
                    <StyledGridItem item xs={12} md={6}>
                        <StyledGridItemContainer>
                            <Typography variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, 
                            asperiores odit nesciunt, commodi necessitatibus delectus eligendi enim 
                            voluptatum nulla consequuntur minus labore. Repellat tempora velit dolorem 
                            accusamus, quasi a hic possimus ratione corporis reprehenderit natus? Dolor, 
                            accusantium molestias sint amet aspernatur eos, minima reiciendis libero deserunt 
                            necessitatibus quis, et assumenda recusandae? Molestias, adipisci quasi dolorum 
                            vel possimus voluptates saepe at!
                            </Typography>
                        </StyledGridItemContainer>
                    </StyledGridItem>
                   </StyledGridContainer>
                </StyledGridItem>

                <StyledGridContainer container>
                    <StyledGridItem item xs={12} md={6}>
                        <StyledGridItemContainer>
                            <Typography variant="subtitle1">Education</Typography>
                            <Divider/>                           
                        </StyledGridItemContainer>
                    </StyledGridItem>
                    <StyledGridItem item xs={12} md={6}>
                        <StyledGridItemContainer>
                        <   Typography variant="subtitle1">Experience</Typography>
                            <Divider/>
                        </StyledGridItemContainer>

                    </StyledGridItem>
                </StyledGridContainer>
            </StyledGridContainer>      
        </StyledContainer>
    )
}

const StyledContainer = styled('div')(({theme, color = 'primary'}) => ({

}))

const StyledGridContainer = styled(Grid)(({theme}) => ({
    padding: "1rem 0",
}))

const StyledGridItem = styled(Grid)(({theme}) => ({
    padding: "0"
}))

const StyledGridItemContainer = styled('div')(({theme}) => ({
    padding: "0 .5rem"
}))

const StyledTitle = styled(Typography)(({theme}) => ({

}))

const StyledList = styled(List)(({theme}) => ({

}))

const StyledListItem = styled(ListItem)(({theme}) => ({

}))

const StlyedListItemText = styled(ListItemText)(({theme}) => ({

}))

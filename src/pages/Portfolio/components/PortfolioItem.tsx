import React, { useState } from 'react';

// MUI
import styled from '@mui/system/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Divider from '@mui/material/Divider';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

//Components
import ItemOverlayBar from 'pages/Portfolio/components/ItemOverlayBar';
import ItemBottomBar from 'pages/Portfolio/components/ItemBottomBar';

export interface PortfolioItemProps {
    backgroundImgSrc: string;
    title: string;
    type: string;
    githubLink: string;
}

export default function PortfolioItem(props: PortfolioItemProps) {

    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useMediaQuery('(max-width: 900px)');
    const containerRef = React.useRef(null);

    return (
        <StyledContainer ref={containerRef}>
            <StyledImageListItem key={props.backgroundImgSrc} sx={{width: 300}}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <img 
                src={props.backgroundImgSrc}
                srcSet={props.backgroundImgSrc}
                alt={props.title} 
                width={300}
                />

                {isMobile
                ?   <ItemBottomBar
                    title={props.title} 
                    subtitle={props.type}
                    githubLink={props.githubLink}
                    />
                :   <ItemOverlayBar 
                    title={props.title} 
                    subtitle={props.type}
                    githubLink={props.githubLink}
                    isHovered={isHovered}
                    containerRef={containerRef.current}
                    />
                }



                
            </StyledImageListItem>
            <Divider/>
        </StyledContainer>
    )
}
const StyledContainer = styled('div')(({theme}) => ({
    justifyContent: "center",
}))

const StyledImageListItem = styled(ImageListItem)(({theme}) => ({
    borderRadius: "1rem",
    marginBottom: "1rem",
}))

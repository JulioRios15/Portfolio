import React from 'react';

//MUI
import styled from '@mui/system/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import ImageList from '@mui/material/ImageList';
import Divider from '@mui/material/Divider';

//Icon

//Images
import Shreddit from 'assets/img/shreddit-overview.png';
import ApisForApas from 'assets/img/apis-for-ipas-overview-2.jpg';
import CommandLine from 'assets/img/command-line.jpg';
import Postman from 'assets/img/postman.jpg';

//Components
import PortfolioItem from 'pages/Portfolio/components/PortfolioItem';



const listData = [
    {
        backgroundImgSrc: "https://user-images.githubusercontent.com/88795800/152446519-12d46a7f-c9b5-4a68-8747-3c92014258ac.png",
        title: "Cultural Eats",
        type: "Full Stack",
        githubLink: "https://github.com/JulioRios15/Cultural-Eats"
    },
    {
        backgroundImgSrc: Shreddit,
        title: "Shreddit",
        type: "Full Stack",
        githubLink: "https://github.com/JulioRios15/Full-Stack-Project"
    },
    {
        backgroundImgSrc: ApisForApas,
        title: "Apis For Apas",
        type: "Frontend",
        githubLink: "https://github.com/sdesire/APIs-For-IPAs"
    },
    {
        backgroundImgSrc: Postman,
        title: "Social Media Api",
        type: "Backend",
        githubLink: "https://github.com/JulioRios15/Social-Network-API"
    },
    {
        backgroundImgSrc: CommandLine,
        title: "Employee Tracker",
        type: "Command Line Tool",
        githubLink: "https://github.com/JulioRios15/Employee-Tracker"
    },

]

export default function PortfolioItemList() {

    const isMobile = useMediaQuery('(max-width: 900px)');
    const isTablet = useMediaQuery('(max-width: 1200px)');

    function getCols(): number{
        let cols = 3;

        cols = (isTablet)? 2 : cols;
        cols = (isMobile)? 1 : cols 

        return cols;
    }

    return (
        <StyledList cols={getCols()} gap={30} rowHeight={400}>

        {listData.map((item) => {
            return(
                <PortfolioItem
                backgroundImgSrc={item.backgroundImgSrc}
                title={item.title}
                type={item.type}
                githubLink={item.githubLink}
                />
            )
        })}
            
        </StyledList>
    )
}

const StyledList = styled(ImageList)(({theme}) => ({
}))

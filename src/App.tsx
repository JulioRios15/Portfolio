import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI
import styled from '@mui/system/styled';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';

//Components
import Sidebar from 'components/sidebar/Sidebar';

//Pages
import AboutPage from 'pages/About/AboutPage';
import PortfolioPage from 'pages/Portfolio/PortfolioPage';
import ContactPage from 'pages/Contact/ContactPage';
import ResumePage from 'pages/Resume/ResumePage';

function App() {
  return (
    <StyledAppGrid container>
      <BrowserRouter>

        <StyledSidebarGridContiner item xs={12} md={2} maxWidth={25}>
          <Sidebar/>
        </StyledSidebarGridContiner>

        <StyledContentGridContiner item xs={12} md={10}>
          <Routes>
            <Route path="/" element={<AboutPage/>}/>
            <Route path="/about-me" element={<AboutPage/>}/>
            <Route path="/portfolio" element={<PortfolioPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/resume" element={<ResumePage/>}/>
          </Routes>
        </StyledContentGridContiner>

      </BrowserRouter>
    </StyledAppGrid>
  );
}

const StyledAppGrid = styled(Grid)(({theme}) => ({

}))

const StyledSidebarGridContiner = styled(Grid)(({theme}) => ({
  height: "100vh",

  '@media screen and (max-width: 900px)': {
    position: "sticky",
    top: "0",
    height: "auto"
  }
}))

const StyledContentGridContiner = styled(Grid)(({theme}) => ({
}))

export default App;

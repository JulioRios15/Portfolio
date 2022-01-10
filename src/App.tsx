import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//MUI
import styled from '@mui/system/styled';
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
    <StyledApp>
      <BrowserRouter>
        <Grid container>
          <Grid item>
            <Sidebar/>
          </Grid>

          <Grid item>         
              <Routes>
                <Route path="/" element={<AboutPage/>}/>
                <Route path="/about-me" element={<AboutPage/>}/>
                <Route path="/portfolio" element={<PortfolioPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/resume" element={<ResumePage/>}/>
              </Routes>
          </Grid>
        </Grid>
      </BrowserRouter>
    </StyledApp>
  );
}

const StyledApp = styled("div")({

})

export default App;

import React from 'react';
import { useTheme } from '@mui/material/styles';
import Navbar from '../Components/Navbar';
import 'react-toastify/dist/ReactToastify.css';

import Card from "@mui/material/Card";

import MKBox from '../Components/MKBox';
// Images
import Profile from '../Components/Profile';
import Footer from '../Components/Footer';
import bgImage from "../assets/city-profile.jpg";

function Doctor_Description() {
  const theme = useTheme();
  


  return (
    <>
      <Navbar />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: `${theme.functions.linearGradient(theme.palette.gradients.dark.main, theme.palette.gradients.dark.state)}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: theme.functions.rgba(theme.palette.white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: theme.boxShadows.xxl,
          }}
        >
          <Profile/>
        </Card>
        <Footer />
      </MKBox>
    </>
  );
}

export default Doctor_Description;

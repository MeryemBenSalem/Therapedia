import React from 'react';
import { useTheme } from '@mui/material/styles';
import Navbar from '../Components/Navbar';
import Card from "@mui/material/Card";
import MKBox from '../Components/MKBox';
import Profile from '../Components/Profile';
import Footer from '../Components/Footer';
import bgImage from "../Assets/city-profile.jpg";

function Doctor_Description() {
    const theme = useTheme();

    // Define the gradient manually
    const gradient = `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`;

    return (
        <>
            <Navbar />
            <MKBox bgColor="white">
                <MKBox
                    minHeight="25rem"
                    width="100%"
                    sx={{
                        backgroundImage: `${gradient}, url(${bgImage})`,
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
                        backgroundColor: theme.palette.common.white,
                        backdropFilter: "saturate(200%) blur(30px)",
                        boxShadow: theme.shadows[24],
                    }}
                >
                    <Profile />
                </Card>
                <Footer />
            </MKBox>
        </>
    );
}

export default Doctor_Description;

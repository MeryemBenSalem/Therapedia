import React from 'react';
import { Box, Container, Grid, TextField, Button, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { pink, purple, red } from '@mui/material/colors';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'styled-components';

const theme = createTheme({
    palette: {
      primary: {
        light: purple[100],
        main: purple[200],
        dark: purple[300],
        darker: purple[700],
      },
      secondary:{
        light: purple[100],
        main: purple[200],
        dark: purple[300],
        darker: purple[700],
      },
    },
  });

const Footer = () => {
    return (
        <footer style={{ backgroundColor:"default", padding: '50px 0' }}>
            <Container maxWidth="lg">                 
                        <Typography color="secondary" variant="h6" gutterBottom textAlign="center">
                            Subscribe to our newsletter and stay updated.
                        </Typography>
                        <TextField
                            variant="outlined"
                            color="secondary"
                            placeholder="Write your email here"
                            fullWidth
                            style={{ marginBottom: '10px' }}
                        />
                        <ThemeProvider theme = {theme}>
                        </ThemeProvider>
                        <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Typography textAlign="center" variant="h6" color="secondary" gutterBottom>
                            Quick Links
                            </Typography>
                            <Link display="block" textAlign="center" variant="body1" color="#AD8291">About</Link>
                            <Link display="block" textAlign="center" variant="body1" color="#AD8291">Contact</Link>
                            <Link display="block" textAlign="center" variant="body1" color="#AD8291">404 Page</Link>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography textAlign="center" variant="h6" color="secondary" gutterBottom>
                            Category
                            </Typography>
                            <Link display="block" textAlign="center"  variant="body1" color="#AD8291">Mental</Link>
                            <Link display="block" textAlign="center" variant="body1" color="#AD8291">Health</Link>
                            <Link display="block" textAlign="center" variant="body1" color="#AD8291">Therapy</Link>
                            <Link display="block" textAlign="center" variant="body1" color="#AD8291">Tips</Link>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6" color="secondary" gutterBottom>
                            Follow Us
                            </Typography>
                            <Box>
                            <Link href="https://facebook.com" target="_blank" color="#AD8291"><FacebookIcon /></Link>
                            <Link href="https://instagram.com" target="_blank" color="#AD8291"><InstagramIcon /></Link>
                            <Link href="https://twitter.com" target="_blank" color="#AD8291"><TwitterIcon /></Link>
                            <Link href="https://linkedin.com" target="_blank" color="#AD8291"><LinkedInIcon /></Link>
                            </Box>
                        </Grid>
                        </Grid>

                <Typography variant="body2" color="secondary" align="center" style={{ marginTop: '20px' }}>
                    © Therapedia  676 Centre Urbain Nord BP, Tunis 1080
                </Typography>
            </Container>
        </footer>
    );
}

export default Footer;

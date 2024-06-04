import React, { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowForward from '@mui/icons-material/ArrowForward';

import MKBox from './MKBox';
import Appointments from './Appointements';
import MKAvatar from './MKAvatar';
import MKButton from './MKButton';
import MKTypography from './MKTypography';

// Images
import profilePicture from '../Assets/47516338_b7e0_2.png';

function Profile() {

  const [showAppointments, setShowAppointments] = useState(false);

  const toggleAppointments = (event) => {
    event.preventDefault();
    setShowAppointments(!showAppointments);
  };

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
            <MKAvatar
              src={profilePicture}
              alt="Dr. Anis Kooba"
              size="xxl"
              shadow="xl"
              sx={{ width: 200, height: 200 }} // Custom size
            />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: 'auto', sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <MKTypography variant="h1">Dr. Anis Kooba</MKTypography>
                <MKButton variant="outlined" color="info" size="large">
                  (555) 123-4567
                </MKButton>
                <MKButton variant="outlined" color="info" size="large">
                  anis.kouba@gmail.com
                </MKButton>
              </MKBox>
              <MKTypography variant="h3">Pediatrics</MKTypography>
              <Grid container spacing={18} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    Affiliation : &nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Pediatrics Residency, Stanford Children's Hospital
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    <p>15 Years of Experience</p>
                  </MKTypography>
                </Grid>
              </Grid>
              <MKTypography variant="body1" fontWeight="light" color="text">
                <h3>About</h3>
                <p>
                  Dr. Kooba is a compassionate and dedicated pediatrician with over a decade of experience
                  in providing exceptional care to children and adolescents. She is known for her warm bedside
                  manner and expertise in diagnosing and treating a wide range of pediatric conditions, from
                  common illnesses to complex medical issues.
                </p>
                <MKTypography
                  component="a"
                  href="#"
                  variant="body1"
                  fontWeight="light"
                  color="info"
                  mt={3}
                  onClick={toggleAppointments}
                  sx={{
                    width: 'max-content',
                    display: 'flex',
                    alignItems: 'center',
                    '& .MuiSvgIcon-root': {
                      transition: 'transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)',
                    },
                    '&:hover .MuiSvgIcon-root, &:focus .MuiSvgIcon-root': {
                      transform: 'translateX(6px)',
                    },
                  }}
                >
                  BOOK APPOINTMENT <ArrowForward sx={{ fontWeight: 'bold', ml: 1 }} />
                </MKTypography>
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {showAppointments && (
        <MKBox mt={4} textAlign="center">
          <MKTypography variant="h4" gutterBottom>
            Available Appointments
          </MKTypography>
          <Container>
            <Grid container spacing={2} justifyContent="center">
              {[...Array(3)].map((_, rowIndex) => (
                <Grid container item xs={12} spacing={2} justifyContent="center" key={rowIndex}>
                  {[...Array(3)].map((_, colIndex) => (
                    <Grid item xs={12} sm={6} md={4} key={colIndex}>
                      <Appointments />
                    </Grid>
                  ))}
                </Grid>
              ))}
            </Grid>
          </Container>
        </MKBox>
      )}
    </MKBox>
  );
}

export default Profile;

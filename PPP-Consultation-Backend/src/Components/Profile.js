import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import ArrowForward from '@mui/icons-material/ArrowForward';

import MKBox from './MKBox';
import Appointments from './Appointments';
import MKAvatar from './MKAvatar';
import MKButton from './MKButton';
import MKTypography from './MKTypography';

// Images
import profilePicture from '../assets/47516338_b7e0_2.png';

function Profile() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [showAppointments, setShowAppointments] = useState(false);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`http://localhost:8080/doctor/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch doctor details');
        }
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (id) {
      fetchDoctor();
    }
  }, [id]);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(`http://localhost:8080/consultation/doctor/${id}/available`);
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
      const data = await response.json();
      console.log('Appointments data:', data); // Ajoutez ceci pour vérifier les données
      setAppointments(data);
      setShowAppointments(true);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (!doctor) {
    return <div>Loading...</div>;
  }
  const toggleAppointments = (event) => {
    event.preventDefault();
    fetchAppointments();
  };

  return (
      <MKBox component="section" py={{ xs: 6, sm: 12 }}>
        <Container>
          <Grid container item xs={12} justifyContent="center" mx="auto">
            <MKBox mt={{ xs: -16, md: -20 }} textAlign="center">
              <MKAvatar
                  src={profilePicture}
                  alt={`Dr. ${doctor.firstName} ${doctor.lastName}`}
                  size="xxl"
                  shadow="xl"
                  sx={{ width: 200, height: 200 }} // Custom size
              />
            </MKBox>
            <Grid container justifyContent="center" py={6}>
              <Grid item xs={12} md={7} mx={{ xs: 'auto', sm: 6, md: 1 }}>
                <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                  <MKTypography variant="h1">{`Dr. ${doctor.firstName} ${doctor.lastName}`}</MKTypography>
                  <MKButton variant="outlined" color="info" size="large">
                    {doctor.phone}
                  </MKButton>
                  <MKButton variant="outlined" color="info" size="large">
                    {doctor.email}
                  </MKButton>
                </MKBox>
                <MKTypography variant="h3">{doctor.specialization}</MKTypography>
                <Grid container spacing={18} mb={3}>
                  <Grid item>
                    <MKTypography component="span" variant="body2" fontWeight="bold">
                      Affiliation : &nbsp;
                    </MKTypography>
                    <MKTypography component="span" variant="body2" color="text">
                      {doctor.affiliations}
                    </MKTypography>
                  </Grid>
                  <Grid item>
                    <MKTypography component="span" variant="body2" fontWeight="bold">
                      <p>{doctor.yearsOfExperience} Years of Experience</p>
                    </MKTypography>
                  </Grid>
                </Grid>
                <MKTypography variant="body1" fontWeight="light" color="text">
                  <h3>About</h3>
                  <p>
                    {doctor.about}
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
                  {appointments.map((appointment, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Appointments appointment={appointment} />
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

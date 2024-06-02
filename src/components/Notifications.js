import React from 'react';
import styled from 'styled-components';

const Notifications = () => {
  return (
    <Container>
      <Title>Notifications</Title>
      {/* Add Notifications content here */}
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

export default Notifications;

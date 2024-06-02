// src/components/DashboardOverview.js

import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import colors from '../styles/colors';

const data = [
  { name: 'Sessions', value: 400 },
  { name: 'Users', value: 300 },
  { name: 'Engagement', value: 300 },
];

const DashboardOverview = () => {
  return (
    <Container>
      <Title>Dashboard Overview</Title>
      <ChartContainer>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill={colors.pink}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[`color${index + 1}`]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ChartContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  color: ${colors.darkMauve};
`;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DashboardOverview;

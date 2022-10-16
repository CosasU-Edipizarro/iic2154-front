/* eslint-disable react/prop-types */

// Import React
import React from 'react';

// @mui material components
import Icon from '@mui/material/Icon';

// Argon Dashboard 2 MUI components
import ArgonBox from 'components/ArgonBox';
import ArgonTypography from 'components/ArgonTypography';
import ArgonProgress from 'components/ArgonProgress';

import logoSpotify from 'assets/images/small-logos/logo-spotify.svg';

function Completion({ value, color }) {
  return (
    <ArgonBox display="flex" alignItems="center">
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        {value}
        %&nbsp;
      </ArgonTypography>
      <ArgonBox width="8rem">
        <ArgonProgress value={value} color={color} variant="gradient" label={false} />
      </ArgonBox>
    </ArgonBox>
  );
}

const action = (
  <Icon sx={{ cursor: 'pointer', fontWeight: 'bold' }} fontSize="small">
    more_vert
  </Icon>
);

async function cryptoMarketsTableData(data) {
  const columns = [
    { name: 'project', align: 'left' },
    { name: 'budget', align: 'left' },
    { name: 'status', align: 'left' },
    { name: 'completion', align: 'center' },
    { name: 'action', align: 'center' },
  ];

  const rows = data.map((coin) => ({
    project: [logoSpotify, 'coin.name'],
    budget: (
      <ArgonTypography variant="button" color="text" fontWeight="medium">
        {coin.current_price}
      </ArgonTypography>
    ),
    status: (
      <ArgonTypography variant="caption" color="text" fontWeight="medium">
        working
      </ArgonTypography>
    ),
    completion: <Completion value={60} color="info" />,
    action,
  }));

  const tableData = {
    columns,
    rows,
  };

  return tableData;
}

export default cryptoMarketsTableData;

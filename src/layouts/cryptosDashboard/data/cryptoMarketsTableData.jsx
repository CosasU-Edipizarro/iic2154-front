/* eslint-disable react/prop-types */

// Import React
import React from 'react';

// @mui material components
import Icon from '@mui/material/Icon';

// Argon Dashboard 2 MUI components
import ArgonTypography from 'components/ArgonTypography';

const action = (
  <Icon sx={{ cursor: 'pointer', fontWeight: 'bold' }} fontSize="small">
    more_vert
  </Icon>
);

function cryptoMarketsTableData(data) {
  const columns = [
    { name: 'nombre', align: 'left' },
    { name: 'valor', align: 'left' },
    { name: 'variacion', align: 'left' },
    { name: 'action', align: 'center' },
  ];
  const rows = [];
  if (data.response && data.response.length >= 5) {
    data.response.forEach((element) => {
      const coinComponent = {
        nombre: [element.image, `${element.name}`],
        valor: (
          <ArgonTypography variant="button" color="text" fontWeight="medium">
            {element.current_price}
          </ArgonTypography>
        ),
        variacion: (
          <ArgonTypography variant="caption" color={element.price_change_percentage_24h >= 0 ? 'success' : 'warning'} fontWeight="medium">
            {element.price_change_percentage_24h}
            %
          </ArgonTypography>
        ),

        action,
      };
      rows.push(coinComponent);
    });
  }

  const tableData = {
    columns,
    rows,
  };
  return tableData;
}

export default cryptoMarketsTableData;

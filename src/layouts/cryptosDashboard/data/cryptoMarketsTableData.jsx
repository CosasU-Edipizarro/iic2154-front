/* eslint-disable react/prop-types */

// Import React
import React from 'react';

// @mui material components
import Icon from '@mui/material/Icon';

// Argon Dashboard 2 MUI components
import ArgonBox from 'components/ArgonBox';
import ArgonTypography from 'components/ArgonTypography';
import ArgonProgress from 'components/ArgonProgress';

import logoBitcoin from 'assets/images/small-logos/bitcoin.svg';
import logoEthereum from 'assets/images/small-logos/ethereum-eth.svg';
import logoTether from 'assets/images/small-logos/tether-1.svg';
import logoBnb from 'assets/images/small-logos/binance-logo.svg';
import logoUsdc from 'assets/images/small-logos/usd-1.svg';


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

function cryptoMarketsTableData(data) {
  console.log(data)

  const coinLogos = {
    btc: logoBitcoin,
    eth: logoEthereum,
    usdt: logoTether,
    bnb: logoBnb,
    usdc: logoUsdc,
  }
  const columns = [
    { name: 'nombre', align: 'left' },
    { name: 'valor', align: 'left' },
    { name: 'variacion', align: 'left' },
    { name: 'action', align: 'center' },
  ];
  let rows = []
  if (data["response"] && data["response"].length >= 5){
    data["response"].forEach(element => {
      const coinComponent = {
        nombre: [coinLogos[element.symbol], `${element.name}`],
        valor: (
          <ArgonTypography variant="button" color="text" fontWeight="medium">
            {element.current_price}
          </ArgonTypography>
        ),
        variacion: (
          <ArgonTypography variant="caption" color={element.price_change_percentage_24h >= 0 ? "success": "warning"} fontWeight="medium">
            {element.price_change_percentage_24h}%
          </ArgonTypography>
        ),
       
        action,
      }
      rows.push(coinComponent)
    });
  }
  
  const tableData = {
    columns,
    rows,
  };
  return tableData;
}

export default cryptoMarketsTableData;

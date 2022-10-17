/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or
  substantial portions of the Software.
*/

// Import React
import React, { useEffect, useState } from 'react';

// @mui material components
import Card from '@mui/material/Card';

// Argon Dashboard 2 MUI components
import ArgonBox from 'components/ArgonBox';
import ArgonTypography from 'components/ArgonTypography';

// Argon Dashboard 2 MUI examples
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import Table from 'examples/Tables/Table';

// Data
import cryptoMarketsTableData from 'layouts/cryptosDashboard/data/cryptoMarketsTableData';

// Import fetchMarketsData
import defaultuseFetch from 'layouts/cryptosDashboard/controllers/fetchMarketsData';
import { RepeatOneSharp } from '@mui/icons-material';

function CryptosDashboard() {
  const page = 1;
  const perPage = 5;  
  const coinData = defaultuseFetch(page, perPage);
  const { columns: prCols, rows: prRows } = cryptoMarketsTableData(coinData);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <ArgonBox mb={3}>
          <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonTypography variant="h6">Cryptos Markets ( valores en USD )</ArgonTypography>
            </ArgonBox>
            <ArgonBox
              sx={{
                '& .MuiTableRow-root:not(:last-child)': {
                  '& td': {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) => (
                      `${borderWidth[1]} solid ${borderColor}`
                    ),
                  },
                },
              }}
            >
              <Table columns={prCols} rows={prRows} />
            </ArgonBox>
          </Card>
        </ArgonBox>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default CryptosDashboard;


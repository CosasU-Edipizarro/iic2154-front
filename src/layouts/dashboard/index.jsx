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
import React from 'react';

// @mui material components
import Grid from '@mui/material/Grid';

// Argon Dashboard 2 MUI components
import ArgonBox from 'components/ArgonBox';

// Argon Dashboard 2 MUI example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'examples/Navbars/DashboardNavbar';
import Footer from 'examples/Footer';
import DetailedStatisticsCard from 'examples/Cards/StatisticsCards/DetailedStatisticsCard';
import SalesTable from 'examples/Tables/SalesTable';
import CategoriesList from 'examples/Lists/CategoriesList';

// Dashboard layout components
import Slider from 'layouts/dashboard/components/Slider';

// Data
import salesTableData from 'layouts/dashboard/data/salesTableData';
import categoriesListData from 'layouts/dashboard/data/categoriesListData';

function Default() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <ArgonBox py={3}>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="today's money"
              count="$53,000"
              icon={{ color: 'info', component: <i className="ni ni-money-coins" /> }}
              percentage={{ color: 'success', count: '+55%', text: 'since yesterday' }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="today's users"
              count="2,300"
              icon={{ color: 'error', component: <i className="ni ni-world" /> }}
              percentage={{ color: 'success', count: '+3%', text: 'since last week' }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="new clients"
              count="+3,462"
              icon={{ color: 'success', component: <i className="ni ni-paper-diploma" /> }}
              percentage={{ color: 'error', count: '-2%', text: 'since last quarter' }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <DetailedStatisticsCard
              title="sales"
              count="$103,430"
              icon={{ color: 'warning', component: <i className="ni ni-cart" /> }}
              percentage={{ color: 'success', count: '+5%', text: 'than last month' }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} mb={3}>
          <Grid item xs={12} lg={5}>
            <Slider />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <SalesTable title="Sales by Country" rows={salesTableData} />
          </Grid>
          <Grid item xs={12} md={4}>
            <CategoriesList title="categories" categories={categoriesListData} />
          </Grid>
        </Grid>
      </ArgonBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Default;

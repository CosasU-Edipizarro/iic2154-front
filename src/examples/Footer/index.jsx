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

// prop-types is a library for typechecking of props
import PropTypes from 'prop-types';

// @mui material components
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';

// Argon Dashboard 2 MUI components
import ArgonBox from 'components/ArgonBox';
import ArgonTypography from 'components/ArgonTypography';

// Argon Dashboard 2 MUI base styles
import typography from 'assets/theme/base/typography';

function Footer({ company }) {
  const { href, name } = company;
  const { size } = typography;

  return (
    <ArgonBox
      width="100%"
      display="flex"
      flexDirection={{ xs: 'column', lg: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      px={1.5}
    >
      <ArgonBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        color="text"
        fontSize={size.sm}
        px={1.5}
      >
        &copy;
        {' '}
        {new Date().getFullYear()}
        , made with
        <ArgonBox fontSize={size.md} color="text" mb={-0.5} mx={0.25}>
          <Icon color="inherit" fontSize="inherit">
            favorite
          </Icon>
        </ArgonBox>
        by
        <Link href={href} target="_blank">
          <ArgonTypography variant="button" fontWeight="medium">
            &nbsp;
            {name}
            &nbsp;
          </ArgonTypography>
        </Link>
        for a more transparent web.
      </ArgonBox>
    </ArgonBox>
  );
}

// Setting default values for the props of Footer
Footer.defaultProps = {
  company: { href: 'https://www.tiki.cl/', name: 'Tiki' },
};

// Typechecking props for the Footer
Footer.propTypes = {
  company: PropTypes.objectOf(PropTypes.string),
};

export default Footer;

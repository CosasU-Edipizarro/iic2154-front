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

// Argon Dashboard 2 MUI base styles
import borders from '@/assets/theme-dark/base/borders';
import colors from '@/assets/theme-dark/base/colors';

// Argon Dashboard 2 MUI helper functions
import pxToRem from '@/assets/theme-dark/functions/pxToRem';
import linearGradient from '@/assets/theme-dark/functions/linearGradient';

const { borderWidth, borderColor } = borders;
const { transparent, gradients, info } = colors;

const checkbox = {
  styleOverrides: {
    root: {
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: pxToRem(20),
      height: pxToRem(20),
      marginRight: pxToRem(6),
      padding: 0,
      color: transparent.main,
      border: `${borderWidth[1]} solid ${borderColor}`,
      borderRadius: pxToRem(5.6),
      transition: 'all 250ms ease',

      '&:hover': {
        backgroundColor: transparent.main,
      },

      '& .MuiSvgIcon-root': {
        fill: transparent.main,
      },

      '&.Mui-focusVisible': {
        border: `${borderWidth[2]} solid ${info.main} !important`,
      },
    },

    colorPrimary: {
      backgroundColor: transparent.main,

      '&.Mui-checked': {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
          gradients.info.main,
          gradients.info.state,
        )}`,
        borderColor: gradients.info.state,
      },

      '&:hover': {
        backgroundColor: transparent.main,
      },
    },

    colorSecondary: {
      backgroundColor: transparent.main,

      '&.Mui-checked': {
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 -1 22 22'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"), ${linearGradient(
          gradients.info.main,
          gradients.info.state,
        )}`,
        borderColor: gradients.info.state,
      },

      '&:hover': {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default checkbox;

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
import React, { useState, useEffect } from 'react';

// react-router-dom components
import { useNavigate } from 'react-router-dom';

// @mui material components
import Switch from '@mui/material/Switch';

import {
  getAccessToken,
  setAccessToken,
  setRefreshToken,
} from 'utils/manageTokens';

// Argon Dashboard 2 MUI components
import ArgonBox from 'components/ArgonBox';
import ArgonTypography from 'components/ArgonTypography';
import ArgonInput from 'components/ArgonInput';
import ArgonButton from 'components/ArgonButton';

// Authentication layout components
import IllustrationLayout from 'layouts/authentication/components/IllustrationLayout';

import fetchPostSignIn from 'layouts/authentication/sign-in/controllers/fetchPostSignIn';

// Image
const bgImage = 'https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg';

function Illustration() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  const handleSignIn = () => {
    const signInData = {
      email,
      password,
    };
    fetchPostSignIn(signInData)
      .then((data) => {
        setAccessToken(data.response.accessToken);
        setRefreshToken(data.response.refreshToken);
      })
      .then(() => {
        if (getAccessToken()) {
          window.location.reload();
          // navigate('/dashboard');
        }
      });
  };

  useEffect(() => {
    if (getAccessToken()) {
      navigate('/dashboard');
    }
  });

  return (
    <IllustrationLayout
      title="Sign In"
      description="Enter your email and password to sign in"
      illustration={{
        image: bgImage,
        title: '"Tiki is your crypto market watcher"',
        description:
          // 'The more transparent the crypto market is, the more it will develop.',
          // `${cookies.accessToken}`,
          `${getAccessToken()}`,
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput
            type="email"
            placeholder="Email"
            size="large"
            onChange={handleEmail}
          />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput
            type="password"
            placeholder="Password"
            size="large"
            onChange={handlePassword}
          />
        </ArgonBox>
        <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: 'pointer', userSelect: 'none' }}
          >
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton
            color="info"
            size="large"
            fullWidth
            onClick={handleSignIn}
          >
            Sign In
          </ArgonButton>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;

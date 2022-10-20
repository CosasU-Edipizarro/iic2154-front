import Cookies from 'universal-cookie';

const cookies = new Cookies();

const cookiesOptions = {
  sameSite: 'none',
  secure: true,
};

const getAccessToken = () => cookies.get('accessToken');
const getRefreshToken = () => cookies.get('refreshToken');

const setAccessToken = (accessToken) => cookies.set('accessToken', accessToken, cookiesOptions);
const setRefreshToken = (refreshToken) => cookies.set('refreshToken', refreshToken, cookiesOptions);

const removeTokens = () => {
  cookies.remove('accessToken', cookiesOptions);
  cookies.remove('refreshToken', cookiesOptions);
};

export {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
  setRefreshToken,
  removeTokens,
};

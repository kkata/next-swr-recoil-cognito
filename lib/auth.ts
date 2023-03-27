import Auth from '@aws-amplify/auth';

Auth.configure({
  region: process.env.AUTH_CONFIG_REGION,
  userPoolId: process.env.AUTH_CONFIG_USER_POOL_ID,
  userPoolWebClientId: process.env.AUTH_CONFIG_USER_POOL_WEB_CLIENT_ID,
});

export default Auth;

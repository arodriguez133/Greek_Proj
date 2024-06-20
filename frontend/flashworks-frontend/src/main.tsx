import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { auth0Config } from './auth0-config';
import App from './App';
import './index.css';

ReactDOM.render(
  <Auth0Provider
    domain={auth0Config.domain}
    clientId={auth0Config.clientId}
    authorizationParams={{
      redirect_uri: auth0Config.redirectUri,
    }}
    useRefreshTokens={true}
    cacheLocation="localstorage"
    >
      <App/>
    </Auth0Provider>,
    document.getElementById('root')
);

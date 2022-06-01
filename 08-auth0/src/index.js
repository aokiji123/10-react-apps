import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = process.env.REACT_APP_AUTH0_DOMAIN
const client_id = process.env.REACT_APP_AUTH0_CLIENT_ID

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Auth0Provider
    domain={domain}
    clientId={client_id}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>
)
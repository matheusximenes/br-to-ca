import 'tailwindcss/tailwind.css'

import Head from 'next/head'
import { Auth0Provider } from '@auth0/auth0-react'
import AppTemplate from '../components/main/AppTemplate'

export default function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
      //   authorizationParams={{
      //     redirect_uri: window.location.origin,
      //   }}
    >
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My awesome blog</title>
      </Head>
      <AppTemplate>
        <Component {...pageProps} />
      </AppTemplate>
    </Auth0Provider>
  )
}

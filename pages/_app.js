import 'tailwindcss/tailwind.css'

import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import AppTemplate from '../components/main/AppTemplate'

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My awesome blog</title>
      </Head>
      <AppTemplate>
        <Component {...pageProps} />
      </AppTemplate>
    </UserProvider>
  )
}

import 'tailwindcss/tailwind.css'

import Head from 'next/head'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import AppTemplate from '../components/main/AppTemplate'

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <AppTemplate>
        <Component {...pageProps} />
      </AppTemplate>
    </UserProvider>
  )
}

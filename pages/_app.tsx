import '@/ui/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';
import { GeistSans } from "geist/font/sans";
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <main className={ GeistSans.className }>
    <Component { ...pageProps } />
    <SpeedInsights />
    <Analytics />
  </main>
}

export default MyApp

import '@/ui/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component { ...pageProps } />
    <SpeedInsights />
    <Analytics />
  </>
}

export default MyApp

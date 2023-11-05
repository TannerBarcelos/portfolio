import '@/ui/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

// font awesome stuff (found @ https://stackoverflow.com/questions/76352403/how-to-add-font-awesome-to-next-js-13-project-error-module-not-found/76352510#76352510)
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component { ...pageProps } />
}

export default MyApp

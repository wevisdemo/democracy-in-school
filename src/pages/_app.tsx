import '../styles/globals.css'
import '@wevisdemo/ui/styles/index.css'
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from 'framer-motion'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppContext, AppProvider } from 'store/index'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <AnimatePresence>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AnimatePresence>
  )
}

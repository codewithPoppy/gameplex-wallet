import React from 'react';
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { QueryClient, QueryClientProvider } from "react-query";
import useInitialization from '@/hooks/useInitialization'
import useWalletConnectEventsManager from '@/hooks/useWalletConnectEventsManager'
import Layout from '@/components/Layout';
import Modal from '@/components/walletConnect/Modal';
import OptionsModal from '@/views/MoreOptionsViews/OptionsModal';
import '@/styles/globals.css';
import posthog from 'posthog-js'


const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  // Step 1 - Initialize wallets and wallet connect client
  const initialized = useInitialization()

  // Step 2 - Once initialized, set up wallet connect event manager
  useWalletConnectEventsManager(initialized)

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      // PostHog init
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_ID, { api_host: 'https://app.posthog.com' });
    }
  },[]);

  useEffect(() => {
    if (!window.location.href.includes('localhost')) {
      posthog.capture('app_initialised', { walletconnect: initialized });
    }
  },[initialized]);
  
  return (
    <React.Fragment>
      <ThemeProvider defaultTheme="dark" enableSystem={false} attribute="class">
        <QueryClientProvider client={queryClient}>
          <Layout initialized={initialized}>
            <Component {...pageProps} />
          </Layout>
          {/* WalletConnect Modals */}
          {initialized && <Modal />}
          {/* [...] More Options Modal */}
          {initialized && <OptionsModal />}
        </QueryClientProvider>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default MyApp

// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import '../styles/globals.css';
import GlobalStyle from '@components/common/GlobalStyle';
import Layout from '@components/common/layout';
import type { AppProps } from 'next/app';

// import CommonLayout from '@components/layout';
// import { DefaultTheme, ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        {/* <ThemeProvider theme={theme}> */}
        {/* <CommonLayout> */}
        <Component {...pageProps} />
        {/* </CommonLayout> */}
        {/* </ThemeProvider> */}
      </Layout>
    </>
  );
}

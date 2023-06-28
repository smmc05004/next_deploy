import '../styles/globals.css';
import GlobalStyle from '@components/common/GlobalStyle';
import Layout from '@components/common/layout';
import type { AppProps } from 'next/app';
// import { DefaultTheme, ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <Layout>
        {/* <ThemeProvider theme={theme}> */}
        <Component {...pageProps} />
        {/* </ThemeProvider> */}
      </Layout>
    </>
  );
}

import 'styles/globals.css';
import type { AppProps } from 'next/app';
import GlobalStyles from 'components/globalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <GlobalStyles />
    <Component {...pageProps} />
  </div>
);

export default MyApp;

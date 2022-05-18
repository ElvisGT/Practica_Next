import Header from '@components/Header';
import Script from 'next/script';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState(AppContext);
  const { Provider } = AppContext;

  return (
    <Provider value={initialState}>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-4DSCRWSDSG" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4DSCRWSDSG');`}
      </Script>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

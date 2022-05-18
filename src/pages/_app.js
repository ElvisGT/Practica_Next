import Header from '@components/Header'
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';
import '@styles/globals.css'

 
function MyApp({ Component, pageProps }) {
  const initialState = useInitialState(AppContext);
  const {Provider} = AppContext;

  return (
    <Provider value={initialState}>
        <Header/>
        <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

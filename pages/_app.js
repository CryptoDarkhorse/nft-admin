import { Provider } from 'react-redux';
import Head from 'next/head'
import '../public/css/style.css';
import store from '../redux/store';
import 'react-perfect-scrollbar/dist/css/styles.css';

function MyApp({ Component, pageProps }) {
    return (
        <>
        {/* <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head> */}
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
        </>
    )
  }

export default MyApp

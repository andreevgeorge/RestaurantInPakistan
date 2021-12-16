import Layout from '../components/Layout'
import '../styles/globals.css'
import Head from "next/head";


function MyApp({ Component, pageProps }) {
  return(
   
  <Layout>
         <Head>
        <title>My restaurant in Chicago</title>
        <meta name="description" content="Delicious desi food" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.css"
        />
        <script
          async
          src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js"
        />
      </Head>

  <Component {...pageProps} />
  </Layout>
  )}

export default MyApp

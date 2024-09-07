import "../styles/global.css";
import Head from "next/head";
import Layout from "../components/layout";

export default function MyApp({ Component, pageProps }) {

    return (
    <>
      <Head>
        <title>{pageProps.title ? pageProps.title : "My Comic"}</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )

}   

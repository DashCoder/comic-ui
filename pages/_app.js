import "../styles/global.css";
import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/layout";
import { Inter, Roboto_Mono } from 'next/font/google'
import { Html } from "next/document";
 
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

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

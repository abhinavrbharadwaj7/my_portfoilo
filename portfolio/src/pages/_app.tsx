import Head from "next/head";
import { AppProps } from "next/app";
// ...existing code...

function MyApp({ Component, pageProps }: AppProps) {
  console.log("Rendering MyApp with title Abhinav R Bharadwaj");
  return (
    <>
      <Head>
        <title>Abhinav R Bharadwaj</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    console.log("Rendering MyDocument with title Abhinav R Bharadwaj");
    return (
      <Html>
        <Head>
          <title>Abhinav R Bharadwaj</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

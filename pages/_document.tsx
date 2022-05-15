// eslint-disable-next-line @next/next/no-document-import-in-page

import Document, { Html, Head, Main, NextScript } from "next/document";

class Root extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head></Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Root;

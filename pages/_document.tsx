// eslint-disable-next-line @next/next/no-document-import-in-page
import { Favicon } from "_client/layout/favicon";
import { Font } from "_client/layout/font";
import Document, { Html, Head, Main, NextScript } from "next/document";

class Root extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
          <Font />
        </Head>
        <body className="bg-gradient-to-br from-slate-100/50 to-slate-50/75 text-gray-600 d:bg-dark-bg d:from-dark-bg d:to-dark-bg2 d:text-slate-400">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Root;

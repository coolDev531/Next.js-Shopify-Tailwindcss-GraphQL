// eslint-disable-next-line @next/next/no-document-import-in-page
import { Favicon } from "_client/layout/favicon";
import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class Root extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <Favicon />
          {/*<Font />*/}
          <Script id="tawk-script" strategy="afterInteractive">
            {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/62e9284654f06e12d88c8491/1g9fcalma';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })(); 
            
            // window.Tawk_API.onLoad = function () {
            //   // window.Tawk_API.hideWidget();
            //   setTimeout(()=>{ 
            //     window.Tawk_API.minimize();
            //   }, 500);
            //   console.log(window.Tawk_API);
            //   //place your code here
            //   console.log(window.Tawk_API.isChatMaximized())
            // };
            //
            // window.Tawk_API.onStatusChange = (status) => {
            //     console.log({status});
            // };
            
           /* window.Tawk_API.onChatMessageAgent = (message) => {
              if (window.Tawk_API.isChatHidden()) {
                window.Tawk_API.maximize();
              }
            };*/
            
          `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Root;

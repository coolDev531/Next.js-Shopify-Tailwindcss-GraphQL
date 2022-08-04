// eslint-disable-next-line @next/next/no-document-import-in-page
import { Favicon } from "_client/layout/favicon";
import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

class Root extends Document {
  render(): JSX.Element {
    // language=JavaScript
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
          <Script id="tawk-script" strategy="afterInteractive">
            {`<!-- Meta Pixel Code -->
              !function (f, b, e, v, n, t, s) {
                if (f.fbq) return; 
                n = f.fbq = function () {
                  n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s);
              }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '452787406861370');
              fbq('track', 'PageView');
              <!-- End Meta Pixel Code -->
          `}
          </Script>
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element,jsx-a11y/alt-text */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=452787406861370&ev=PageView&noscript=1"
            />
          </noscript>
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

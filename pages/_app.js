import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Script strategy='afterInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-LY2BTLKQZS" />
    <Script id='google-analytics' strategy='afterInteractive'>
      {
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-LY2BTLKQZS', {
          page_path: window.location.pathname,
        });`
      }
    </Script>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp

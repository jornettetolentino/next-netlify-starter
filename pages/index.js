import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Script from 'next/script'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Load the Landbot script asynchronously */}
      <Script
        src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"
        type="module"
        strategy="lazyOnload"
      />

      {/* Inline script to initialize Landbot with event listeners */}
      <Script strategy="lazyOnload" id="landbot-init">
        {`
          window.addEventListener('mouseover', initLandbot, { once: true });
          window.addEventListener('touchstart', initLandbot, { once: true });
          var myLandbot;
          function initLandbot() {
            if (!myLandbot) {
              var s = document.createElement('script');
              s.type = "module"
              s.async = true;
              s.addEventListener('load', function() {
                myLandbot = new Landbot.Popup({
                  configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3192567-0J79WIUZTS6I14S7/index.json',
                });
              });
              s.src = 'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';
              var x = document.getElementsByTagName('script')[0];
              x.parentNode.insertBefore(s, x);
            }
          }
        `}
      </Script>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

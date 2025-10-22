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
        <style>
          /* Optional: Add styles if needed to ensure visibility */
          /* For example, if the bubble isn't visible, make sure it's not hidden by CSS */
        </style>
      </Head>

      {/* Load the Landbot script asynchronously */}
      <Script
        src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"
        type="module"
        strategy="lazyOnload"
      />

      {/* Inline script to initialize Landbot as a small bubble pop-up */}
      <Script strategy="lazyOnload" id="landbot-init">
        {`
          // Attach event listener for the first user interaction
          window.addEventListener('mouseover', initLandbot, { once: true });
          window.addEventListener('touchstart', initLandbot, { once: true });

          var myLandbot;

          function initLandbot() {
            if (typeof Landbot !== 'undefined' && !myLandbot) {
              // Instantiate the bubble widget
              myLandbot = new Landbot.Bubble({
                configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3192567-0J79WIUZTS6I14S7/index.json',
              });
            } else if (typeof Landbot !== 'undefined' && !myLandbot) {
              // Fallback in case Landbot is already loaded
              myLandbot = new Landbot.Bubble({
                configUrl: 'https://storage.googleapis.com/landbot.online/v3/H-3192567-0J79WIUZTS6I14S7/index.json',
              });
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

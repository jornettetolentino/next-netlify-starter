import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Load Landbot's external module script */}
        <script
          SameSite="None; Secure"
          type="module"
          src="https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs"
        ></script>
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        {/* Landbot container */}
        <div
          id="myLandbot"
          style={{ width: '100%', height: '600px' }} // Adjust height as needed
        />

        {/* Updated inline script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
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
            `,
          }}
        />
      </main>

      <Footer />
    </div>
  )
}
